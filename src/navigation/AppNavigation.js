import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/app/HomeScreen';
import DebitCardSetup from '../screens/app/DebitCardSetup';
import DebitCardColorSetup from '../screens/app/DebitCardColorSetup';
import DebitCardDesignSetup from '../screens/app/DebitCardDesignSetup';

const Stack = createNativeStackNavigator()
const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DebitCardDesignSetup" component={DebitCardDesignSetup} />
      <Stack.Screen name="DebitCardColorSetup" component={DebitCardColorSetup} />
      <Stack.Screen name="DebitCardSetup" component={DebitCardSetup} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})