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


export default () => {
  const { navigate, goBack } = useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
  const [text, onChangeText] = React.useState('Your name')
  const SendName = (name: string) => {
    // TODO: Send to database!!
    console.log(name)
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
            Hello, friend. What's your name?
          </Text>
          <TextInput
            style={labStyle.input}
            onChangeText={onChangeText}
            value={text}
          />
          <Pressable
            style={labStyle.button_onboarding_next}
            onPressIn={() => {SendName(text)}}
            onPressOut={() => {
              navigate('ChooseRoom')
            }}
          >
            <Text style={labStyle.button_onboarding_text}>Next</Text>
          </Pressable>
        </View>
      </View>
    </>
  )
}
