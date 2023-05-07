import { View, Text, Pressable } from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Switch } from 'react-native'
import { PlusIcon } from 'lucide-react-native'
import Icons from '../../assets/components/Icons'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LinearGradient } from 'expo-linear-gradient'

export default (room: any, deleteRoom: any, deviceState: any) => {
  const { navigate } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
  const [name, SetName] = React.useState('')
  const [roomArray, SetRoomArray] = React.useState([])
  const deleteRooms = room.route.params.deleteRoom
  const StateDevice = room.route.params.deviceState

  // Kijken of het device aan of uit staat
  const [checkToggle1, setcheckToggle1] = React.useState(
    StateDevice == 'on' ? true : false,
  )

  // Naam van de gebruiker ophalen
  AsyncStorage.getItem('Settings').then(value => {
    SetName(JSON.parse(value).userName)
  })

  // Get all the rooms from the local storage
  // Check if the room is already in the array
  if (
    room.route.params.room != undefined &&
    room.route.params.room != '' &&
    room.route.params.room != deleteRooms
  ) {
    // Add the room to the array if it is not already in the array
    if (roomArray.includes(room.route.params.room) == false) {
      roomArray.push(room.route.params.room)
    }
  }
  // Delete the room from the array
  if (deleteRooms != undefined && deleteRooms != '') {
    if (roomArray.includes(deleteRooms) == true) {
      roomArray.splice(roomArray.indexOf(deleteRooms), 1)
    }
  }
  // Get all the rooms from the local storage
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
      }
    }
  })

  // 👇 RESETS THE APP
  // AsyncStorage.setItem('Settings', JSON.stringify({ setupState: true }))
  // AsyncStorage.clear()
  // SetRoomArray([])

  if (checkToggle1) {
    AsyncStorage.mergeItem('Settings', JSON.stringify({ device: 'on' }))
    return (
      <>
        <View style={labStyle.background}>
          <LinearGradient
            colors={['#08004D', '#040029']}
            style={labStyle.linearGradient}
          />
          <View style={[labStyle.background, labStyle.containerHomeScreen]}>
            <Switch
              style={labStyle.toggleSwitchHomeScreen}
              trackColor={{ false: '#767577', true: '#007AFF' }}
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
                      <Pressable
                        style={[labStyle.HomeScreenButton]}
                        onPress={() => {
                          navigate('SetRoom', { room: item })
                        }}
                      >
                        <Icons
                          icon={item}
                          style={labStyle.HomeIcon}
                          size={80}
                        />
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
          <LinearGradient
            colors={['#08004D', '#040029']}
            style={labStyle.linearGradient}
          />
          <View style={[labStyle.background, labStyle.containerHomeScreen]}>
            <Switch
              style={labStyle.toggleSwitchHomeScreen}
              trackColor={{ false: '#767577', true: '#007AFF' }}
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
                  Press the switch above to turn them on
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
