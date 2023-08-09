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
import { LampDevice } from '../../assets/components/LampDevice'
import { HeatingDevice } from '../../assets/components/HeatingDevice'
import { CoolingDevice } from '../../assets/components/CoolingDevice'
import { LinearGradient } from 'expo-linear-gradient'

export default (room: any, type: any) => {
  const { goBack } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()

  const roomName = room.route.params.room
  const typeOfDevice = room.route.params.type
  
  if (typeOfDevice == 'light') {
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
              <LampDevice
                lightBrand="Philips Smart"
                lightName="Philips Smart LED E2"
                roomName={roomName}
              />
              <LampDevice
                lightBrand="Philips Smart"
                lightName="Philips Smart LED E2"
                roomName={roomName}
              />
              <LampDevice
                lightBrand="Philips Smart"
                lightName="Philips Smart LED E2"
                roomName={roomName}
              />
              <LampDevice
                lightBrand="Philips Smart"
                lightName="Philips Smart LED E2"
                roomName={roomName}
              />
              <LampDevice
                lightBrand="Philips Smart"
                lightName="Philips Smart LED E2"
                roomName={roomName}
              />
              <LampDevice
                lightBrand="Philips Smart"
                lightName="Philips Smart LED E2"
                roomName={roomName}
              />
              <LampDevice
                lightBrand="Philips Smart"
                lightName="Philips Smart LED E2"
                roomName={roomName}
              />
            </ScrollView>
            <Pressable
              onPress={() => {
                goBack()
              }}
            >
              <Text style={labStyle.skipButton}>SKIP</Text>
            </Pressable>
          </View>
        </View>
      </>
    )
  }
  if (typeOfDevice == 'heating') {
    const { goBack } =
        useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
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
              <HeatingDevice
                heatingBrand="Hama"
                heatingName="Bluetooth heater E27"
                roomName={roomName}
              />
              <HeatingDevice
                heatingBrand="Hama"
                heatingName="Bluetooth heater E27"
                roomName={roomName}
              />
              <HeatingDevice
                heatingBrand="Hama"
                heatingName="Bluetooth heater E27"
                roomName={roomName}
              />
              <HeatingDevice
                heatingBrand="Hama"
                heatingName="Bluetooth heater E27"
                roomName={roomName}
              />
              <HeatingDevice
                heatingBrand="Hama"
                heatingName="Bluetooth heater E27"
                roomName={roomName}
              />
              <HeatingDevice
                heatingBrand="Hama"
                heatingName="Bluetooth heater E27"
                roomName={roomName}
              />
              <HeatingDevice
                heatingBrand="Hama"
                heatingName="Bluetooth heater E27"
                roomName={roomName}
              />
            </ScrollView>
            <Pressable
              onPress={() => {
                goBack()
              }}
            >
              <Text style={labStyle.skipButton}>SKIP</Text>
            </Pressable>
          </View>
        </View>
      </>
    )
  }
  if (typeOfDevice == 'cooling') {
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
              <CoolingDevice
                coolingBrand="Bestron Smart"
                coolingName="Bluetooth Cooling E27"
                roomName={roomName}
              />
              <CoolingDevice
                coolingBrand="Bestron Smart"
                coolingName="Bluetooth Cooling E27"
                roomName={roomName}
              />
              <CoolingDevice
                coolingBrand="Bestron Smart"
                coolingName="Bluetooth Cooling E27"
                roomName={roomName}
              />
              <CoolingDevice
                coolingBrand="Bestron Smart"
                coolingName="Bluetooth Cooling E27"
                roomName={roomName}
              />
              <CoolingDevice
                coolingBrand="Bestron Smart"
                coolingName="Bluetooth Cooling E27"
                roomName={roomName}
              />
            </ScrollView>
            <Pressable
              onPress={() => {
                goBack()
              }}
            >
              <Text style={labStyle.skipButton}>SKIP</Text>
            </Pressable>
          </View>
        </View>
      </>
    )
  }
}
