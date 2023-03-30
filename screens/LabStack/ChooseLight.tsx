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
import { Lamp } from '../../assets/components/Lamp'


type CheckboxComponentProps = {}

export default () => {
  const { navigate, goBack } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
  const [isSelected, setSelection] = useState(false)
  const [check1, setCheck1] = useState(false)
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
            <Lamp/>
            <Lamp/>
            <Lamp/>
            <Lamp/>
            <Lamp/>
            <Lamp/>
            <Lamp/>
          </ScrollView>
        </View>
      </View>
    </>
  )
}
