import { Pressable, Text } from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ParamListBase } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { getRoomIdByName, putData } from './Api'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'

export const Cooling = ({
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

  const updateSetupStateInDatabase = async () => {
    try {
      const id = await getRoomIdByName('Settings', screenState.name)
      const response = await putData(id, { Setupstate: true })
      if ((await response).ok) {
        // PUT-verzoek was succesvol
      } else {
        // PUT-verzoek was niet succesvol
      }
    } catch (error) {
      console.log('Error updating setup state in the database:', error)
    }
  }

  // Stuur de data naar de database
  const SendToDatabase = async () => {
    updateSetupStateInDatabase()
    const roomId = await getRoomIdByName(roomName, screenState.name)
    if (roomId) {
      let data = {
        coolingBrand: coolingBrand,
        coolingName: coolingName,
      }

      try {
        const response = await putData(roomId, data)

        if ((await response).ok) {
          // PUT-verzoek was succesvol
        } else {
          // PUT-verzoek was niet succesvol
        }
      } catch (error) {
        console.log('Error updating data:', error)
        SendToDatabase()
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
          navigate('HomeScreen', { room: roomName })
          SendToDatabase()
        }}
      >
        <Text style={labStyle.Cooling_title}>Bestron Smart</Text>
        <Text style={labStyle.Cooling_description}>Bluetooth Cooling E27</Text>
      </Pressable>
    </>
  )
}
