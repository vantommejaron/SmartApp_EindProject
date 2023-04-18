import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import Icon from '@mdi/react'
import { mdiHomeCircleOutline } from '@mdi/js'
import { colors } from '../../styles/colors'
import { AntDesign } from '@expo/vector-icons'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Svg, Path } from 'react-native-svg'
import { Image } from 'expo-image'
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import {
  Sofa,
  BedDouble,
  Microwave,
  Bath,
  UtensilsCrossed,
  Laptop,
  PlusIcon,
  CarIcon,
  Gamepad2,  
} from 'lucide-react-native'

export default () => {
  const { navigate, goBack } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
  const [text, onChangeText] = React.useState('Your room name')
  const [icon, seticon] = useState(0)
  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)
  const [check3, setCheck3] = useState(false)
  const [check4, setCheck4] = useState(false)
  const [check5, setCheck5] = useState(false)
  const [check6, setCheck6] = useState(false)
  const [check7, setCheck7] = useState(false)
  const [check8, setCheck8] = useState(false)
  
  const SendIconAndName = (icon: any, text:string) => {
    // TODO: CHECK IF THE NAME IS ALREADY IN JSON
    if (text == 'Your room name' || text == '') {
        alert('Please enter a name for your room.')
    } 
    if (icon == 0) {
        alert('Please choose an icon for your room.')
    }
    if (text != 'Your room name' && icon != 0) {
      //TODO: Send to database!!
        navigate('HomeScreen'), 
        console.log('Icon: ' + icon + ' Name: ' + text)
    }

  }
  return (
    <>
      <View style={labStyle.background}>
        <Pressable style={labStyle.GoBack} onPress={() => goBack()}>
          <Ionicons
            name="arrow-back-outline"
            size={20}
            color={'white'}
            style={labStyle.GoBack}
          />
        </Pressable>
        <View style={[labStyle.background, labStyle.containerName]}>
          <Text style={labStyle.Welcome_title}>Enter your room name.</Text>
          <TextInput
            style={labStyle.inputAddDevice}
            onChangeText={onChangeText}
            value={text}
          />
          <Text style={labStyle.AddDevice_title}>Choose an icon:</Text>
          <View>
            <View style={labStyle.iconContainer}>
              <Pressable
                style={!check1 ? labStyle.icon : labStyle.iconSelected}
                onPress={() => {
                  [
                    setCheck1(true),
                    setCheck2(false),
                    setCheck3(false),
                    setCheck4(false),
                    setCheck5(false),
                    setCheck6(false),
                    setCheck7(false),
                    setCheck8(false),
                    seticon(1),
                  ]
                }}
              >
                <BedDouble
                  size={30}
                  color={!check1 ? colors.title : colors.accent}
                />
              </Pressable>
              <Pressable
                style={!check2 ? labStyle.icon : labStyle.iconSelected}
                onPress={() => {
                  ;[
                    setCheck1(false),
                    setCheck2(true),
                    setCheck3(false),
                    setCheck4(false),
                    setCheck5(false),
                    setCheck6(false),
                    setCheck7(false),
                    setCheck8(false),
                    seticon(2),
                  ]
                }}
              >
                <Sofa
                  size={30}
                  color={!check2 ? colors.title : colors.accent}
                />
              </Pressable>
              <Pressable
                style={!check3 ? labStyle.icon : labStyle.iconSelected}
                onPress={() => {
                  ;[
                    setCheck1(false),
                    setCheck2(false),
                    setCheck3(true),
                    setCheck4(false),
                    setCheck5(false),
                    setCheck6(false),
                    setCheck7(false),
                    setCheck8(false),
                    seticon(3),
                  ]
                }}
              >
                <Microwave
                  size={30}
                  color={!check3 ? colors.title : colors.accent}
                />
              </Pressable>
              <Pressable
                style={!check4 ? labStyle.icon : labStyle.iconSelected}
                onPress={() => {
                  ;[
                    setCheck1(false),
                    setCheck2(false),
                    setCheck3(false),
                    setCheck4(true),
                    setCheck5(false),
                    setCheck6(false),
                    setCheck7(false),
                    setCheck8(false),
                    seticon(4),
                  ]
                }}
              >
                <Bath
                  size={30}
                  color={!check4 ? colors.title : colors.accent}
                />
              </Pressable>
              <Pressable
                style={!check5 ? labStyle.icon : labStyle.iconSelected}
                onPress={() => {
                  ;[
                    setCheck1(false),
                    setCheck2(false),
                    setCheck3(false),
                    setCheck4(false),
                    setCheck5(true),
                    setCheck6(false),
                    setCheck7(false),
                    setCheck8(false),
                    seticon(5),
                  ]
                }}
              >
                <UtensilsCrossed
                  size={30}
                  color={!check5 ? colors.title : colors.accent}
                />
              </Pressable>
              <Pressable
                style={!check6 ? labStyle.icon : labStyle.iconSelected}
                onPress={() => {
                  ;[
                    setCheck1(false),
                    setCheck2(false),
                    setCheck3(false),
                    setCheck4(false),
                    setCheck5(false),
                    setCheck6(true),
                    setCheck7(false),
                    setCheck8(false),
                    seticon(6),
                  ]
                }}
              >
                <Laptop
                  size={30}
                  color={!check6 ? colors.title : colors.accent}
                />
              </Pressable>
              <Pressable
                style={!check7 ? labStyle.icon : labStyle.iconSelected}
                onPress={() => {
                  ;[
                    setCheck1(false),
                    setCheck2(false),
                    setCheck3(false),
                    setCheck4(false),
                    setCheck5(false),
                    setCheck6(false),
                    setCheck7(true),
                    setCheck8(false),
                    seticon(7),
                  ]
                }}
              >
                <CarIcon
                  size={30}
                  color={!check7 ? colors.title : colors.accent}
                />
              </Pressable>
              <Pressable
                style={!check8 ? labStyle.icon : labStyle.iconSelected}
                onPress={() => {
                  ;[
                    setCheck1(false),
                    setCheck2(false),
                    setCheck3(false),
                    setCheck4(false),
                    setCheck5(false),
                    setCheck6(false),
                    setCheck7(false),
                    setCheck8(true),
                    seticon(8),
                  ]
                }}
              >
                <Gamepad2
                  size={30}
                  color={!check8 ? colors.title : colors.accent}
                />
              </Pressable>
            </View>
          </View>
          <Pressable
            style={labStyle.button_onboarding_next}
            onPress={() => {[SendIconAndName(icon, text)]
            }}
          >
            <Text style={labStyle.button_onboarding_text}>Create room</Text>
          </Pressable>
        </View>
      </View>
    </>
  )
}
