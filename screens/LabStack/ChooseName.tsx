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
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => {
  const { navigate, goBack } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
  const [text, onChangeText] = React.useState('Your name')
  const SendToLocalStorage = (text:string) => {
    if (text != '' && text != 'Your name') {
    AsyncStorage.mergeItem('Settings', JSON.stringify({ userName: text }))
    navigate('ChooseRoom')
    }
    else {
      alert('Please enter your name')
    }
    AsyncStorage.getItem("Settings").then(value => {
      console.log(value)
    })
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
          <Text style={labStyle.Welcome_title}>
            Hello, friend. What's your first name?
          </Text>
          <TextInput
            style={labStyle.input}
            onChangeText={onChangeText}
            value={text}
            onPressIn={() => {onChangeText('')}}
          />
          <Pressable
            style={labStyle.button_onboarding_next}
            onPress={() => {
              SendToLocalStorage(text.toString())
            }}
          >
            <Text style={labStyle.button_onboarding_text}>Next</Text>
          </Pressable>
        </View>
      </View>
    </>
  )
}
