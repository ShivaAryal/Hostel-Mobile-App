import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import LoginScreen from './LoginScreen';
import {PRIMARY_COLOR,BUTTON_COLOR} from './../../global/constants'

export default class ButtonSubmit extends Component{
    render(){
        return(
                <TouchableOpacity style={styles.button}  onPress={this.props.onPress}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:PRIMARY_COLOR
    },
    button:{
        width:350,
        backgroundColor:BUTTON_COLOR,
        borderRadius:25,
        marginVertical:10,
        paddingVertical:14
    },
    buttonText:{
        fontSize:20,
        fontWeight:'600',
        color:'#ffffff',
        textAlign:'center'
    }
})