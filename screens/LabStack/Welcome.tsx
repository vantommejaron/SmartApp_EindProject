import { View, Text, Pressable, StyleSheet } from 'react-native'
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




export default () => {
    const { navigate, goBack } = useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()

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
        <View style={[labStyle.background, labStyle.container]}>
          <Image
            style={labStyle.image}
            source={require('../../assets/images/StartScreenIcon.png')}
            contentFit="contain"
            transition={1000}
          />
          <Text style={labStyle.Welcome_title}>Welcome to Smart Home</Text>
          <Text style={labStyle.Welcome_description}>
            Get ready to experience the future of smart homes.
          </Text>
          <Pressable
            style={labStyle.button_onboarding}
            onPress={() => {
              navigate('ChooseName')
            }}
          >
            <Text style={labStyle.button_onboarding_text}>Get Started</Text>
          </Pressable>
        </View>
      </View>
    </>
  )
}
