import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native'
import { lab, lab as labStyle } from '../../styles/lab'
import Icon from '@mdi/react'
import { mdiHomeCircleOutline } from '@mdi/js'
import { colors } from '../../styles/colors'
import { AntDesign } from '@expo/vector-icons'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Svg, Path } from 'react-native-svg'
import { Image } from 'expo-image'
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import type { PropsWithChildren } from 'react'
import { LabStack } from '.'
import { TouchableOpacity } from 'react-native'
import {
  Lightbulb,
  ThermometerSun,
  ThermometerSnowflake,
} from 'lucide-react-native'
// import { Device } from '../../assets/components/Device'
type DeviceProps = {
  device1: boolean
  device2: boolean
  device3: boolean
}
const Device = ({ device1, device2, device3 }: DeviceProps) => {
  if (!device1) {
    // TODO: Add LIGHT BULB
    // TODO: READ JSON AND CHECK IF THERE IS A DEVICE, MAKE IF STATEMENT
    return <Text>Lightbulb</Text>
  }
  if (device3) {
    // TODO: Add ThermometerSun
    // TODO: READ JSON AND CHECK IF THERE IS A DEVICE, MAKE IF STATEMENT
    return <Text>ThermometerSun</Text>
  }
  if (device2) {
    // TODO: Add ThermometerSnowflake
    // TODO: READ JSON AND CHECK IF THERE IS A DEVICE, MAKE IF STATEMENT
    return <Text>ThermometerSnowflake</Text>
  }
}
export default (room: any) => {
  const { navigate, goBack } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
  console.log(room.route.params.room)

  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(true)
  const [check3, setCheck3] = useState(true)
  const [typeDevice, setTypeDevice] = useState('LIGHT BULB')

  return (
    <>
      <View style={labStyle.background}>
        <View style={labStyle.SetRoomBackContainer}>
          <Pressable style={labStyle.GoBack} onPress={() => goBack()}>
            <Ionicons
              name="arrow-back-outline"
              size={20}
              color={'white'}
              style={labStyle.GoBack}
            />
          </Pressable>
          <Text style={labStyle.SetRoomBackContainerName}>
            {room.route.params.room}
          </Text>
        </View>
        <Pressable style={labStyle.SetRoomDeivceName}>
          <Text style={labStyle.button_onboarding_text}>{typeDevice}</Text>
        </Pressable>
        <View style={labStyle.SetRoomDeviceContainer}>
          <Pressable
            style={[
              check1 ? labStyle.SetRoomDeivce : labStyle.SetRoomDeivceSelected,
            ]}
            onPress={() => {;[
              setCheck1(false),
              setCheck2(true),
              setCheck3(true),
              setTypeDevice('LIGHT BULB'),
            ]
            }}
          >
            <Lightbulb
              style={[check1 ? labStyle.HomeIcon : labStyle.HomeIconSelected]}
              size={35}
            />
          </Pressable>
          <Pressable
            style={labStyle.SetRoomDeivce}
            style={[
              check2 ? labStyle.SetRoomDeivce : labStyle.SetRoomDeivceSelected,
            ]}
            onPress={() => {[
              setCheck1(true), setCheck2(false), setCheck3(true), setTypeDevice('HEATING')
            ]
            }}
          >
            <ThermometerSun
              style={[check2 ? labStyle.HomeIcon : labStyle.HomeIconSelected]}
              size={35}
            />
          </Pressable>
          <Pressable
            style={labStyle.SetRoomDeivce}
            style={[
              check3 ? labStyle.SetRoomDeivce : labStyle.SetRoomDeivceSelected,
            ]}
            onPress={() => {[
              setCheck1(true), setCheck2(true), setCheck3(false), setTypeDevice('COOLING')
            ]
            }}
          >
            <ThermometerSnowflake
              style={[check3 ? labStyle.HomeIcon : labStyle.HomeIconSelected]}
              size={35}
            />
          </Pressable>
        </View>
        <View style={labStyle.DeviceContainer}>
          <Device device1={check1} device2={check2} device3={check3} />
        </View>
      </View>
    </>
  )
}
