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
import AsyncStorage from '@react-native-async-storage/async-storage'
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
import { FlatList } from 'react-native-gesture-handler'

export default (roomArray: any) => {
  const { navigate, goBack } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
  const room = roomArray.route.params.roomArray
  const [roomArrayNew, setRoomArrayNew] = useState([])
  const [counter , setCounter] = useState(0)
  const [availableRoomsArray, setAvailableRoomsArray] = useState([])
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
    // Save data to local storage (AsyncStorage)
    AsyncStorage.setItem(roomName, JSON.stringify(data))
    AsyncStorage.getItem(roomName).then(value => {
      // console.log(value)
    })
  }

  const addToArray = () => {
    AsyncStorage.getAllKeys().then(keys => {
      // console.log(keys)
      for (let i = 0; i < keys.length; i++) {
        const element = keys[i]
        if (room.includes(element) == false && element != 'Settings') {
          room.push(element)
          setRoomArrayNew(room)
        }
      }
    })
  }

  AsyncStorage.getAllKeys().then(keys => {
    // console.log(keys)
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
      // console.log(element)
      if (availableRooms.includes(element) == true) {
        availableRooms.splice(availableRooms.indexOf(element), 1)
      }
    }
    setAvailableRoomsArray(availableRooms)
    // console.log(availableRooms)
  })

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
