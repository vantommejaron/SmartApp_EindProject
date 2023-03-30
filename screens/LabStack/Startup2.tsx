import { View, Text, Pressable } from 'react-native'
import { lab as labStyle } from '../../styles/lab'
import Icon from '@mdi/react'
import { mdiHomeCircleOutline } from '@mdi/js'
import { colors } from '../../styles/colors'
import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons' 
import Welcome from './Welcome'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { LabStack } from '.'






export default () => {
    const { navigate} = useNavigation<StackNavigationProp<ParamListBase, 'LabStack'>>()

  return (
    <>
      <View style={[labStyle.background, labStyle.container]}>
        <Ionicons name="home-outline" size={200} color={'white'} />
        <Text style={labStyle.Logo}>SMART HOME</Text>
        <Pressable
          style={labStyle.button}
          onPress={() => {navigate('HomeScreen')}}
        >
          <AntDesign name="rightcircleo" size={70} color="white" />
        </Pressable>
      </View>
    </>
  )
}
