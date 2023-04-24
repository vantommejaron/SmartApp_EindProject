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
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Send } from 'lucide-react'

export default () => {
  const { navigate, goBack } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
  const [text, onChangeText] = React.useState('')
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
    // Save data to local storage (AsyncStorage)
    AsyncStorage.setItem(roomName, JSON.stringify(data))
    AsyncStorage.getItem(roomName).then((value) => {
      console.log(value)
    })
  }

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
