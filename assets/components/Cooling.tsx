import { Pressable, Text } from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ParamListBase } from '@react-navigation/native'
import { Image } from 'expo-image'
import { Ionicons } from '@expo/vector-icons'
import { Send, View } from 'lucide-react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const Cooling = ({
  coolingBrand,
  coolingName,
  roomName,
}: {
  coolingBrand: string
  coolingName: string
  roomName: string
}) => {
  const { navigate, goBack } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()

  const SendToLocalStorage = () => {
    let data = {
      coolingBrand: coolingBrand,
      coolingName: coolingName,
    }
    AsyncStorage.mergeItem(roomName, JSON.stringify(data))
    AsyncStorage.mergeItem('Settings', JSON.stringify({ setupState: false }))
    AsyncStorage.getItem(roomName).then(value => {
      console.log(value)
    })
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
          // TODO: Send to database!! (status true, zodat het naar homescreen gaat)

          navigate('HomeScreen', { room: roomName })
          SendToLocalStorage()
        }}
      >
        <Text style={labStyle.Cooling_title}>Bestron Smart</Text>
        <Text style={labStyle.Cooling_description}>Bluetooth Cooling E27</Text>
      </Pressable>
    </>
  )
}
