import React, { Component } from "react";

import {DrawerNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import MyProfile from './MyProfile';
import RequestLeaveScreen from './RequestLeaveScreen';

const StudentDrawerNavigator = new DrawerNavigator({
    Home : {screen : HomeScreen},
    MyProfile:{screen:MyProfile},
    RequestLeave : {screen:RequestLeaveScreen}
},{
    initialRouteName:"Home",
    drawerPosition:'left',
    drawerOpenRoute:'DrawerOpen',
    drawerCloseRoute:'DrawerClose',
    drawerBackgroundColor:'#CFD8DC'
    
}) 

export default StudentDrawerNavigator;