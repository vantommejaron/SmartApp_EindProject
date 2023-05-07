import {
  View,
  Text,
  Pressable,
} from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Alert } from 'react-native'
import { Picker } from '../../assets/components/ColorPicker'
import Slider from '../../assets/components/Slider'
import Cooler from '../../assets/components/Cooler'
import {
  Lightbulb,
  ThermometerSun,
  ThermometerSnowflake,
} from 'lucide-react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icons from '../../assets/components/Icons'
import { LinearGradient } from 'expo-linear-gradient'

type DeviceProps = {
  device1: boolean
  device2: boolean
  device3: boolean
  switchState: boolean
  room: string
}

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
  const [lightBrightness, setLightBrightness] = useState(0)
  const [lightColor, setLightColor] = useState('#FF0000')
  const [heatingTemperature, setHeatingTemperature] = useState(18)
  const [coolingSpeed, setCoolingSpeed] = useState(0)

  const { navigate } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()

  AsyncStorage.getItem(room).then(value => {
    if (value != null) {
      const lightName = JSON.parse(value).lightName
      const heatingName = JSON.parse(value).heatingName
      const coolingName = JSON.parse(value).coolingName
      const lightBrightness = JSON.parse(value).Brightness
      const lightColor = JSON.parse(value).Color
      const heatingTemperature = JSON.parse(value).Temperature
      const coolingSpeed = JSON.parse(value).Cooling

      setLightState(JSON.parse(value).LightState)
      setHeatingState(JSON.parse(value).HeatingState)
      setCoolingState(JSON.parse(value).CoolingState)
      setLightBrightness(lightBrightness)
      setLightColor(lightColor)
      setHeatingTemperature(heatingTemperature)
      setCoolingSpeed(coolingSpeed)

      // Check if there is a device selected
      if (!device1) {
        if (lightName != '') {
          setLightDeviceSelected(true)
        } else {
          setLightDeviceSelected(false)
        }
      }
      if (!device2) {
        if (heatingName != '') {
          setHeatingDeviceSelected(true)
        } else {
          setHeatingDeviceSelected(false)
        }
      }
      if (!device3) {
        if (coolingName != '') {
          setcoolingDeviceSelected(true)
        } else {
          setcoolingDeviceSelected(false)
        }
      }
    }
  })
  // When there is a device selected
  if (!device1) {
    if (lightDeviceSelected) {
      if (switchState == true) {
        return (
          <>
            <Picker
              roomName={room}
              state={lightState}
              brightness={lightBrightness}
              color={lightColor}
              type="light"
            />
          </>
        )
      }
      if (switchState == false) {
        return <>{/* <Picker/> */}</>
      }
    }
    // When there is no device selected
    else {
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
  // When there is a device selected
  if (device3) {
    if (heatingDeviceSelected) {
      if (switchState == true) {
        return (
          <>
            <Slider
              roomName={room}
              state={heatingState}
              temperature={heatingTemperature}
            />
          </>
        )
      }
      if (switchState == false) {
        return <>{/* <Slider/> */}</>
      }
    }
    // When there is no device selected
    else {
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
  // When there is a device selected
  if (device2) {
    if (coolingDeviceSelected) {
      if (switchState == true) {
        return (
          <Cooler
            roomName={room}
            state={coolingState}
            coolingSpeed={coolingSpeed}
          />
        )
      }
      if (switchState == false) {
        return <>{/* <Slider/> */}</>
      }
    }
    // When there is no device selected
    else {
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
  const { navigate, goBack } =
  useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
  const roomName = room.route.params.room

  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(true)
  const [check3, setCheck3] = useState(true)
  const checkToggle1 = true
  const [typeDevice, setTypeDevice] = useState('LIGHT BULB')

  // Delete room
  const deleteRoom = () => {
    Alert.alert('Delete Room', 'Are you sure you want to delete this room.', [
      {
        text: 'NO',
        style: 'cancel',
      },
      {
        text: 'YES',
        onPress: () => {
          navigate('HomeScreen', { room: '', deleteRoom: roomName })
          AsyncStorage.removeItem(roomName)
          
        },
        style: 'default',
      },
    ])
  }

  return (
    <>
      <View style={labStyle.background}>
        <LinearGradient
          colors={['#08004D', '#040029']}
          style={labStyle.linearGradient}
        />
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
        <Pressable
          onPress={() => {
            deleteRoom()
          }}
        >
          <Icons icon="Delete" size={30} style={labStyle.DeleteButton} />
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
              style={[check1 ? labStyle.DeviceIcon : labStyle.HomeIconSelected]}
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
              style={[check2 ? labStyle.DeviceIcon : labStyle.HomeIconSelected]}
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
              style={[check3 ? labStyle.DeviceIcon : labStyle.HomeIconSelected]}
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
      </View>
    </>
  )
}
