import { View, Text, Pressable, Switch } from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Haptics from 'expo-haptics'
import Animated, {
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated'

export default (roomName: any, state: any, coolingSpeed: any) => {
  const room = roomName.roomName
  const toggleState = roomName.state
  const coolingState = roomName.coolingSpeed
  const [coolingValue, setCoolingValue] = useState(coolingState ? coolingState : 0)
  const [changeColor, setChangeColor] = useState('#007AFF')
  const [checkToggle1, setcheckToggle1] = useState(toggleState)

  // Button animation
  const style = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(changeColor, {
        duration: 500,
        easing: Easing.linear,
      }),
    }
  })

  // cooling value -1
  const SetCoolingValueDown = () => {
    if (coolingValue > 0) {
      setCoolingValue(coolingValue - 1)
    }
  }

  // cooling value +1
  const SetCoolingValueUp = () => {
    if (coolingValue < 5) {
      setCoolingValue(coolingValue + 1)
    }
  }

  // Send the cooling information from the room to the local storage
  const SetCooling = () => {
    const Cooling = coolingValue
    AsyncStorage.mergeItem(room, JSON.stringify({ Cooling: Cooling }))
  }

  if (checkToggle1) {
    // Send the cooling state from the room to the local storage
    AsyncStorage.mergeItem(room, JSON.stringify({ CoolingState: true }))
    return (
      <>
        <Switch
          style={labStyle.toggleSwitch}
          trackColor={{ false: '#767577', true: '#007AFF' }}
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
        <Animated.View style={[labStyle.buttonColorPicker, style]}>
          <Pressable
            onPress={() => {
              SetCooling()
              setChangeColor('white')
              setTimeout(() => {
                setChangeColor('#007AFF')
              }, 100)
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
            }}
          >
            <Text style={labStyle.buttonColorPickerText}>Set</Text>
          </Pressable>
        </Animated.View>
      </>
    )
  }
  if (!checkToggle1) {
    // Send the cooling state to local storage
    AsyncStorage.mergeItem(room, JSON.stringify({ CoolingState: false }))
    return (
      <>
        <Switch
          style={labStyle.toggleSwitch}
          trackColor={{ false: '#767577', true: '#007AFF' }}
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
