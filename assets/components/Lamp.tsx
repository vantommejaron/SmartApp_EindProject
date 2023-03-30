import { Pressable, Text } from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ParamListBase } from '@react-navigation/native'
import { Image } from 'expo-image'
import { Ionicons } from '@expo/vector-icons'
import { View } from 'lucide-react'

export const Lamp = () => {
    const { navigate, goBack } =
      useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
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
            navigate('ChooseHeating')
          }}
        >
          <Text style={labStyle.Light_title}>Philips Smart</Text>
          <Text style={labStyle.Light_description}>Philips Smart LED E27</Text>
        </Pressable>
      </>
    )
    }