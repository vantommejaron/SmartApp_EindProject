import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { LabStack } from './screens/LabStack'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="inverted" />
      <LabStack />
    </NavigationContainer>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
