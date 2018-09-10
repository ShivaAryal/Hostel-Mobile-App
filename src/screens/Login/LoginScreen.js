/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from './Logo';
import Form from './Form';
import ButtonSubmit from './ButtonSubmit';
import StudentDrawerNavigator from './../Student/StudentDrawerNavigator'
import WardenDrawerNavigator from './../Warden/WardenDrawerNavigator';
import GuardDrawerNavigator from './../Guard/GuardDrawerNavigator'
import Auth from './Login.service';
import {PRIMARY_COLOR} from './../../global/constants';


export default class LoginScreen extends Component {
    static navigationOptions = {
        headerTitleStyle: { textAlign: 'center',},
        title: 'Please Login',
    }

    state = {
        loading: false
    }

    componentDidMount() {
        Auth.getSession().then(user => {
            if(user) {
                let userObj = JSON.parse(user);
                this.redirectUser(userObj.type);
            } else {
                alert("Not Redirecting")
                this.setState({loading: false})
            } 
        }).catch(err => this.setState({loading: false}))
    }

    redirectUser = (userType) => {
        if(userType=='student'){
            this.props.navigation.navigate("StudentDrawerNavigator")
        }
        if(userType=='warden'){
            this.props.navigation.navigate("WardenDrawerNavigator");
        }
        if(userType=='guard'){
            this.props.navigation.navigate("GuardDrawerNavigator");
        }
    }

    onLogin = (email, password, userType) => {
        Auth.login(email, password, userType).then(user => {
            console.log("User: ", user);
            this.redirectUser(userType)
        }).catch(err => {
            console.log("Error: ", err);
            alert(`Got some error: ${err.message}`)
        })
        // Auth.getPost().then(res => console.log("Response: ", res)).catch(err => console.log("Error: ", err));
        // this.props.navigation.navigate('WardenDrawerNavigator')
    }
    render() {  
        if(this.state.loading) {
            return null;
        }
        return (
            <ScrollView style = {styles.container}>
                <Logo/>
                <Form onLogin={this.onLogin}/>
               
            </ScrollView>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor:PRIMARY_COLOR
    }
});
