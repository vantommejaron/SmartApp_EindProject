import { View, Text, Pressable, ScrollView, Animated } from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Lamp } from '../../assets/components/Lamp'
import { LinearGradient } from 'expo-linear-gradient'
import { getRoomIdByName, putData } from '../../assets/components/Api'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'

type CheckboxComponentProps = {}

export default (room: any) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current

  const { navigate, goBack } =
    useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()
  const [loading, setLoading] = React.useState(false)
  const roomName = room.route.params.room
  const screenState = useSelector((state: RootState) => state.userList)

  const SendToDatabase = async () => {
    await setLoading(true)
    const roomId = await getRoomIdByName(roomName, screenState.name)
    if (roomId) {
      try {
        let data = {
          lightBrand: '',
          lightName: '',
          brightness: 0,
          color: 'FF0000',
        }
        const response = await putData(roomId, data)
        await setLoading(false)

        if ((await response).ok) {
          // PUT-verzoek was succesvol
        } else {
          // PUT-verzoek was niet succesvol
        }
      } catch (error) {
        // console.log('Error updating data:', error)
        SendToDatabase()
      }
    }
  }
  React.useEffect(() => {
    Animated.stagger(100, [
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start()
  }, [fadeAnim])

  if (loading) {
    return (
      <View style={[labStyle.container]}>
        <LinearGradient
          colors={['#08004D', '#040029']}
          style={labStyle.linearGradient}
        />
        <Text style={labStyle.Logo}>LOADING...</Text>
      </View>
    )
  } else {
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
          <View style={[labStyle.background, labStyle.containerLight]}>
            <Text style={labStyle.LightTitle}>
              Choose a light device you want to connect
            </Text>
            <ScrollView>
              <Animated.View style={{ opacity: fadeAnim }}>
                <Lamp
                  lightBrand="Philips Smart"
                  lightName="Philips Smart LED E2"
                  roomName={roomName}
                />
              </Animated.View>
              <Animated.View style={{ opacity: fadeAnim }}>
                <Lamp
                  lightBrand="Philips Smart"
                  lightName="Philips Smart LED E2"
                  roomName={roomName}
                />
              </Animated.View>
              <Animated.View style={{ opacity: fadeAnim }}>
                <Lamp
                  lightBrand="Philips Smart"
                  lightName="Philips Smart LED E2"
                  roomName={roomName}
                />
              </Animated.View>
              <Animated.View style={{ opacity: fadeAnim }}>
                <Lamp
                  lightBrand="Philips Smart"
                  lightName="Philips Smart LED E2"
                  roomName={roomName}
                />
              </Animated.View>
              <Animated.View style={{ opacity: fadeAnim }}>
                <Lamp
                  lightBrand="Philips Smart"
                  lightName="Philips Smart LED E2"
                  roomName={roomName}
                />
              </Animated.View>
              <Animated.View style={{ opacity: fadeAnim }}>
                <Lamp
                  lightBrand="Philips Smart"
                  lightName="Philips Smart LED E2"
                  roomName={roomName}
                />
              </Animated.View>
              <Animated.View style={{ opacity: fadeAnim }}>
                <Lamp
                  lightBrand="Philips Smart"
                  lightName="Philips Smart LED E2"
                  roomName={roomName}
                />
              </Animated.View>
            </ScrollView>
            <Pressable
              onPress={() => {
                navigate('ChooseHeating', { room: roomName })
                SendToDatabase()
              }}
            >
              <Text style={labStyle.skipButton}>SKIP</Text>
            </Pressable>
          </View>
        </View>
      </>
    )
  }
}
