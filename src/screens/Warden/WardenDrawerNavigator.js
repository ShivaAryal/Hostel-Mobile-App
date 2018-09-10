import React, { Component } from "react";
import {View,Image} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import RequestScreen from './RequestScreen';
import RegisterScreen from './RegisterScreen';

const CustomDrawerContentComponent = (props) =>(
    <View style={{height:200}}>
        <Image
            source={require('./../../images/man.png')}/>
    </View>
)

const WardenDrawerNavigator = new DrawerNavigator({
    Home : {screen : HomeScreen},
    Profile : {screen : ProfileScreen},
    Requests : {screen : RequestScreen},
    Register : {screen : RegisterScreen}
    
},{
    initialRouteName:"Home",
    drawerPosition:'left',
    drawerOpenRoute:'DrawerOpen',
    drawerCloseRoute:'DrawerClose',
    drawerBackgroundColor:'#CFD8DC'
    //contentComponent:CustomDrawerContentComponent
}) 

export default WardenDrawerNavigator;