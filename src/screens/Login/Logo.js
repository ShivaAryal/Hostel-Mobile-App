import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import myhostel from '../../images/myhostel.jpg';
import PRIMARY_COLOR from './../../global/constants';

export default class Logo extends Component{
    render(){
        return(
            <View style={styles.container}>
            <Image source={myhostel} style={styles.image}/>
            <Text style={styles.text}>MY HOSTEL</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:PRIMARY_COLOR
    },
    image:{
        marginBottom:20,
        marginTop:40,
        width:120,
        height:80
    },
    text:{
        color:'#000000',
        fontWeight:'bold',
        
        backgroundColor:'transparent',
        marginTop: 10,
    }
})