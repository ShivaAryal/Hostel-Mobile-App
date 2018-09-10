import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';

import {PRIMARY_COLOR} from './../../../global/constants'
import StudentService from '../../Student/Student.service';
import WardenService from './../Warden.service';
import { Icon } from 'react-native-elements';
export default class MyProfile extends Component {
    state={
        name:"",
        email:"",
        phone_no:"",
        address:""
    }
    componentDidMount(){
      WardenService.getmyProfile().then(res=>{
        let user = res.data;
        this.setState({
          name:user.name,
          email:user.email,
          phone_no:user.phone_no,
          address:user.address
        })
      })
    }
    render() {
        return (
          <View style={{flex:1}}>
          <View style={{height:60,flexDirection:'row',backgroundColor:'#3E2723'}}>
          <Icon
            containerStyle={{paddingLeft:30}}
            name='md-menu'
            type='ionicon'
            color='#ffffff'
            size={32}
            onPress={()=>this.props.navigation.navigate('DrawerOpen')} />
          <Text style={{padding:15,fontSize:20,color:'#ffffff'}}> My Profile</Text>
          </View>
            
          <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <View style={{justifyContent:'center',alignItems:'center',paddingBottom:10,paddingTop:10}}>
              <Image
                style={{width:150,height:150,borderRadius:100}}
                source={require('./../../../images/ronaldo.jpg')}
              />
            </View>
            <Text style={styles.subHeaderText}>Name</Text>
            <Text style={styles.normalText}>{this.state.name}</Text>
            <Text style={styles.subHeaderText}>Email</Text>
            <Text style={styles.normalText}>{this.state.email}</Text>
            <Text style={styles.subHeaderText}>Phone Number</Text>
            <Text style={styles.normalText}>{this.state.phone_no}</Text>
            <Text style={styles.subHeaderText}>Address</Text>
            <Text style={styles.normalText}>{this.state.address}</Text>
          </ScrollView>
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container:{
        flex:1,
        backgroundColor:PRIMARY_COLOR
      },
      content:{
        padding:20,
      },
      subHeaderText:{
        textAlign:'left',
        fontWeight:'bold',
        color:'#3E2723',
        backgroundColor:'transparent',
        fontSize:17,
        marginBottom:5,
        marginTop:30,
        marginLeft:10
      },
      normalText:{
        textAlign:'left',
        fontWeight:'normal',
        color:'#3E2723',
        backgroundColor:'transparent',
        fontSize:15,
        marginBottom:5,
        marginTop:10,
        marginLeft:10
      },
      headerText:{
          textAlign:'left',
          fontWeight:'bold',
          color:'#3E2723',
          backgroundColor:'transparent',
          fontSize:18,
          marginBottom:5,
          marginTop:30,
          marginLeft:10
      }
    })
    