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

export default () => {
  const [coolingValue, setCoolingValue] = useState(0)
  SetCoolingValueDown = () => {
    if (coolingValue > 0) {
      setCoolingValue(coolingValue - 1)
    }
  }
  SetCoolingValueUp = () => {
    if (coolingValue < 5) {
      setCoolingValue(coolingValue + 1)
    }
  }
  const [checkToggle1, setcheckToggle1] = useState(true)
  const SetCooling = () => {
    const Cooling = coolingValue
    // TODO: Send to database!!
    console.log('Cooling: ' + Cooling)
  }
  if (checkToggle1) {
    // TODO: Send to database!!
    console.log('CooligSwitch is on')
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
          }}
        >
          <Text style={labStyle.buttonColorPickerText}>Set</Text>
        </Pressable>
      </>
    )
  }
  if (!checkToggle1) {
    // TODO: Send to database!!
    console.log('CoolingSwitch is off')
    return (
      <Switch
        style={labStyle.toggleSwitch}
        trackColor={{ false: '#767577', true: '#007AFF' }}
        // thumbColor={checkToggle1 ? '#f5dd4b' : '#f4f3f4'}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={() => setcheckToggle1(!checkToggle1)}
        value={checkToggle1}
      />
    )
  }
}
