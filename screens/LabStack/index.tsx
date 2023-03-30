// TODO: Gebruik de stack navigator uit de docs
// Toon een home screen
// Voeg een button toe om naar de dtaa screen te gaan
// Toon de detail screen (nog leeg)
// Voeg een  button toe om terug te gaan naar de home screen
// Bekijk hoe je de header kan namaken zoals in het voorbeeld

// TODO: Hoe lang ga je hiermee bezig zijn...?

import { createStackNavigator } from '@react-navigation/stack'
import Startup from './Startup'
import Startup2 from './Startup2'
import Welcome from './Welcome'
import ChooseName from './ChooseName'
import ChooseRoom from './ChooseRoom'
import ChooseLight from './ChooseLight'
import ChooseHeating from './ChooseHeating'
import ChooseCooling from './ChooseCooling'
import HomeScreen from './HomeScreen'
import SetRoom from './SetRoom'
import AddRoomScreen from './AddRoomScreen'
import { lab as labStyle } from '../../styles/lab'
import React from 'react'

const Stack = createStackNavigator()
// TODO: Lees JSON in en kijk wat de status is
const status = false

export function LabStack() {
  if (status) {
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
        </Stack.Navigator>
      </>
    )
  } else {
    return (
      <>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Startup2" component={Startup2} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="SetRoom" component={SetRoom} />
          <Stack.Screen name="AddRoomScreen" component={AddRoomScreen} />
        </Stack.Navigator>
      </>
    )
  }
}
