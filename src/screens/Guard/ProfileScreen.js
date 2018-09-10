import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MyProfile from './ProfileTabs/MyProfile';
import EditProfile from './ProfileTabs/EditProfile';
import ChangePassword from './ProfileTabs/ChangePassword';
import {TabNavigator} from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = new TabNavigator({
  MyProfile:{
    screen:MyProfile,
    navigationOptions:{
      tabBarLabel:'My Profile'
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
      tabBarLabel:'Edit Password',
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

ProfileScreen.navigationOptions={
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

export default ProfileScreen;
