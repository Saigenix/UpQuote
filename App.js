import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/screens/Signup';
import HomeScreen from './src/screens/HomeScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Signup">
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="Home" component={HomeScreen} />
   </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App