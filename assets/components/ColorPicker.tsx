import { useEffect, useState } from 'react'
import { ColorPicker } from 'react-native-color-picker'
import { ActivityIndicator, Pressable, Switch, View } from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import { Text } from 'react-native'
import Slider from '@react-native-community/slider'
import { fromHsv } from 'react-native-color-picker'
import * as Haptics from 'expo-haptics'
import Animated, {
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated'
import { getRoomById, getRoomIdByName, getRoomsByName, putData } from './Api'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'

export const Picker = (
  roomName: any,
  state: any,
  brightness: any,
  color: any,
) => {
  const room = roomName.roomName
  const toggleState = roomName.state
  const lightBrightness = roomName.brightness
  const lightColor = roomName.color
  const [checkToggle1, setcheckToggle1] = useState()
  const [changeColor, setChangeColor] = useState('#007AFF')
  const [colorValue, setColorValue] = useState(
    lightColor ? lightColor : '#FF0000',
  )
  const [value, setValue] = useState(lightBrightness ? lightBrightness : 0)
  const [isSettingLights, setIsSettingLights] = useState(false)
  const [loading, setLoading] = useState(true)
  const screenState = useSelector((state: RootState) => state.userList)

  useEffect(() => {
    // Stel de lichtstatus in
    const SetLightState = async () => {
      await setLoading(true)
      const roomId = await getRoomIdByName(room, screenState.name)
      const responds = await getRoomById(roomId)
      if (roomId) {
        let data = {
          lightState: checkToggle1,
        }

        try {
          const response = await putData(roomId, data)
          await setLoading(false)

          if ((await response).ok) {
            // PUT-verzoek was succesvol
          } else {
            // PUT-verzoek was niet succesvol
          }
        } catch (error) {
          SetLightState()
        }
      }
    }
    SetLightState()
  }, [checkToggle1])

  // Haal de lichtinformatie van de kamer op uit de database
  const setValueLight = async (roomName: string) => {
    try {
      await setLoading(true)
      const roomId = await getRoomIdByName(roomName, screenState.name)
      const response = await getRoomById(roomId)
      await setLoading(false)
      const data = response
      setValue(data.brightness)
      setColorValue(data.color)
      setcheckToggle1(data.lightState)
    } catch (error) {
      setValueLight(room)
    }
  }

  useEffect(() => {
    setValueLight(room)
  }, [])

  // Stuur de lichtinformatie naar de database
  const SetLights = async () => {
    if (isSettingLights) {
      return
    }
    setIsSettingLights(true)
    await setLoading(true)
    const roomId = await getRoomIdByName(room, screenState.name)
    if (roomId) {
      let data = {
        brightness: value,
        color: colorValue,
      }

      try {
        const response = await putData(roomId, data)
        await setLoading(false)

        if (response.ok) {
          // PUT-verzoek was succesvol
        } else {
          // PUT-verzoek was niet succesvol
        }
      } catch (error) {
        SetLights()
      }
    }
  }

  // Knop animatie
  const style = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(changeColor, {
        duration: 500,
        easing: Easing.linear,
      }),
    }
  })

  if (loading) {
    // Show loading indicator
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    )
  }

  if (checkToggle1) {
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
