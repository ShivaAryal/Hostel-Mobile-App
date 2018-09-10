import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import NewRequest from './RequestTabs/NewRequest';
import ApprovedRequest from './RequestTabs/ApprovedRequest';
import DeclinedRequest from './RequestTabs/DeclinedRequest';
import {TabNavigator} from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const RequestScreen = new TabNavigator({
  NewRequest:{
    screen:NewRequest,
    navigationOptions:{
      tabBarLabel:'New'
    }
  },
  ApprovedRequest:{
    screen:ApprovedRequest,
    navigationOptions:{
      tabBarLabel:'Approved'
    }
  },
  DeclinedRequest:{
    screen:DeclinedRequest,
    navigationOptions:{
      tabBarLabel:'Declined',
    }
  }
},
{
  swipeEnabled: true,
  animationEnabled:true,
  tabBarPosition: 'bottom',
  tabBarOptions:{
    tabStyle:{backgroundColor:'#4E342E'},
    labelStyle: {fontSize: 15},
    
  }
},
)

RequestScreen.navigationOptions={
  tabBarLabel: 'Request Screen',
    drawerIcon: ({tintColor})=>{
      return(
        <MaterialIcons
          name="launch"
          size={24}
          style={{color:tintColor}}
        >
        </MaterialIcons>
      );
    }
}

export default RequestScreen;
