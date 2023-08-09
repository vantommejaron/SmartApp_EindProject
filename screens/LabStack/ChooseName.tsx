import { View, Text, Pressable, TextInput, Settings } from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LinearGradient } from 'expo-linear-gradient'
import { getRoomIdByName, postData } from '../../assets/components/Api'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../Redux/store'
import { setName } from '../../Redux/userListSlice'

export default () => {
  const { navigate, goBack } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
  const [text, onChangeText] = React.useState('Your name')
  const dispatch = useDispatch()

  const screenState = useSelector((state: RootState) => state.userList)

  const SendToDatabase = async (text: string) => {
    // Kijken of het een heldige naam is
    if (text !== '' && text !== 'Your name') {
      // Sla de naam op in de Local Storage en Redux store
      AsyncStorage.setItem('Name', text)
      dispatch(setName(text))
      try {
        const roomId = await getRoomIdByName('Settings', text)
        // Kijken of de naam in de database staat
        if (roomId) {
          alert(
            'Deze persoon bestaat al in de database, verzin een andere naam',
          )
        } else {
          const data = {
            roomName: 'Settings',
            Name: text,
            Setupstate: true,
            Device: 'OFF',
          }

          const response = await postData(data)
          if (response.ok) {
            // POST-verzoek was succesvol
            navigate('ChooseRoom')
          } else {
            // POST-verzoek was niet succesvol
            console.log('Failed to send data to the database')
          }
        }
      } catch (error) {
        console.error('Error sending data:', error)
      }
    } else {
      alert('Please enter your name')
    }
  }

  return (
    <>
      <View style={labStyle.background}>
        <LinearGradient
          colors={['#08004D', '#040029']}
          style={labStyle.linearGradient}
        />
        <Pressable style={labStyle.GoBack} onPress={() => goBack()}>
          <Ionicons
            name="arrow-back-outline"
            size={20}
            color={'white'}
            style={labStyle.GoBack}
          />
        </Pressable>
        <View style={[labStyle.background, labStyle.containerName]}>
          <Text style={labStyle.Welcome_title}>
            Hello, friend. What's your first name?
          </Text>
          <TextInput
            style={labStyle.input}
            onChangeText={onChangeText}
            value={text}
            onPressIn={() => {
              onChangeText('')
            }}
          />
          <Pressable
            style={labStyle.button_onboarding_next}
            onPress={() => {
              SendToDatabase(text.toString())
            }}
          >
            <Text style={labStyle.button_onboarding_text}>Next</Text>
          </Pressable>
        </View>
      </View>
    </>
  )
}
