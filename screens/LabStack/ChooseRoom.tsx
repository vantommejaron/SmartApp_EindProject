import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'
import { checkIfRoomExists, postData } from '../../assets/components/Api'

export default () => {
  const { navigate, goBack } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
  const screenState = useSelector((state: RootState) => state.userList)

  const SendToDatabase = async (roomName: string) => {
    // Controleren of de kamer al bestaat in de database
    const roomExists = await checkIfRoomExists(roomName)

    if (roomExists) {
      // De kamer bestaat al, dus ga naar het volgende scherm
      console.log('Room already exists in the database.')
      return
    }

    // De kamer bestaat nog niet, dus voeg hem toe aan de database
    let data = {
      roomName: roomName,
      roomIcon: roomName,
      Name: screenState.name,
      lightBrand: '',
      lightName: '',
      brightness: 0,
      color: '',
      lightState: false,
      heatingBrand: '',
      heatingName: '',
      temperature: 0,
      heatingState: false,
      coolingBrand: '',
      coolingName: '',
      speed: 0,
      coolingState: false,
    }

    try {
      const response = await postData(data)
      if (response.ok) {
        // POST verzoek was succesvol
      } else {
        // POST verzoek was niet succesvol
      }
    } catch (error) {
      console.log('Error sending data:', error)
    }
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
                SendToDatabase('BedRoom')
              }}
            >
              <Text style={labStyle.button_room_text}>→ㅤBedroom</Text>
            </Pressable>
            {/* Living room */}
            <Pressable
              onPress={() => {
                navigate('ChooseLight', { room: 'LivingRoom' })
                SendToDatabase('LivingRoom')
              }}
            >
              <Text style={labStyle.button_room_text}>→ㅤLiving room</Text>
            </Pressable>
            {/* KITCHEN */}
            <Pressable
              onPress={() => {
                navigate('ChooseLight', { room: 'Kitchen' })
                SendToDatabase('Kitchen')
              }}
            >
              <Text style={labStyle.button_room_text}>→ㅤKitchen</Text>
            </Pressable>
            {/* BATHROOM */}
            <Pressable
              onPress={() => {
                navigate('ChooseLight', { room: 'BathRoom' })
                SendToDatabase('BathRoom')
              }}
            >
              <Text style={labStyle.button_room_text}>→ㅤBathroom</Text>
            </Pressable>
            {/* DINNER ROOM */}
            <Pressable
              onPress={() => {
                navigate('ChooseLight', { room: 'DinnerRoom' })
                SendToDatabase('DinnerRoom')
              }}
            >
              <Text style={labStyle.button_room_text}>→ㅤDinner room</Text>
            </Pressable>
            {/* OFFICE */}
            <Pressable
              onPress={() => {
                navigate('ChooseLight', { room: 'Office' })
                SendToDatabase('Office')
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
