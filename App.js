import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MusicVideos from './components/MusicVideos';
import SearchVideos from './components/SearchVideos';

export default function App() {


  const Stack = createStackNavigator();
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SearchVideos">
        <Stack.Screen name="SearchVideos" component={SearchVideos} />
        <Stack.Screen name="MusicVideos" component={MusicVideos} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

