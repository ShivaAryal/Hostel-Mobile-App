import React, { Component } from "react";
import {View,Image} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

const GuardDrawerNavigator = new DrawerNavigator({
    Home : {screen : HomeScreen},
    Profile : {screen : ProfileScreen}
    
},{
    initialRouteName:"Home",
    drawerPosition:'left',
    drawerOpenRoute:'DrawerOpen',
    drawerCloseRoute:'DrawerClose',
    drawerBackgroundColor:'#CFD8DC'
}) 

export default GuardDrawerNavigator;