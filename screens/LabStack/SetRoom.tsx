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
import CoolingDevice from '../../assets/components/CoolingDevice'
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
  switchState: boolean
}

const Device = ({ device1, device2, device3, switchState }: DeviceProps) => {
  if (!device1) {
    // TODO: Add LIGHT BULB
    // TODO: READ JSON AND CHECK IF THERE IS A DEVICE, MAKE IF STATEMENT
    if (switchState == true) {
      return (
        <>
          <Picker />
        </>
      )
    }
    if (switchState == false) {
      return <>{/* <Slider/> */}</>
    }
  }
  if (device3) {
    // TODO: Add ThermometerSun
    // TODO: READ JSON AND CHECK IF THERE IS A DEVICE, MAKE IF STATEMENT
    if (switchState == true) {
      return (
        <>
          <Slider />
        </>
      )
    }
    if (switchState == false) {
      return <>{/* <Slider/> */}</>
    }
  }
  if (device2) {
    // TODO: Add ThermometerSnowflake
    // TODO: READ JSON AND CHECK IF THERE IS A DEVICE, MAKE IF STATEMENT
    if (switchState == true) {
      return (
        // TODO: Zet om naar een component
        <CoolingDevice />
      )
    }
    if (switchState == false) {
      return <>{/* <Slider/> */}</>
    }
  }
}
export default (room: any) => {
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
        <View style={labStyle.DeviceContainer}>
          <Device
            device1={check1}
            device2={check2}
            device3={check3}
            switchState={checkToggle1}
          />
        </View>

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
