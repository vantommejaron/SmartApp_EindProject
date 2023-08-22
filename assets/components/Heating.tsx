import { Pressable, Text } from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ParamListBase } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { getRoomIdByName, putData } from './Api'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'

export const Heating = ({
  heatingBrand,
  heatingName,
  roomName,
}: {
  heatingBrand: string
  heatingName: string
  roomName: string
}) => {
  const { navigate } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
  const screenState = useSelector((state: RootState) => state.userList)

  
  const SendToDatabase = async () => {
    const roomId = await getRoomIdByName(roomName, screenState.name)
    if (roomId) {
      let data = {
        heatingBrand: heatingBrand,
        heatingName: heatingName,
      }

      try {
        const response = putData(roomId, data)

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
        name="flame-outline"
        size={60}
        color={'white'}
        style={labStyle.Choose_LightBulb}
      />
      <Pressable
        style={[labStyle.button_light, labStyle.Choose_LightBulb_Box]}
        onPress={() => {
          navigate('ChooseCooling', { room: roomName })
          SendToDatabase()
        }}
      >
        <Text style={labStyle.Heating_title}>Hama</Text>
        <Text style={labStyle.Heating_description}>
          Bluetooth lightbulb E27
        </Text>
      </Pressable>
    </>
  )
}
