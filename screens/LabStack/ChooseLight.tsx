import {
  View,
  Text,
  Pressable,
  ScrollView,
} from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Lamp } from '../../assets/components/Lamp'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LinearGradient } from 'expo-linear-gradient'


type CheckboxComponentProps = {}

export default (room: any) => {
  const { navigate, goBack } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
  const roomName = room.route.params.room
  
  // Send the light information from room to the local storage
  const SendToLocalStorage = () => {
    let data = {
      lightBrand: '',
      lightName: '',
    }
    AsyncStorage.mergeItem(roomName, JSON.stringify(data))
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
        <View style={[labStyle.background, labStyle.containerLight]}>
          <Text style={labStyle.LightTitle}>
            Choose a light device you want to connect
          </Text>
          <ScrollView>
            <Lamp
              lightBrand="Philips Smart"
              lightName="Philips Smart LED E2"
              roomName={roomName}
            />
            <Lamp
              lightBrand="Philips Smart"
              lightName="Philips Smart LED E2"
              roomName={roomName}
            />
            <Lamp
              lightBrand="Philips Smart"
              lightName="Philips Smart LED E2"
              roomName={roomName}
            />
            <Lamp
              lightBrand="Philips Smart"
              lightName="Philips Smart LED E2"
              roomName={roomName}
            />
            <Lamp
              lightBrand="Philips Smart"
              lightName="Philips Smart LED E2"
              roomName={roomName}
            />
            <Lamp
              lightBrand="Philips Smart"
              lightName="Philips Smart LED E2"
              roomName={roomName}
            />
            <Lamp
              lightBrand="Philips Smart"
              lightName="Philips Smart LED E2"
              roomName={roomName}
            />
          </ScrollView>
          <Pressable
            onPress={() => {
              navigate('ChooseHeating', { room: roomName })
              SendToLocalStorage()
            }}
          >
            <Text style={labStyle.skipButton}>SKIP</Text>
          </Pressable>
        </View>
      </View>
    </>
  )
}
