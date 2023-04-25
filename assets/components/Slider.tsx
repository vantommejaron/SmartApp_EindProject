import Slider from '@react-native-community/slider'
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  Switch,
} from 'react-native'
import { lab, lab as labStyle } from '../../styles/lab'
import * as Haptics from 'expo-haptics'

import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
export default (roomName: any, state: any, temperature: any) => {
  const room = roomName.roomName
  const toggleState = roomName.state
  const heatingTemperature = roomName.temperature
  const [value, setValue] = useState(heatingTemperature? heatingTemperature : 18)
  // TODO: Moet kijken naar de JSON om te checken of de toggle aan of uit staat
  const [checkToggle1, setcheckToggle1] = useState(toggleState)
  const SetHeating = () => {
    const Temperature = value
    // TODO: Send to database!!
    AsyncStorage.mergeItem(room, JSON.stringify({ Temperature: Temperature }))
  }
  if (checkToggle1) {
    // TODO: Send to database!!
    AsyncStorage.mergeItem(room, JSON.stringify({ HeatingState: true }))
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
        <View style={labStyle.containerSlider}>
          <Text style={labStyle.sliderText}>{value}°C</Text>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={40}
            step={1}
            value={value}
            onValueChange={value => setValue(value)}
            minimumTrackTintColor="#007AFF"
            maximumTrackTintColor="#736F96"
          />
        </View>
        <Pressable
          style={labStyle.buttonColorPicker}
          onPress={() => {
            SetHeating()
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
          }}
        >
          <Text style={labStyle.buttonColorPickerText}>Set</Text>
        </Pressable>
      </>
    )
  }
  if (!checkToggle1) {
    AsyncStorage.mergeItem(room, JSON.stringify({ HeatingState: false }))
    return (
      <>
        <Switch
          style={labStyle.toggleSwitch}
          trackColor={{ false: '#767577', true: '#007AFF' }}
          // thumbColor={checkToggle1 ? '#f5dd4b' : '#f4f3f4'}
          // ios_backgroundColor="#3e3e3e"
          onValueChange={() => {
            setcheckToggle1(!checkToggle1)
          }}
          value={checkToggle1}
        />
        <View style={labStyle.containerDeviceOff}>
          <Text style={labStyle.TitleDeviceOff}>Heating device is off</Text>
          <Text style={labStyle.DescriptionDeviceOff}>
            Press button to activate heater
          </Text>
        </View>
      </>
    )
  }
}
