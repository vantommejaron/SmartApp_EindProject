import { Pressable, Text } from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ParamListBase } from '@react-navigation/native'
import { Image } from 'expo-image'
import { Ionicons } from '@expo/vector-icons'
import { View } from 'lucide-react'

export const Cooling = ({brand, name}:{brand:string, name:string}) => {
  const { navigate, goBack } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
    SendCooling = () => {
      console.log('brand: ' + brand + ' name: ' + name + '')
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

          navigate('HomeScreen')
          SendCooling()
        }}
      >
        <Text style={labStyle.Cooling_title}>Bestron Smart</Text>
        <Text style={labStyle.Cooling_description}>
          Bluetooth Cooling E27
        </Text>
      </Pressable>
    </>
  )
}
