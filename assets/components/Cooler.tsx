import { View, Text, Pressable, Switch, ActivityIndicator } from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import React, { useEffect, useState } from 'react'
import * as Haptics from 'expo-haptics'
import Animated, {
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'
import { getRoomById, getRoomIdByName, putData } from './Api'

export default (roomName: any, state: any, coolingSpeed: any) => {
  const room = roomName.roomName
  const toggleState = roomName.state
  const coolingState = roomName.coolingSpeed
  const [coolingValue, setCoolingValue] = useState(
    coolingState ? coolingState : 0,
  )
  const [changeColor, setChangeColor] = useState('#007AFF')
  const [checkToggle1, setcheckToggle1] = useState(toggleState)
  const [loading, setLoading] = useState(true)
  const screenState = useSelector((state: RootState) => state.userList)

  useEffect(() => {
    // Stel de koelingsstatus in
    const SetCoolingState = async () => {
      await setLoading(true)
      const roomId = await getRoomIdByName(room, screenState.name)
      if (roomId) {
        let data = {
          coolingState: checkToggle1,
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
          SetCoolingState()
        }
      }
    }

    SetCoolingState()
  }, [checkToggle1])

  // Knop animatie
  const style = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(changeColor, {
        duration: 500,
        easing: Easing.linear,
      }),
    }
  })

  // koelingswaarde -1
  const SetCoolingValueDown = () => {
    if (coolingValue > 0) {
      setCoolingValue(coolingValue - 1)
    }
  }

  // koelingswaarde +1
  const SetCoolingValueUp = () => {
    if (coolingValue < 5) {
      setCoolingValue(coolingValue + 1)
    }
  }

  // Stel de koelingswaarde in op basis van de waarde in de database
  const setValueCooling = async (roomName: string) => {
    try {
      await setLoading(true)
      const roomId = await getRoomIdByName(roomName, screenState.name)
      const response = await getRoomById(roomId)
      await setLoading(false)
      if (response) {
        const data = response
        setCoolingValue(data.speed)
        setcheckToggle1(data.coolingState)
      }
    } catch (error) {
      setValueCooling(room)
    }
  }

  useEffect(() => {
    setValueCooling(room)
  }, [])

  // Stuur de data naar de database
  const SetCooling = async () => {
    await setLoading(true)
    const roomId = await getRoomIdByName(room, screenState.name)
    if (roomId) {
      let data = {
        speed: coolingValue,
      }

      try {
        const response = await putData(roomId, data)
        await setLoading(false)
        if (response.ok) {
          // PUT-verzoek was succesvol
          setValueCooling(room)
        } else {
          // PUT-verzoek was niet succesvol
        }
      } catch (error) {
        SetCooling()
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
