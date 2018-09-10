import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Profile from './ProfileTabs/Profile';
import EditProfile from './ProfileTabs/EditProfile';
import ChangePassword from './ProfileTabs/ChangePassword';
import {TabNavigator} from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const MyProfile = new TabNavigator({
  Profile:{
    screen:Profile,
    navigationOptions:{
      tabBarLabel:'Profile'
    }
  },
  EditProfile:{
    screen:EditProfile,
    navigationOptions:{
      tabBarLabel:'Edit Profile'
    }
  },
  ChangePassword:{
    screen:ChangePassword,
    navigationOptions:{
      tabBarLabel:'Edit Password'
    }
  }
},{
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions:{
    tabStyle:{backgroundColor:'#4E342E'},
    labelStyle: {fontSize: 15},
}
}
)

MyProfile.navigationOptions={
  tabBarLabel: 'Profile Screen',
    drawerIcon: ({tintColor})=>{
      return(
        <MaterialIcons
          name="face"
          size={24}
          style={{color:tintColor}}
        >
        </MaterialIcons>
      );
    }
}

export default MyProfile;
