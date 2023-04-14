import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import Icon from '@mdi/react'
import { mdiHomeCircleOutline } from '@mdi/js'
import { colors } from '../../styles/colors'
import { AntDesign } from '@expo/vector-icons'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Svg, Path } from 'react-native-svg'
import { Image } from 'expo-image'
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import type { PropsWithChildren } from 'react'
import { LabStack } from '.'
import { TouchableOpacity } from 'react-native'

import {
  Sofa,
  BedDouble,
  Microwave,
  Bath,
  UtensilsCrossed,
  Laptop,
  PlusIcon
} from 'lucide-react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default () => {
  const { navigate, goBack } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
  const [text, onChangeText] = React.useState('Your name')
  const SendName = (name: string) => {
    console.log(name)
  }
  const [flexDirection, setflexDirection] = useState('column')
  return (
    <>
      <View style={labStyle.background}>
        <View style={[labStyle.background, labStyle.containerHomeScreen]}>
          <Text style={labStyle.User}>
            <Text style={labStyle.User1}>Hello, </Text>
            <Text style={labStyle.User2}>User</Text>
          </Text>
          <ScrollView style={labStyle.HomeScreenScrollView}>
            <View style={labStyle.HomeScreenBox}>
              <Pressable
                style={labStyle.HomeScreenButton}
                onPress={() => navigate('SetRoom', { room: 'Bedroom' })}
              >
                <BedDouble style={labStyle.HomeIcon} size={80} />
                <Text style={labStyle.HomeScreenButton_Text}>Bedroom</Text>
              </Pressable>
              <Pressable
                style={labStyle.HomeScreenButton}
                onPress={() => navigate('SetRoom', { room: 'Living room' })}
              >
                <Sofa style={labStyle.HomeIcon} size={80} />
                <Text style={labStyle.HomeScreenButton_Text}>Living room</Text>
              </Pressable>
              <Pressable
                style={labStyle.HomeScreenButton}
                onPress={() => navigate('SetRoom', { room: 'Kitchen' })}
              >
                <Microwave style={labStyle.HomeIcon} size={80} />
                <Text style={labStyle.HomeScreenButton_Text}>Kitchen</Text>
              </Pressable>
              <Pressable
                style={labStyle.HomeScreenButton}
                onPress={() => navigate('SetRoom', { room: 'Bathroom' })}
              >
                <Bath style={labStyle.HomeIcon} size={80} />
                <Text style={labStyle.HomeScreenButton_Text}>Bathroom</Text>
              </Pressable>
              <Pressable
                style={labStyle.HomeScreenButton}
                onPress={() => navigate('SetRoom', { room: 'Dinner room' })}
              >
                <UtensilsCrossed style={labStyle.HomeIcon} size={80} />
                <Text style={labStyle.HomeScreenButton_Text}>Dinner room</Text>
              </Pressable>
              <Pressable
                style={labStyle.HomeScreenButton}
                onPress={() => navigate('SetRoom', { room: 'Office' })}
              >
                <Laptop style={labStyle.HomeIcon} size={80} />
                <Text style={labStyle.HomeScreenButton_Text}>Office</Text>
              </Pressable>
              <Pressable
                style={labStyle.HomeScreenAddButton}
                onPress={() => navigate('AddRoomScreen')}
              >
                <PlusIcon style={labStyle.HomeAddIcon} size={80} />
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  )
}
