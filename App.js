import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
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
import Landing from './components/auth/Landing';
import Register from './components/auth/Register';

const Stack = createStackNavigator();
const auth = getAuth()

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    
    onAuthStateChanged(auth, user => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true
        })
      }
    })
  }

  render() {
    const { loggedIn, loaded } = this.state
    if(!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center'}}>
          <Text>Loading</Text>
        </View>
      )
    }

    if(!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Landing'>
            <Stack.Screen name='Landing' component={Landing} options={{ headerShown: false }} />
            <Stack.Screen name='Register' component={Register} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center'}}>
        <Text>User is logged in</Text>
      </View>
    )

  }
}

export default App