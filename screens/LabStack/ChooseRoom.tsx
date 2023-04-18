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

export default () => {
  const { navigate, goBack } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
  const SendRoom = (name: string) => {
    // TODO: Send to database!!
    console.log(name)
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
              onPressIn={() => {
                SendRoom('bedroom')
              }}
              onPressOut={() => {
                navigate('ChooseLight')
              }}
            >
              <Text style={labStyle.button_room_text}>→ㅤBedroom</Text>
            </Pressable>
            {/* Living room */}
            <Pressable
              onPressIn={() => {
                SendRoom('livingroom')
              }}
              onPressOut={() => {
                navigate('ChooseLight')
              }}
            >
              <Text style={labStyle.button_room_text}>→ㅤLiving room</Text>
            </Pressable>
            {/* KITCHEN */}
            <Pressable
              onPressIn={() => {
                SendRoom('kitchen')
              }}
              onPressOut={() => {
                navigate('ChooseLight')
              }}
            >
              <Text style={labStyle.button_room_text}>→ㅤKitchen</Text>
            </Pressable>
            {/* BATHROOM */}
            <Pressable
              onPressIn={() => {
                SendRoom('bathroom')
              }}
              onPressOut={() => {
                navigate('ChooseLight')
              }}
            >
              <Text style={labStyle.button_room_text}>→ㅤBathroom</Text>
            </Pressable>
            {/* DINNER ROOM */}
            <Pressable
              onPressIn={() => {
                SendRoom('dinnerroom')
              }}
              onPressOut={() => {
                navigate('ChooseLight')
              }}
            >
              <Text style={labStyle.button_room_text}>→ㅤDinner room</Text>
            </Pressable>
            {/* OFFICE */}
            <Pressable
              onPressIn={() => {
                SendRoom('office')
              }}
              onPressOut={() => {
                navigate('ChooseLight')
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
