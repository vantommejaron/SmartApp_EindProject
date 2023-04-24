import { useState } from 'react'
import { ColorPicker } from 'react-native-color-picker'
import { Pressable, Switch, View } from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import { Text } from 'react-native'
import Slider from '@react-native-community/slider'
import { color } from '@rneui/themed/dist/config'
import { toHsv, fromHsv } from 'react-native-color-picker'
import { LabStack } from '../../screens/LabStack'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const Picker = (roomName: any, state:any) => {
  const room = roomName.roomName
  const toggleState = roomName.state
  const [checkToggle1, setcheckToggle1] = useState(toggleState)
  const getData = async () => {
    AsyncStorage.getItem(room).then(value => {
      if (value !== null) {
        var data = JSON.parse(value).LightState
        console.log(data)
      }
    })
  }
  console.log(getData())
  console.log(room)

  const [colorValue, setColorValue] = useState('#FF0000')
  const [value, setValue] = useState(100)
  const SetLights = () => {
    const Brightness = value
    const Color = colorValue
    // TODO: Send to database!!
    console.log('brightness: ' + Brightness + ' color: ' + Color)
  }

  if (checkToggle1) {
    // TODO: Send to database!!
    AsyncStorage.mergeItem(room, JSON.stringify({ LightState: true }))
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
        <ColorPicker
          // onColorSelected={color => setColorValue(color)}
          onColorChange={color => setColorValue(fromHsv(color))}
          // onColorChange={color => console.log(`Color selected: ${color}`)}
          style={{ flex: 1 }}
          hideSliders
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
        <Pressable
          style={labStyle.buttonColorPicker}
          onPress={() => {
            SetLights()
          }}
        >
          <Text style={labStyle.buttonColorPickerText}>Set</Text>
        </Pressable>
      </>
    )
  }
  if (!checkToggle1) {
    AsyncStorage.mergeItem(room, JSON.stringify({ LightState: false }))

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
          <Text style={labStyle.TitleDeviceOff}>Lights are off</Text>
          <Text style={labStyle.DescriptionDeviceOff}>
            Press button to activate lights
          </Text>
        </View>
      </>
    )
  }
}
