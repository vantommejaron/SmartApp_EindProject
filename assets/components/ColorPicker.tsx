import { useState } from 'react'
import { ColorPicker } from 'react-native-color-picker'
import { Pressable, Switch, View } from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import { Text } from 'react-native'
import Slider from '@react-native-community/slider'
import { fromHsv } from 'react-native-color-picker'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Haptics from 'expo-haptics'
import Animated, {
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated'

export const Picker = (roomName: any, state: any, brightness: any, color: any) => {
  const room = roomName.roomName
  const toggleState = roomName.state
  const lightBrightness = roomName.brightness
  const lightColor = roomName.color
  const [checkToggle1, setcheckToggle1] = useState(toggleState)
  const [changeColor, setChangeColor] = useState("#007AFF")
  const [colorValue, setColorValue] = useState(lightColor? lightColor : '#FF0000')
  const [value, setValue] = useState(lightBrightness? lightBrightness : 0)

  // Send the light information from the room to the local storage
  const SetLights = () => {
    const Brightness = value
    const Color = colorValue
    AsyncStorage.mergeItem(room, JSON.stringify({ Brightness: Brightness, Color: Color }))
  }

  // Button animation
  const style = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(changeColor, {
        duration: 500,
        easing: Easing.linear,
      }),
    }
  })

  if (checkToggle1) {
    // Send the light state to the local storage
    AsyncStorage.mergeItem(room, JSON.stringify({ LightState: true }))
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
        <ColorPicker
          onColorChange={color => setColorValue(fromHsv(color))}
          style={{ flex: 1 }}
          hideSliders
          color={colorValue}
        />
        <View style={labStyle.containerSlider}>
          <Text style={labStyle.sliderTextLights}>Brightness: {value}%</Text>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={100}
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
              SetLights()
              setChangeColor("white")
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
    // Send the light state to the local storage
    AsyncStorage.mergeItem(room, JSON.stringify({ LightState: false }))
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
          <Text style={labStyle.TitleDeviceOff}>Lights are off</Text>
          <Text style={labStyle.DescriptionDeviceOff}>
            Press button to activate lights
          </Text>
        </View>
      </>
    )
  }
}
