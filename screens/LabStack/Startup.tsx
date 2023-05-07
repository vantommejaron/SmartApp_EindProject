import { View, Text, Pressable } from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons' 
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet } from 'react-native';

export default () => {
    const {navigate} = useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
    const [state, setState] = React.useState(true)
    const [deviceState, setDeviceState] = React.useState('on')

    // Checken if the app is already setup
    AsyncStorage.getItem("Settings").then(value => {
      if (value != null) {
        let data = JSON.parse(value)
        if (data.setupState == true) {
          setState(true)
        }
        if (data.setupState == false) {
          setState(false)
        }
      }
    })

    // Check if the device is on or off
    AsyncStorage.getItem('Settings').then(value => {
      if (JSON.parse(value).device == 'on') {
        setDeviceState('on')
      }
      if (JSON.parse(value).device == 'off') {
        setDeviceState('off')
      }
    })

  // When the app is not setup
  if (state) {
  return (
    <>
      <View style={[labStyle.container]}>
        <LinearGradient
          colors={['#08004D', '#040029']}
          style={labStyle.linearGradient}
        />
        <Ionicons name="home-outline" size={200} color={'white'} />
        <Text style={labStyle.Logo}>SMART HOME</Text>
        <Pressable
          style={labStyle.button}
          onPress={() => {
            navigate('Welcome')
          }}
        >
          <AntDesign name="rightcircleo" size={70} color="white" />
        </Pressable>
      </View>
    </>
  )
  } 
  // When the app has been setup
  else
  {
    return (
      <>
        <View style={[labStyle.container]}>
          <LinearGradient
            colors={['#08004D', '#040029']}
            style={labStyle.linearGradient}
          />
          <Ionicons name="home-outline" size={200} color={'white'} />
          <Text style={labStyle.Logo}>SMART HOME</Text>
          <Pressable
            style={labStyle.button}
            onPress={() => {
              navigate('HomeScreen', {
                room: '',
                deleteRoom: '',
                deviceState: deviceState,
              })
            }}
          >
            <AntDesign name="rightcircleo" size={70} color="white" />
          </Pressable>
        </View>
      </>
    )
  }
}
