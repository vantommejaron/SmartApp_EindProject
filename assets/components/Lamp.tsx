import { Pressable, Text } from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ParamListBase } from '@react-navigation/native'
import { Image } from 'expo-image'
import { Ionicons } from '@expo/vector-icons'
import { View } from 'lucide-react'
import { useState } from 'react'

export const Lamp = ({name, brand} :{name:string, brand:string}) => {
    const { navigate, goBack } =
      useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
      const SendLight = () => {
        // TODO: Send to database!!
        console.log(`'brand: ' + ${brand} + ' name: ' + ${name}'`)
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
            navigate('ChooseHeating')
            SendLight()
          }}
        >
          <Text style={labStyle.Light_title}>{brand}</Text>
          <Text style={labStyle.Light_description}>{name}</Text>
        </Pressable>
      </>
    )
    }