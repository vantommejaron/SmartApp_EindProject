import { Pressable, Text } from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ParamListBase } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const Lamp = ({lightName, lightBrand, roomName} :{lightName:string, lightBrand:string, roomName:string}) => {
    const { navigate } =
      useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()

      // Send the light information from the room to the local storage
      const SendToLocalStorage = () => {
        let data = {
          lightBrand: lightBrand,
          lightName: lightName,
        }
        AsyncStorage.mergeItem(roomName, JSON.stringify(data))
      }
    return (
      <>
        <Ionicons
          name="bulb-outline"
          size={60}
          color={'white'}
          style={labStyle.Choose_LightBulb}
        />
        <Pressable
          style={[labStyle.button_light, labStyle.Choose_LightBulb_Box]}
          onPress={() => {
            navigate('ChooseHeating', { room: roomName })
            SendToLocalStorage()
          }}
        >
          <Text style={labStyle.Light_title}>{lightBrand}</Text>
          <Text style={labStyle.Light_description}>{lightName}</Text>
        </Pressable>
      </>
    )
    }