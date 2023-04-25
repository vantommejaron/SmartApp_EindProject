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
import { TouchableOpacity } from 'react-native'
import { ColorPicker } from 'react-native-color-picker'
import { Picker } from './ColorPicker'
import CircleSlider from './CircleSlider'
import Slider from './Slider'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Haptics from 'expo-haptics'

export default (roomName: any, state: any, coolingSpeed: any) => {
  const room = roomName.roomName
  const toggleState = roomName.state
  const coolingState = roomName.coolingSpeed
  const [coolingValue, setCoolingValue] = useState(coolingState? coolingState : 0)
  const SetCoolingValueDown = () => {
    if (coolingValue > 0) {
      setCoolingValue(coolingValue - 1)
    }
  }
  const SetCoolingValueUp = () => {
    if (coolingValue < 5) {
      setCoolingValue(coolingValue + 1)
    }
  }
  const [checkToggle1, setcheckToggle1] = useState(toggleState)
  const SetCooling = () => {
    const Cooling = coolingValue
    // TODO: Send to database!!
    AsyncStorage.mergeItem(room, JSON.stringify({ Cooling: Cooling }))
  }
  if (checkToggle1) {
    // TODO: Send to database!!
    AsyncStorage.mergeItem(room, JSON.stringify({ CoolingState: true }))
    return (
      <>
        <Switch
          style={labStyle.toggleSwitch}
          trackColor={{ false: '#767577', true: '#007AFF' }}
          // thumbColor={checkToggle1 ? '#f5dd4b' : '#f4f3f4'}
          // ios_backgroundColor="#3e3e3e"
          onValueChange={() => setcheckToggle1(!checkToggle1)}
          value={checkToggle1}
        />
        <View style={labStyle.containerCooling}>
          <Pressable
            style={labStyle.CoolingStateButton}
            onPress={() => {
              SetCoolingValueDown()
            }}
          >
            <Text style={labStyle.CoolingStateButtonText}>-</Text>
          </Pressable>
          <Text style={labStyle.CoolingStateText}>{coolingValue}/5</Text>
          {/* <Text style={labStyle.CoolingStateText2}>/4</Text> */}
          <Pressable
            style={labStyle.CoolingStateButton}
            onPress={() => {
              SetCoolingValueUp()
            }}
          >
            <Text style={labStyle.CoolingStateButtonText}>+</Text>
          </Pressable>
        </View>
        <Text style={labStyle.CoolingStateButtonTextBottom}>BLOW SPEED</Text>
        <Pressable
          style={labStyle.buttonColorPicker}
          onPress={() => {
            SetCooling()
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
          }}
        >
          <Text style={labStyle.buttonColorPickerText}>Set</Text>
        </Pressable>
      </>
    )
  }
  if (!checkToggle1) {
    // TODO: Send to database!!
    AsyncStorage.mergeItem(room, JSON.stringify({ CoolingState: false }))
    return (
      <>
        <Switch
          style={labStyle.toggleSwitch}
          trackColor={{ false: '#767577', true: '#007AFF' }}
          // thumbColor={checkToggle1 ? '#f5dd4b' : '#f4f3f4'}
          // ios_backgroundColor="#3e3e3e"
          onValueChange={() => setcheckToggle1(!checkToggle1)}
          value={checkToggle1}
        />
        <View style={labStyle.containerDeviceOff}>
          <Text style={labStyle.TitleDeviceOff}>Cooling device is off</Text>
          <Text style={labStyle.DescriptionDeviceOff}>
            Press button to activate cooler
          </Text>
        </View>
      </>
    )
  }
}
