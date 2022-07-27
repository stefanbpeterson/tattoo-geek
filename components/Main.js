import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../redux/actions/index'
import Feed from './main/Feed'
import Add from './main/Add'
import Profile from './main/Profile'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();

export class Main extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} options={{ 
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='home' color={color} size={26} />
            )
          }} />
          <Tab.Screen name="Add" component={Add} options={{ 
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='plus-box' color={color} size={26} />
            )
          }} />
          <Tab.Screen name="Profile" component={Profile} options={{ 
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='account-circle' color={color} size={26} />
            )
          }} />
      </Tab.Navigator>
    )
  }
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(Main)