import { useState } from 'react'
import { ColorPicker } from 'react-native-color-picker'
import { Pressable, Switch } from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import { Text } from 'react-native'
export const Picker = () => {
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
        <ColorPicker
          onColorSelected={color => alert(`Color selected: ${color}`)}
          style={{ flex: 1 }}
        />
        {/* <Pressable style={labStyle.buttonColorPicker}>
          <Text style={labStyle.buttonColorPickerText}>Next</Text>
        </Pressable> */}
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
