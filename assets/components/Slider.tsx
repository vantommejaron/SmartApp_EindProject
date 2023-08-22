import Slider from '@react-native-community/slider'
import { View, Text, Pressable, Switch, ActivityIndicator } from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import * as Haptics from 'expo-haptics'
import Animated, {
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated'

import { useEffect, useState } from 'react'
import { getRoomById, getRoomIdByName, putData } from './Api'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'

export default (roomName: any, state: any, temperature: any) => {
  const room = roomName.roomName
  const toggleState = roomName.state
  const heatingTemperature = roomName.temperature
  const [value, setValue] = useState(
    heatingTemperature ? heatingTemperature : 0,
  )
  const [changeColor, setChangeColor] = useState('#007AFF')
  const [checkToggle1, setcheckToggle1] = useState()
  const screenState = useSelector((state: RootState) => state.userList)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Stel de verwarmingsstatus in
    const SetHeatingState = async () => {
      await setLoading(true)
      const roomId = await getRoomIdByName(room, screenState.name)
      if (roomId) {
        let data = {
          heatingState: checkToggle1,
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
          SetHeatingState()
        }
      }
    }

    SetHeatingState()
  }, [checkToggle1])

  // button animation
  const style = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(changeColor, {
        duration: 500,
        easing: Easing.linear,
      }),
    }
  })

  // Stel de lichtwaarde in op basis van de waarde in de database
  const setValueTemperature = async (roomName: string) => {
    try {
      await setLoading(true)
      const roomId = await getRoomIdByName(roomName, screenState.name)
      const response = await getRoomById(roomId)
      await setLoading(false)

      if (response) {
        const data = response
        setValue(data.temperature)
        setcheckToggle1(data.heatingState)
      } 
    } catch (error) {
      setValueTemperature(room)
      return null
    }
  }

  useEffect(() => {
    setValueTemperature(room)
  }, [])

  // Stuur de data naar de database
  const SetHeating = async () => {
    await setLoading(true)
    const roomId = await getRoomIdByName(room, screenState.name)
    if (roomId) {
      let data = {
        temperature: value,
      }
      try {

        const response = await putData(roomId, data)
        await setLoading(false)
        if (response.ok) {
          // PUT-verzoek was succesvol
          setValueTemperature(room)
        } else {
          // PUT-verzoek was niet succesvol
        }
      } catch (error) {
        SetHeating()
      }
    }
  }
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
