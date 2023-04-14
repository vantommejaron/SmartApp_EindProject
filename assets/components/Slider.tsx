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


import { useState } from 'react'
export default () => {
    const [value, setValue] = useState(17)
    // TODO: Moet kijken naar de JSON om te checken of de toggle aan of uit staat
    const [checkToggle1, setcheckToggle1] = useState(true)
    if (checkToggle1) {
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
        </>
      )
    }
    if (!checkToggle1) {
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
