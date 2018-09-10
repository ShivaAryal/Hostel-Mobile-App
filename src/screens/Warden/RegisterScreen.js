import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import RegisterStaff from './RegisterTabs/RegisterStaff';
import RegisterStudent from './RegisterTabs/RegisterStudent';

import {TabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

const RegisterScreen = new TabNavigator({
  RegisterStudent:{
    screen:RegisterStudent,
    navigationOptions:{
      tabBarLabel:'Student'
    }
  },
  RegisterStaff:{
    screen:RegisterStaff,
    navigationOptions:{
      tabBarLabel:'Staff'
    }
  },
  },{
    swipeEnabled: true,
  animationEnabled:true,
  tabBarPosition: 'bottom',
  tabBarOptions:{
    tabStyle:{backgroundColor:'#4E342E'},
    labelStyle: {fontSize: 15},
  }
})

RegisterScreen.navigationOptions={
  tabBarLabel: 'Home Screen',
  drawerIcon: ({tintColor})=>{
    return(
      <Icon
        name="plus-circle"
        size={24}
        style={{color:tintColor}}
      />
    );
  }
}

export default RegisterScreen;
