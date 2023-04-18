import { Pressable, Text } from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ParamListBase } from '@react-navigation/native'
import { Image } from 'expo-image'
import { Ionicons } from '@expo/vector-icons'
import { View } from 'lucide-react'

export const Heating = ({brand, name}:{brand:string, name:string}) => {
  const { navigate, goBack } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
    const SendHeating = () => {
      console.log('brand: ' + brand + ' name: ' + name + '')
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
          navigate('ChooseCooling')
          SendHeating()
        }}
      >
        <Text style={labStyle.Heating_title}>Hama</Text>
        <Text style={labStyle.Heating_description}>Bluetooth lightbulb E27</Text>
      </Pressable>
    </>
  )
}
