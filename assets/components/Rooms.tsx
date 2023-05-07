import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Pressable, Text } from 'react-native'
import Icons from './Icons'
import { lab as labStyle } from '../../styles/lab'
import { useNavigation, ParamListBase } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export default (room: any) => {
  const roomArray = room.room
  const { navigate } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()

  if (roomArray.length > 0) {
    return (
      <>
        <FlatList
          data={roomArray}
          numColumns={2}
          renderItem={({ item }) => (
            <>
              <Pressable
                style={labStyle.HomeScreenButton}
                onPress={() => {
                  navigate('SetRoom', { room: item })
                }}
              >
                <Icons icon={item} style={labStyle.HomeIcon} size={80} />
                <Text style={labStyle.HomeScreenButton_Text}>{item}</Text>
              </Pressable>
            </>
          )}
        />
      </>
    )
  } else {
    return (
      <>
        <Text style={labStyle.NoRoomTitle}>There's no rooms yet</Text>
        <Text style={labStyle.DescriptionDeviceOff}>
          Press button to make a room
        </Text>
      </>
    )
  }
}
