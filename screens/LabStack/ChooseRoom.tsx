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
  const [loading, setLoading] = React.useState(false)
  const screenState = useSelector((state: RootState) => state.userList)

  const SendToDatabase = async (roomName: string) => {
    // Controleren of de kamer al bestaat in de database
    await setLoading(true)
    const roomExists = await checkIfRoomExists(roomName)

    if (roomExists) {
      // De kamer bestaat al, dus ga naar het volgende scherm
      await setLoading(false)
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
      await setLoading(false)
      if (response.ok) {
        // POST verzoek was succesvol
      } else {
        // POST verzoek was niet succesvol
      }
    } catch (error) {
      // console.log('Error sending data:', error)
      SendToDatabase(roomName)
    }
  }
  if (loading) {
    return (
      <View style={[labStyle.container]}>
        <LinearGradient
          colors={['#08004D', '#040029']}
          style={labStyle.linearGradient}
        />
        <Text style={labStyle.Logo}>LOADING...</Text>
      </View>
    )
  } else {
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
                  SendToDatabase('BedRoom')
                  navigate('ChooseLight', { room: 'BedRoom' })
                }}
              >
                <Text style={labStyle.button_room_text}>→ㅤBedroom</Text>
              </Pressable>
              {/* Living room */}
              <Pressable
                onPress={() => {
                  SendToDatabase('LivingRoom')
                  navigate('ChooseLight', { room: 'LivingRoom' })
                }}
              >
                <Text style={labStyle.button_room_text}>→ㅤLiving room</Text>
              </Pressable>
              {/* KITCHEN */}
              <Pressable
                onPress={() => {
                  SendToDatabase('Kitchen')
                  navigate('ChooseLight', { room: 'Kitchen' })
                }}
              >
                <Text style={labStyle.button_room_text}>→ㅤKitchen</Text>
              </Pressable>
              {/* BATHROOM */}
              <Pressable
                onPress={() => {
                  SendToDatabase('BathRoom')
                  navigate('ChooseLight', { room: 'BathRoom' })
                }}
              >
                <Text style={labStyle.button_room_text}>→ㅤBathroom</Text>
              </Pressable>
              {/* DINNER ROOM */}
              <Pressable
                onPress={() => {
                  SendToDatabase('DinnerRoom')
                  navigate('ChooseLight', { room: 'DinnerRoom' })
                }}
              >
                <Text style={labStyle.button_room_text}>→ㅤDinner room</Text>
              </Pressable>
              {/* OFFICE */}
              <Pressable
                onPress={() => {
                  SendToDatabase('Office')
                  navigate('ChooseLight', { room: 'Office' })
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
}
