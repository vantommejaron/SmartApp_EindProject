import { Alert, Pressable, Text } from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ParamListBase } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'
import { getRoomIdByName, putData } from './Api'

export const CoolingDevice = ({
  coolingBrand,
  coolingName,
  roomName,
}: {
  coolingBrand: string
  coolingName: string
  roomName: string
}) => {
  const { navigate } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
  const screenState = useSelector((state: RootState) => state.userList)

  // Stuur de data naar de database
  const SendToDatabase = async () => {
    const roomId = await getRoomIdByName(roomName, screenState.name)
    if (roomId) {
      let data = {
        coolingBrand: coolingBrand,
        coolingName: coolingName,
      }
      try {
        const response = await putData(roomId, data)

        if (response.ok) {
          // PUT-verzoek was succesvol
          Alert.alert(
            'Add device',
            'If you want to see the changes, go back to previous screen and select room again. Do you want to go back to previous screen?',
            [
              {
                text: 'NO',
                style: 'cancel',
              },
              {
                text: 'YES',
                onPress: async () => {
                  navigate('HomeScreen', { room: '', deleteRoom: '' })
                },
                style: 'default',
              },
            ],
          )
        } else {
          // PUT-verzoek was niet succesvol
          SendToDatabase()
        }
      } catch (error) {
        console.log('Error updating data:', error)
      }
    }
  }

  return (
    <>
      <Ionicons
        name="snow-outline"
        size={60}
        color={'white'}
        style={labStyle.Choose_LightBulb}
      />
      <Pressable
        style={[labStyle.button_light, labStyle.Choose_LightBulb_Box]}
        onPress={() => {
          SendToDatabase()
          navigate('SetRoom', { room: roomName })
        }}
      >
        <Text style={labStyle.Cooling_title}>Bestron Smart</Text>
        <Text style={labStyle.Cooling_description}>Bluetooth Cooling E27</Text>
      </Pressable>
    </>
  )
}
