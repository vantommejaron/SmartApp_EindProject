import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LinearGradient } from 'expo-linear-gradient'

export default () => {
  const { navigate, goBack } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()

  // Send the room information to the local storage
  const SendToLocalStorage = (roomName:string) => {
    let data = {
      roomName: roomName,
      roomIcon: roomName,
      lightBrand: '',
      lightName: '',
      lightState: false,
      heatingBrand: '',
      heatingName: '',
      hetingState: false,
      coolingBrand: '',
      coolingName: '',
      CoolingState: false,
    }
    AsyncStorage.setItem(roomName, JSON.stringify(data))
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
        <View style={[labStyle.background, labStyle.containerRoom]}>
          <Text style={labStyle.Room_title}>
            Choose a room where you want to add a device
          </Text>
          <View style={labStyle.button_room}>
            {/* BEDROOM */}
            <Pressable
              onPress={() => {
                navigate('ChooseLight', { room: 'BedRoom' })
                SendToLocalStorage('BedRoom')
              }}
            >
              <Text style={labStyle.button_room_text}>→ㅤBedroom</Text>
            </Pressable>
            {/* Living room */}
            <Pressable
              onPress={() => {
                navigate('ChooseLight', { room: 'LivingRoom' })
                SendToLocalStorage('LivingRoom')
              }}
            >
              <Text style={labStyle.button_room_text}>→ㅤLiving room</Text>
            </Pressable>
            {/* KITCHEN */}
            <Pressable
              onPress={() => {
                navigate('ChooseLight', { room: 'Kitchen' })
                SendToLocalStorage('Kitchen')
              }}
            >
              <Text style={labStyle.button_room_text}>→ㅤKitchen</Text>
            </Pressable>
            {/* BATHROOM */}
            <Pressable
              onPress={() => {
                navigate('ChooseLight', { room: 'BathRoom' })
                SendToLocalStorage('BathRoom')
              }}
            >
              <Text style={labStyle.button_room_text}>→ㅤBathroom</Text>
            </Pressable>
            {/* DINNER ROOM */}
            <Pressable
              onPress={() => {
                navigate('ChooseLight', { room: 'DinnerRoom' })
                SendToLocalStorage('DinnerRoom')
              }}
            >
              <Text style={labStyle.button_room_text}>→ㅤDinner room</Text>
            </Pressable>
            {/* OFFICE */}
            <Pressable
              onPress={() => {
                navigate('ChooseLight', { room: 'Office' })
                SendToLocalStorage('Office')
              }}
            >
              <Text style={labStyle.button_room_text}>→ㅤOffice</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  )
}
