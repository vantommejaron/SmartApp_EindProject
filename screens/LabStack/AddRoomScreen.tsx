import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FlatList } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

export default (roomArray: any) => {
  const { navigate, goBack } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
  const room = roomArray.route.params.roomArray
  const [roomArrayNew, setRoomArrayNew] = useState([])
  const [availableRoomsArray, setAvailableRoomsArray] = useState([])

  // Send the room information to the local storage
  const SendToLocalStorage = (roomName: string) => {
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
    // Save the data to the local storage (AsyncStorage)
    AsyncStorage.setItem(roomName, JSON.stringify(data))
  }

  // Add the room to the array
  const addToArray = () => {
    AsyncStorage.getAllKeys().then(keys => {
      for (let i = 0; i < keys.length; i++) {
        const element = keys[i]
        if (room.includes(element) == false && element != 'Settings') {
          room.push(element)
          setRoomArrayNew(room)
        }
      }
    })
  }

  // Make a list of all the available rooms
  AsyncStorage.getAllKeys().then(keys => {
    var availableRooms = [
      'BedRoom',
      'LivingRoom',
      'Kitchen',
      'BathRoom',
      'DinnerRoom',
      'Office',
      'Garage',
      'GameRoom',
    ]
    for (let i = 0; i < keys.length; i++) {
      const element = keys[i]
      if (availableRooms.includes(element) == true) {
        availableRooms.splice(availableRooms.indexOf(element), 1)
      }
    }
    setAvailableRoomsArray(availableRooms)
  })

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
            <FlatList
              data={availableRoomsArray}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => {
                    SendToLocalStorage(item.toString())
                    addToArray()
                    navigate('HomeScreen', {
                      room: item.toString(),
                      deleteRoom: '',
                    })
                  }}
                >
                  <Text style={labStyle.button_room_text}>→ㅤ{item}</Text>
                </Pressable>
              )}
            />
          </View>
        </View>
      </View>
    </>
  )
}
