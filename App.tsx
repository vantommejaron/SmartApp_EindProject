import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { LabStack } from './screens/LabStack'
import { Provider } from 'react-redux'
import store from './Redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="inverted" />
        <LabStack />
      </NavigationContainer>
    </Provider>
  )
}
