import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { Pressable, Text } from 'react-native'
import Icons from './Icons'
import { lab as labStyle } from '../../styles/lab'
import { useNavigation, ParamListBase } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export default (room: any) => {
  const roomArray = room.room
  console.log(roomArray)
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
              {/* <View>{GetRooms(item)}</View> */}
              <Pressable
                style={labStyle.HomeScreenButton}
                onPress={() => {
                  navigate('SetRoom', { room: item })
                }}
              >
                <Icons icon={item} style={labStyle.HomeIcon} size={80} />

                {/* <BedDouble style={labStyle.HomeIcon} size={80} /> */}
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
