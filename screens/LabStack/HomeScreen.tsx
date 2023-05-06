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
import React, { useEffect, useState } from 'react'
import type { PropsWithChildren } from 'react'
import { LabStack } from '.'
import { TouchableOpacity, RefreshControl, Switch } from 'react-native'
import {
  Sofa,
  BedDouble,
  Microwave,
  Bath,
  UtensilsCrossed,
  Laptop,
  PlusIcon,
} from 'lucide-react-native'
import Icons from '../../assets/components/Icons'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import { Room } from '../../assets/components/Room'

export default (room: any, deleteRoom: any, deviceState: any) => {
  const { navigate, goBack } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
    const [StateDevice, SetStateDevice] = React.useState(
      room.route.params.deviceState,
    )
    // console.log(StateDevice)

  const [name, SetName] = React.useState('')
  const [checkToggle1, setcheckToggle1] = React.useState(StateDevice=='on'?true:false)
  AsyncStorage.getItem('Settings').then(value => {
    SetName(JSON.parse(value).userName)
  })
  const [roomArray, SetRoomArray] = React.useState([])
  // console.log(room.route.params.room)
  // console.log('room: ' + room.route.params.deleteRoom)
  const deleteRooms = room.route.params.deleteRoom
  if (
    room.route.params.room != undefined &&
    room.route.params.room != '' &&
    room.route.params.room != deleteRooms
  ) {
    if (roomArray.includes(room.route.params.room) == false) {
      roomArray.push(room.route.params.room)
    }
  }
  if (deleteRooms != undefined && deleteRooms != '') {
    if (roomArray.includes(deleteRooms) == true) {
      roomArray.splice(roomArray.indexOf(deleteRooms), 1)
    }
  }

  AsyncStorage.getAllKeys().then(value => {
    for (let index = 0; index < value.length; index++) {
      const element = value[index]
      if (
        element != 'Settings' &&
        roomArray.includes(element) == false &&
        element != deleteRooms
      ) {
        roomArray.push(element)
        SetRoomArray(roomArray)
        // console.log(roomArray)
      }
    }
  })

  // 👇 RESETS THE APP
  // AsyncStorage.setItem('Settings', JSON.stringify({ setupState: true }))
  // AsyncStorage.clear()
  // SetRoomArray([])

  // const GetRooms = (item: any) => {
  //   return (
  //     <>
  //       <Pressable
  //         style={labStyle.HomeScreenButton}
  //         onPress={() => {
  //           navigate('SetRoom', { room: item })
  //         }}
  //       >
  //         <Icons icon={item} style={labStyle.HomeIcon} size={80} />
  //         {/* <BedDouble style={labStyle.HomeIcon} size={80} /> */}
  //         <Text style={labStyle.HomeScreenButton_Text}>{item}</Text>
  //       </Pressable>
  //     </>
  //   )
  // }
  if (checkToggle1) {
    AsyncStorage.mergeItem('Settings', JSON.stringify({ device: 'on' }))
    return (
      <>
        <View style={labStyle.background}>
          <View style={[labStyle.background, labStyle.containerHomeScreen]}>
            <Switch
              style={labStyle.toggleSwitchHomeScreen}
              trackColor={{ false: '#767577', true: '#007AFF' }}
              // thumbColor={checkToggle1 ? '#f5dd4b' : '#f4f3f4'}
              // ios_backgroundColor="#3e3e3e"
              onValueChange={() => {
                setcheckToggle1(!checkToggle1)
              }}
              value={checkToggle1}
            />

            <Text style={labStyle.User}>
              <Text style={labStyle.User1}>Hello, </Text>
              <Text style={labStyle.User2}>{name}</Text>
            </Text>
            <ScrollView style={labStyle.HomeScreenScrollView}>
              <View style={labStyle.HomeScreenBox}>
                <FlatList
                  data={roomArray}
                  numColumns={2}
                  renderItem={({ item }) => (
                    <>
                      {/* <View>{GetRooms(item)}</View> */}
                      <Pressable
                        style={labStyle.HomeScreenButton}
                        onPress={() => {
                          navigate('SetRoom', { room: item })
                        }}
                      >
                        <Icons
                          icon={item}
                          style={labStyle.HomeIcon}
                          size={80}
                        />
                        {/* <BedDouble style={labStyle.HomeIcon} size={80} /> */}
                        <Text style={labStyle.HomeScreenButton_Text}>
                          {item}
                        </Text>
                      </Pressable>
                    </>
                  )}
                />
              </View>
              <Pressable style={labStyle.HomeScreenButtonEmpty}></Pressable>
            </ScrollView>
            <Pressable
              style={labStyle.HomeScreenAddButton}
              onPress={() => {
                navigate('AddRoomScreen', { roomArray: roomArray })
              }}
            >
              <PlusIcon style={labStyle.HomeAddIcon} size={80} />
            </Pressable>
          </View>
        </View>
      </>
    )
  }
  if (!checkToggle1) {
    AsyncStorage.mergeItem('Settings', JSON.stringify({ device: 'off' }))
    return (
      <>
        <View style={labStyle.background}>
          <View style={[labStyle.background, labStyle.containerHomeScreen]}>
            <Switch
              style={labStyle.toggleSwitchHomeScreen}
              trackColor={{ false: '#767577', true: '#007AFF' }}
              // thumbColor={checkToggle1 ? '#f5dd4b' : '#f4f3f4'}
              // ios_backgroundColor="#3e3e3e"
              onValueChange={() => {
                setcheckToggle1(!checkToggle1)
              }}
              value={checkToggle1}
            />

            <Text style={labStyle.User}>
              <Text style={labStyle.User1}>Hello, </Text>
              <Text style={labStyle.User2}>{name}</Text>
            </Text>
            <ScrollView style={labStyle.HomeScreenScrollView}>
              <View style={labStyle.HomeScreenBox}>
                <Text style={labStyle.DevicesOffTitle}>
                  All the Devices are currently off
                </Text>
                <Text style={labStyle.DevicesOffDescription}>
                  Press the switch to turn them on
                </Text>
              </View>
              <Pressable style={labStyle.HomeScreenButtonEmpty}></Pressable>
            </ScrollView>
          </View>
        </View>
      </>
    )
  }
}
