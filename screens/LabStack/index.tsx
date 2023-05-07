import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Startup from './Startup'
import Welcome from './Welcome'
import ChooseName from './ChooseName'
import ChooseRoom from './ChooseRoom'
import ChooseLight from './ChooseLight'
import ChooseHeating from './ChooseHeating'
import ChooseCooling from './ChooseCooling'
import HomeScreen from './HomeScreen'
import SetRoom from './SetRoom'
import AddRoomScreen from './AddRoomScreen'
import SelectDevice from './SelectDevice'

const Stack = createStackNavigator()

export function LabStack() {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Startup" component={Startup} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="ChooseName" component={ChooseName} />
        <Stack.Screen name="ChooseRoom" component={ChooseRoom} />
        <Stack.Screen name="ChooseLight" component={ChooseLight} />
        <Stack.Screen name="ChooseHeating" component={ChooseHeating} />
        <Stack.Screen name="ChooseCooling" component={ChooseCooling} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SetRoom" component={SetRoom} />
        <Stack.Screen name="AddRoomScreen" component={AddRoomScreen} />
        <Stack.Screen name="SelectDevice" component={SelectDevice} />
      </Stack.Navigator>
    </>
  )
}
