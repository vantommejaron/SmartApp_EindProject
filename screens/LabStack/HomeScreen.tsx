import {
  View,
  Text,
  Pressable,
  RefreshControl,
  ActivityIndicator,
} from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Switch } from 'react-native'
import { PlusIcon } from 'lucide-react-native'
import Icons from '../../assets/components/Icons'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import {
  getRoomIdByName,
  getRoomsByName,
  getRoomById,
  putData,
} from '../../assets/components/Api'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'
import { setDeviceState } from '../../Redux/userListSlice'

export default (room: any, deleteRoom: any, deviceState: any) => {
  const { navigate } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
  const deleteRooms = room.route.params.deleteRoom
  const [checkToggle1, setcheckToggle1] = React.useState(false)
  const [name, SetName] = React.useState('')
  const [roomArray, SetRoomArray] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  const dispatch = useDispatch()
  const screenState = useSelector((state: RootState) => state.userList)

  const exampleFetch = async () => {
    await dispatch(setDeviceState(false))

    // Haal alle kamers op uit de database met de naam van de persoon.
    await getRoomsByName(screenState.name)
      .then(rooms => {
        const roomNames = rooms.map((room: { roomName: any }) => room.roomName)
        for (const room of roomNames) {
          // Voeg de kamer alleen toe aan de array als de naam niet 'Settings' is
          if (room !== 'Settings' && !roomArray.includes(room)) {
            roomArray.push(room)
          }
        }
      })
      .catch(error => {
        // console.log('Error fetching data: ', error)
      })
      await setIsLoading(false)
  }

  exampleFetch()

  // Kijken of het device aan of uit staat bij het opstarten van de app
  const setValueDeviceState = async () => {
    await setIsLoading(true)
    const id = await getRoomIdByName('Settings', screenState.name)
    if (id) {
      const response = await getRoomById(id)
      await setIsLoading(false)
      const data = response
      setcheckToggle1(data.Device == 'ON' ? true : false)
    }
  }

  useEffect(() => {
    setValueDeviceState()
  }, [])

  // Veranderd de DeviceState in de database
  useEffect(() => {
    const SetDeviceState = async () => {
      await setIsLoading(true)
      const roomId = await getRoomIdByName('Settings', screenState.name)
      if (roomId) {
        let data = {
          Device: !checkToggle1 ? 'OFF' : 'ON',
        }
        try {
          const response = await putData(roomId, data)
          await setIsLoading(false)
          if (response.ok) {
            // PUT-verzoek was succesvol
            SetName(screenState.name)
          } else {
            // PUT-verzoek was niet succesvol
          }
        } catch (error) {
          console.log('Error updating data:', error)
        }
      }
    }

    SetDeviceState()
  }, [checkToggle1])

  // Kijken of de naam in de array zit
  if (
    room.route.params.room != undefined &&
    room.route.params.room != '' &&
    room.route.params.room != deleteRooms
  ) {
    // Add the room to the array als hij er nog niet in zit
    if (roomArray.includes(room.route.params.room) == false) {
      roomArray.push(room.route.params.room)
    }
  }
  // Verwijder de room uit de array
  if (deleteRooms != undefined && deleteRooms != '') {
    if (roomArray.includes(deleteRooms) == true) {
      roomArray.splice(roomArray.indexOf(deleteRooms), 1)
    }
  }

  if (isLoading) {
    return (
      <View style={labStyle.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
      </View>
    )
  }
  if (checkToggle1) {
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
            {/* <ScrollView style={labStyle.HomeScreenScrollView}> */}
            <View style={labStyle.HomeScreenScrollView}>
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
                  keyExtractor={item => item}
                />
              </View>
              <Pressable style={labStyle.HomeScreenButtonEmpty}></Pressable>
            </View>
            {/* </ScrollView> */}

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
