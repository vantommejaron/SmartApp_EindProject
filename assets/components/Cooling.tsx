import { Pressable, Text } from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ParamListBase } from '@react-navigation/native'
import { Image } from 'expo-image'
import { Ionicons } from '@expo/vector-icons'
import { View } from 'lucide-react'

export const Cooling = () => {
  const { navigate, goBack } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
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
            // TODO: Set status false for index.tsx zodat hij wisselt naar de andere schermen
          navigate('HomeScreen')
        }}
      >
        <Text style={labStyle.Cooling_title}>Bestron Smart</Text>
        <Text style={labStyle.Cooling_description}>
          Bluetooth lightbulb E27
        </Text>
      </Pressable>
    </>
  )
}
