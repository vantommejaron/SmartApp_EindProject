import {
  View,
  Text,
  Pressable,
} from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import { getRoomsByName, postData } from '../../assets/components/Api'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'

export default (roomArray: any) => {
  const { navigate, goBack } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
  const room = roomArray.route.params.roomArray
  const [availableRoomsArray, setAvailableRoomsArray] = useState([])
  const screenState = useSelector((state: RootState) => state.userList)

  const SendToDatabase = async (roomName: string) => {
    let data = {
      roomName: roomName,
      roomIcon: roomName,
      Name: screenState.name,
      lightBrand: '',
      lightName: '',
      lightState: false,
      brightness: 0,
      color: '#FF0000',
      heatingBrand: '',
      heatingName: '',
      temperature: 19,
      hetingState: false,
      coolingBrand: '',
      coolingName: '',
      speed: 0,
      CoolingState: false,
    }
    try {
      const response = postData(data)

      if ((await response).ok) {
        // POST-verzoek is gelukt,
      } else {
        // POST-verzoek is mislukt
      }
    } catch (error) {
      console.log('Error sending data to the database:', error)
    }
  }

  useEffect(() => {
    // Haal alle kamers op die bij de gebruiker horen
    const fetchAvailableRooms = async () => {
      try {
        const response = await getRoomsByName(screenState.name)

        if (response) {
          const data = response
          const availableRooms = [
            'BedRoom',
            'LivingRoom',
            'Kitchen',
            'BathRoom',
            'DinnerRoom',
            'Office',
            'Garage',
            'GameRoom',
          ]
          for (let i = 0; i < data.length; i++) {
            const element = data[i].roomName
            if (availableRooms.includes(element) == true) {
              availableRooms.splice(availableRooms.indexOf(element), 1)
            }
          }
          setAvailableRoomsArray(availableRooms)
        } else {
          // GET-verzoek was niet succesvol
        }
      } catch (error) {
        console.log('Error fetching data from the API:', error)
      }
    }
    fetchAvailableRooms()
  }, [])

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
                    SendToDatabase(item.toString())
                    // addToArray()
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
