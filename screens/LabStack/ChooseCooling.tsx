import {
  View,
  Text,
  Pressable,
  ScrollView,
} from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Cooling } from '../../assets/components/Cooling'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LinearGradient } from 'expo-linear-gradient'

type CheckboxComponentProps = {}

export default (room: any) => {
  const { navigate, goBack } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
  const roomName = room.route.params.room

  // Send the cooling information from the room to the local storage and send to the local storage that the setup is done
  const SendToLocalStorage = () => {
    let data = {
      coolingBrand: '',
      coolingName: '',
    }
    AsyncStorage.mergeItem(roomName, JSON.stringify(data))
    AsyncStorage.mergeItem('Settings', JSON.stringify({setupState: false}))
  }
  return (
    <>
      <View style={labStyle.background}>
        <LinearGradient
          colors={['#08004D', '#040029']}
          style={labStyle.linearGradient}
        />
        <Pressable style={labStyle.GoBack} onPress={() => goBack()}>
          <Ionicons
            name="arrow-back-outline"
            size={20}
            color={'white'}
            style={labStyle.GoBack}
          />
        </Pressable>
        <View style={[labStyle.background, labStyle.containerLight]}>
          <Text style={labStyle.LightTitle}>
            Choose a light device you want to connect
          </Text>
          <ScrollView>
            <Cooling
              coolingBrand="Bestron Smart"
              coolingName="Bluetooth Cooling E27"
              roomName={roomName}
            />
            <Cooling
              coolingBrand="Bestron Smart"
              coolingName="Bluetooth Cooling E27"
              roomName={roomName}
            />
            <Cooling
              coolingBrand="Bestron Smart"
              coolingName="Bluetooth Cooling E27"
              roomName={roomName}
            />
            <Cooling
              coolingBrand="Bestron Smart"
              coolingName="Bluetooth Cooling E27"
              roomName={roomName}
            />
          </ScrollView>
          <Pressable
            onPress={() => {
              SendToLocalStorage()
              navigate('HomeScreen', { room: roomName })
            }}
          >
            <Text style={labStyle.skipButton}>SKIP</Text>
          </Pressable>
        </View>
      </View>
    </>
  )
}
