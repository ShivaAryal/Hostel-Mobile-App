import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import GuardService from '../Guard.service';
import { Icon } from 'react-native-elements'
import {PRIMARY_COLOR,BUTTON_COLOR} from './../../../global/constants'

export default class ChangePassword extends Component{
    state={
        newPassword:'',
        oldPassword:'',
        confirmPassword:''
    };

    onUpdatePasswordPress=()=>{
        const {oldPassword,newPassword,confirmPassword} = this.state;
        if(newPassword == confirmPassword){
        Alert.alert("New Password",newPassword);
            GuardService.updatePassword(oldPassword,newPassword);
            //Alert.alert("Password Updated");
        }else{
            Alert.alert("New Password Unmatched");
        }
    }

    render(){
        return(
            <View style={{flex:1}}>
          <View style={{height:60,flexDirection:'row',backgroundColor:'#3E2723'}}>
          <Icon
            containerStyle={{paddingLeft:30}}
            name='md-menu'
            type='ionicon'
            color='#ffffff'
            size={32}
            onPress={()=>this.props.navigation.navigate('DrawerOpen')} />
            <Text style={{padding:15,fontSize:20,color:'#ffffff'}}> Change Password</Text>
          </View>
            <ScrollView style={styles.container} contentContainerStyle={styles.content}>
                {/* <Text style={styles.headerText}>Edit Password</Text> */}
                <Text style={styles.subHeaderText}>Old Password</Text>
                <TextInput style={styles.textinput}
                  placeholder={this.state.oldPassword}
                  placeholderTextColor='#000000'
                  onChangeText={(oldPassword)=>this.setState({oldPassword:oldPassword})} 
                />
                <Text style={styles.subHeaderText}>Password</Text>
                <TextInput style={styles.textinput}
                  placeholder={this.state.newPassword}
                  placeholderTextColor='#000000'
                  secureTextEntry={true}
                  onChangeText={(newPassword)=>this.setState({newPassword:newPassword})} 
                />
                <Text style={styles.subHeaderText}>Confirm New Password</Text>
                <TextInput style={styles.textinput}
                    placeholder={this.state.confirmPassword}
                    placeholderTextColor='#000000'
                    secureTextEntry={true}
                    onChangeText={(confirmPassword)=>this.setState({confirmPassword:confirmPassword})}
                />
                <TouchableOpacity style={styles.button}  onPress={this.onUpdatePasswordPress}>
                    <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
            </ScrollView>
            </View>
        )
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
      color:'#000000',
      backgroundColor:'transparent',
      fontSize:17,
      marginBottom:5,
      marginTop:30,
      marginLeft:10
    },
    textinput:{
      width:350,
      backgroundColor:'rgba(255,255,255,0.1)',
      paddingHorizontal:16,
      fontSize:17,
      borderRadius:15,
      color:'#000000',
      marginBottom:5,
      marginTop:10,
      marginLeft:10
      
      
  },
  headerText:{
    textAlign:'left',
    fontWeight:'bold',
    color:'#000000',
    backgroundColor:'transparent',
    fontSize:18,
    marginBottom:5,
    marginTop:30,
    marginLeft:10
  },
  button:{
    width:350,
    backgroundColor:BUTTON_COLOR,
    borderRadius:25,
    marginVertical:30,
    paddingVertical:14,
    marginLeft:10
  },
  buttonText:{
    fontSize:20,
    fontWeight:'600',
    color:'#ffffff',
    textAlign:'center'
  }
  
  })