import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MovieScreen from './screens/MovieScreen'
import TvScreen from './screens/TvScreen'
import ChooseScreen from './screens/ChooseScreen'
import FoodScreen from './screens/FoodScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={({ navigation }) => ({
            headerShown: false,
          })}

          name="ChooseScreen" component={ChooseScreen} />
        <Stack.Screen
          options={({ navigation }) => ({
            headerShown: false,
          })}

          name="TvScreen" component={TvScreen} />
        <Stack.Screen
          options={({ navigation }) => ({
            headerShown: false,
          })}

          name="MovieScreen" component={MovieScreen} />
        <Stack.Screen
          options={({ navigation }) => ({
            headerShown: false,
          })}

          name="FoodScreen" component={FoodScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})