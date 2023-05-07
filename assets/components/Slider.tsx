import Slider from '@react-native-community/slider'
import { View, Text, Pressable, Switch } from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import * as Haptics from 'expo-haptics'
import Animated, {
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated'

import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
export default (roomName: any, state: any, temperature: any) => {
  const room = roomName.roomName
  const toggleState = roomName.state
  const heatingTemperature = roomName.temperature
  const [value, setValue] = useState(heatingTemperature ? heatingTemperature : 18)
  const [changeColor, setChangeColor] = useState('#007AFF')
  const [checkToggle1, setcheckToggle1] = useState(toggleState)

  // button animation
  const style = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(changeColor, {
        duration: 500,
        easing: Easing.linear,
      }),
    }
  })

  // Set the heating information from the room to the local storage
  const SetHeating = () => {
    const Temperature = value
    AsyncStorage.mergeItem(room, JSON.stringify({ Temperature: Temperature }))
  }
  if (checkToggle1) {
    // Send the heating state from the room to the local storage
    AsyncStorage.mergeItem(room, JSON.stringify({ HeatingState: true }))
    return (
      <>
        <Switch
          style={labStyle.toggleSwitch}
          trackColor={{ false: '#767577', true: '#007AFF' }}
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
        <Animated.View style={[labStyle.buttonColorPicker, style]}>
          <Pressable
            onPress={() => {
              SetHeating()
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
    // Send the heating state from the room to the local storage
    AsyncStorage.mergeItem(room, JSON.stringify({ HeatingState: false }))
    return (
      <>
        <Switch
          style={labStyle.toggleSwitch}
          trackColor={{ false: '#767577', true: '#007AFF' }}
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
