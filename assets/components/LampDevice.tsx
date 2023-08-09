import React from 'react'
import { Pressable, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { lab as labStyle } from '../../styles/lab'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ParamListBase } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { setDeviceState } from '../../Redux/userListSlice';
import { getRoomIdByName, putData } from './Api';
import { RootState } from '../../Redux/store';

export const LampDevice = ({
  lightName,
  lightBrand,
  roomName,
}: {
  lightName: string
  lightBrand: string
  roomName: string
}) => {
  const { navigate } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
  const dispatch = useDispatch()
  const screenState = useSelector((state: RootState) => state.userList)

  const SendToDatabase = async () => {
    dispatch(setDeviceState(true))
    const roomId = await getRoomIdByName(roomName, screenState.name)
    if (roomId) {
      let data = {
        lightBrand: lightBrand,
        lightName: lightName,
        color: '#ff0000',
      }

      try {
        const response = await putData(roomId, data)

        if (response.ok) {
          // PUT-verzoek was succesvol
          alert(
            'Succesfully updated data in the database, go back to previous screen and select room again to see changes',
          )
        } else {
          // PUT-verzoek was niet succesvol
        }
      } catch (error) {
        console.log('Error updating data:', error)
      }
    }
  }
  return (
    <>
      <Ionicons
        name="bulb-outline"
        size={60}
        color={'white'}
        style={labStyle.Choose_LightBulb}
      />
      <Pressable
        style={[labStyle.button_light, labStyle.Choose_LightBulb_Box]}
        onPress={() => {
          SendToDatabase()
          navigate('SetRoom', { room: roomName, lightName: lightName, lightBrand: lightBrand })
        }}
      >
        <Text style={labStyle.Light_title}>{lightBrand}</Text>
        <Text style={labStyle.Light_description}>{lightName}</Text>
      </Pressable>
    </>
  )
}
