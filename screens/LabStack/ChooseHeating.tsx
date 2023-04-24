import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import Icon from '@mdi/react'
import { mdiHomeCircleOutline } from '@mdi/js'
import { colors } from '../../styles/colors'
import { AntDesign } from '@expo/vector-icons'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Image } from 'expo-image'
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { CheckBox } from '@rneui/themed'
import Svg, { Circle, Rect } from 'react-native-svg'
import { Heating } from '../../assets/components/Heating'
import AsyncStorage from '@react-native-async-storage/async-storage'

type CheckboxComponentProps = {}

export default (room:any) => {
  const { navigate, goBack } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
  const [isSelected, setSelection] = useState(false)
  const [check1, setCheck1] = useState(false)
  const roomName = room.route.params.room
  console.log(roomName)

  const SendToLocalStorage = () => {
    let data = {
      heatingBrand: '',
      heatingName: '',
    }
    AsyncStorage.mergeItem(roomName, JSON.stringify(data))
    AsyncStorage.getItem(roomName).then(value => {
      console.log(value)
    })
  }
  return (
    <>
      <View style={labStyle.background}>
        <Pressable style={labStyle.GoBack} onPress={() => goBack()}>
          <Ionicons
            name="arrow-back-outline"
            size={20}
            color={'white'}
            style={labStyle.GoBack}
          />
        </Pressable>
        <View style={[labStyle.background, labStyle.containerLight]}>
          <Text style={labStyle.LightTitle}>
            Choose a light device you want to connect
          </Text>
          <ScrollView>
            <Heating heatingBrand="Hama" heatingName="Bluetooth heater E27" roomName={roomName} />
            <Heating heatingBrand="Hama" heatingName="Bluetooth heater E27" roomName={roomName} />
            <Heating heatingBrand="Hama" heatingName="Bluetooth heater E27" roomName={roomName} />
            <Heating heatingBrand="Hama" heatingName="Bluetooth heater E27" roomName={roomName} />
            <Heating heatingBrand="Hama" heatingName="Bluetooth heater E27" roomName={roomName} />
            <Heating heatingBrand="Hama" heatingName="Bluetooth heater E27" roomName={roomName} />
            <Heating heatingBrand="Hama" heatingName="Bluetooth heater E27" roomName={roomName} />
            <Heating heatingBrand="Hama" heatingName="Bluetooth heater E27" roomName={roomName} />
          </ScrollView>
          <Pressable
            onPress={() => {
              navigate('ChooseCooling', { room: roomName,
              })
              SendToLocalStorage()
            }}
          >
            <Text style={labStyle.skipButton}>SKIP</Text>
          </Pressable>
        </View>
      </View>
    </>
  )
}
