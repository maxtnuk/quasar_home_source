import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {MainStyles} from "./styles/home"
import {Text } from 'react-native'
import EntryScreen from './navigation'

export default function App() {
  return <>
    <NavigationContainer>
      <EntryScreen/>
      <StatusBar/>
    </NavigationContainer>
  </>
}

