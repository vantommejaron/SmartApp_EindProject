import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  Switch,
} from 'react-native'
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
import { ColorPicker } from 'react-native-color-picker'
import { Picker } from '../../assets/components/ColorPicker'
import CircleSlider from '../../assets/components/CircleSlider'
import Slider from '../../assets/components/Slider'
import Cooler from '../../assets/components/Cooler'
import {
  Lightbulb,
  ThermometerSun,
  ThermometerSnowflake,
} from 'lucide-react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import SelectDevice from './SelectDevice'

// import { Device } from '../../assets/components/Device'
type DeviceProps = {
  device1: boolean
  device2: boolean
  device3: boolean
  switchState: boolean
  room: string
}
const lightDeviceSelected = false

const Device = ({
  device1,
  device2,
  device3,
  switchState,
  room,
}: DeviceProps) => {
  const [lightDeviceSelected, setLightDeviceSelected] = useState(false)
  const [heatingDeviceSelected, setHeatingDeviceSelected] = useState(false)
  const [coolingDeviceSelected, setcoolingDeviceSelected] = useState(false)
  const [lightState, setLightState] = useState(false)
  const [heatingState, setHeatingState] = useState(false)
  const [coolingState, setCoolingState] = useState(false)
  const { navigate, goBack } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()

  AsyncStorage.getItem(room).then(value => {
    if (value != null) {
      const lightData = JSON.parse(value).lightName
      const heatingData = JSON.parse(value).heatingName
      const coolingData = JSON.parse(value).coolingName
      setLightState(JSON.parse(value).LightState)
      setHeatingState(JSON.parse(value).HeatingState)
      setCoolingState(JSON.parse(value).CoolingState)
      console.log("LIGHTS: " + lightState)
      if (!device1) {
        if (lightData != '') {
          setLightDeviceSelected(true)
        } else {
          setLightDeviceSelected(false)
        }
      }
      if (!device2) {
        if (heatingData != '') {
          setHeatingDeviceSelected(true)
        } else {
          setHeatingDeviceSelected(false)
        }
      }
      if (!device3) {
        if (coolingData != '') {
          setcoolingDeviceSelected(true)
        } else {
          setcoolingDeviceSelected(false)
        }
      }
    }
  })

  if (!device1) {
    if (lightDeviceSelected) {
      if (switchState == true) {
        return (
          <>
            <Picker roomName={room} state={lightState} type="light" />
          </>
        )
      }
      if (switchState == false) {
        return <>{/* <Picker/> */}</>
      }
    } else {
      return (
        <>
          <Text style={labStyle.DeviceSelectedTitle}>
            There is no device selected
          </Text>
          <Pressable
            style={labStyle.DeviceSelectedButton}
            onPress={() => {
              navigate('SelectDevice', { room: room, type: 'light' })
            }}
          >
            <Text style={labStyle.DeviceSelectedButtonText}>
              Select a device
            </Text>
          </Pressable>
        </>
      )
    }
  }
  if (device3) {
    if (heatingDeviceSelected) {
      if (switchState == true) {
        return (
          <>
            <Slider roomName={room} state={heatingState} />
          </>
        )
      }
      if (switchState == false) {
        return <>{/* <Slider/> */}</>
      }
    } else {
      return (
        <>
          <Text style={labStyle.DeviceSelectedTitle}>
            There is no device selected
          </Text>
          <Pressable
            style={labStyle.DeviceSelectedButton}
            onPress={() => {
              navigate('SelectDevice', { room: room, type: 'heating' })
            }}
          >
            <Text style={labStyle.DeviceSelectedButtonText}>
              Select a device
            </Text>
          </Pressable>
        </>
      )
    }
  }
  if (device2) {
    if (coolingDeviceSelected) {
      // TODO: Add ThermometerSnowflake
      // TODO: READ JSON AND CHECK IF THERE IS A DEVICE, MAKE IF STATEMENT
      if (switchState == true) {
        return (
          // TODO: Zet om naar een component
          <Cooler roomName={room} state={coolingState} />
        )
      }
      if (switchState == false) {
        return <>{/* <Slider/> */}</>
      }
    } else {
      return (
        <>
          <Text style={labStyle.DeviceSelectedTitle}>
            There is no device selected
          </Text>
          <Pressable
            style={labStyle.DeviceSelectedButton}
            onPress={() => {
              navigate('SelectDevice', { room: room, type: 'cooling' })
            }}
          >
            <Text style={labStyle.DeviceSelectedButtonText}>
              Select a device
            </Text>
          </Pressable>
        </>
      )
    }
  }
}
export default (room: any) => {
  const roomName = room.route.params.room
  const { navigate, goBack } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
  console.log(room.route.params.room)

  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(true)
  const [check3, setCheck3] = useState(true)
  const [checkToggle1, setcheckToggle1] = useState(true)
  const [typeDevice, setTypeDevice] = useState('LIGHT BULB')

  if (checkToggle1 == true) {
    // TODO: Send data to JSON (color off)
    console.log('Zet het kleur af')
  }

  return (
    <>
      <View style={labStyle.background}>
        {/* ----------------------------------- HEADER (begin) ----------------------------------- */}
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
        {/* ----------------------------------- HEADER (einde) ----------------------------------- */}
        <Pressable style={labStyle.SetRoomDeivceName}>
          <Text style={labStyle.button_onboarding_text}>{typeDevice}</Text>
        </Pressable>
        {/* ---------------------------------- OPTIONS DEVICES (begin) ----------------------------------- */}
        <View style={labStyle.SetRoomDeviceContainer}>
          <Pressable
            style={[
              check1 ? labStyle.SetRoomDeivce : labStyle.SetRoomDeivceSelected,
            ]}
            onPress={() => {
              ;[
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
            onPress={() => {
              ;[
                setCheck1(true),
                setCheck2(false),
                setCheck3(true),
                setTypeDevice('HEATING'),
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
            onPress={() => {
              ;[
                setCheck1(true),
                setCheck2(true),
                setCheck3(false),
                setTypeDevice('COOLING'),
              ]
            }}
          >
            <ThermometerSnowflake
              style={[check3 ? labStyle.HomeIcon : labStyle.HomeIconSelected]}
              size={35}
            />
          </Pressable>
        </View>
        <Text style={labStyle.chooseDeviceText}>
          LIGHTS ㅤㅤㅤ HEATING ㅤㅤㅤ COOLING
        </Text>
        {/* ---------------------------------- OPTIONS DEVICES (einde) ----------------------------------- */}
        {/* -------------------------------------- DEVICES (begin) --------------------------------------- */}
        <View style={labStyle.DeviceContainer}>
          <Device
            device1={check1}
            device2={check2}
            device3={check3}
            switchState={checkToggle1}
            room={roomName}
          />
        </View>
        {/* -------------------------------------- DEVICES (einde) --------------------------------------- */}

        {/* <View style={labStyle.toggleSwitch}>
          <Switch
            style={labStyle.toggleSwitch}
            trackColor={{ false: '#767577', true: '#007AFF' }}
            // thumbColor={checkToggle1 ? '#f5dd4b' : '#f4f3f4'}
            // ios_backgroundColor="#3e3e3e"
            onValueChange={() => setcheckToggle1(!checkToggle1)}
            value={checkToggle1}
          />
        </View> */}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  main: {
    alignItems: 'center',
  },
})
