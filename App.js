import React from 'react';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCjxfizKu-Khifosk53aJeuLvdSiaVVtjo",
  authDomain: "tattoo-geek.firebaseapp.com",
  projectId: "tattoo-geek",
  storageBucket: "tattoo-geek.appspot.com",
  messagingSenderId: "837757489782",
  appId: "1:837757489782:web:d14077496f2bc71cc08557",
  measurementId: "G-Q0JBWQFDQ6"
};
initializeApp(firebaseConfig)
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './components/auth/Landing';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing'>
        <Stack.Screen name='Landing' component={LandingScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
