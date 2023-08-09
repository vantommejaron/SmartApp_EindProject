import { View, Text, Pressable } from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LinearGradient } from 'expo-linear-gradient'
import {
  getRoomById,
  getRoomIdByName,
  putData,
} from '../../assets/components/Api'
import { useDispatch } from 'react-redux'
import { setName } from '../../Redux/userListSlice'

export default () => {
  const { navigate } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
  const dispatch = useDispatch()
  const [state, setState] = React.useState(false)
  const [deviceState, setDeviceState] = React.useState('on')

  const getDataForSettingsRoom = async () => {
    // 👇 Kijken of er een value zit in de local storage
    const value = await AsyncStorage.getItem('Name')
    if (value !== null && value !== '') {
      // 👉 Er zit een value in de local storage
      // haal id op van de room settings met de naam van de persoon
      const RoomId = await getRoomIdByName('Settings', value)
      // 👇 Kijken of er een id is gevonden
      if (RoomId) {
        // 👉 Er is een id gevonden
        dispatch(setName(value))
        const response = await getRoomById(RoomId)
        if (response.Setupstate) {
          setState(true)
        } else {
          let data = {
            Setupstate: true,
          }
          await putData(RoomId, data)
          setState(true)
        }
        if (response.Device === 'ON') {
          setDeviceState('ON')
        }
        if (response.Device === 'OFF') {
          setDeviceState('OFF')
        }
      } else {
        // 👉 Er is geen id gevonden
        await AsyncStorage.removeItem('Name')
        getDataForSettingsRoom()
      }
    } else {
      // 👉 Er zit geen value in de local storage
      setState(false)
      setDeviceState('OFF')
    }
  }

  useEffect(() => {
    getDataForSettingsRoom()
  }, [])

  if (!state) {
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
  else {
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
