import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import WardenService from './../Warden.service';
import { Icon } from 'react-native-elements';
import {PRIMARY_COLOR,BUTTON_COLOR} from './../../../global/constants'
export default class EditProfile extends Component {
    state={
        name:'',
        email:'',
        phone_no:"",
        address:"",
        image: require('./../../../images/ronaldo.jpg')
    }

    componentDidMount(){
      WardenService.getmyProfile().then(res=>{
        let user = res.data;
        this.setState({
          name:user.name,
          email:user.email,
          phone_no:user.phone_no,
          address:user.address,
          image:user.image
        })
      })
    }

    onUpdatePress=()=>{
        const {name,email,phone_no,address,image}= this.state;
        WardenService.updateProfile(name,email,phone_no,address,image)
        Alert.alert("Profile updated")
    }
    
    pickImageHandler = () => {
      ImagePicker.showImagePicker({title: "Pick an Image", maxWidth: 800, maxHeight: 600}, res => {
        if (res.didCancel) {
          console.log("User cancelled!");
        } else if (res.error) {
          console.log("Error", res.error);
        } else {
          this.setState({
            image: { uri: res.uri }
          });
  
        }
      });
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
          <Text style={{padding:15,fontSize:20,color:'#ffffff'}}> Edit Profile</Text>
          </View>
            <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <View style={{justifyContent:'center',alignItems:'center',paddingBottom:10,paddingTop:10}}>
            <TouchableOpacity onPress={this.pickImageHandler}>
            <Image source={this.state.image} style={{width:150,height:150,borderRadius:100}} />
            </TouchableOpacity>
            </View>
                <Text style={styles.subHeaderText}>Phone number</Text>
                <TextInput style={styles.textinput}
                  placeholder={this.state.phone_no}
                  defaultValue={this.state.phone_no}
                  placeholderTextColor='#000000'
                  keyboardType={'numeric'}
                  onChangeText={(phone_no)=>this.setState({phone_no:phone_no})} 
                />
                <Text style={styles.subHeaderText}>Address</Text>
                <TextInput style={styles.textinput}
                  placeholder={this.state.address}
                  defaultValue={this.state.address}
                  placeholderTextColor='#000000'
                  onChangeText={(address)=>this.setState({address:address})} 
                />
                <TouchableOpacity style={styles.button}  onPress={this.onUpdatePress}>
                    <Text style={styles.buttonText}>Update Profile</Text>
                </TouchableOpacity>
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
    },
    ImageContainer: {
      borderRadius: 100,
      width: 150,
      height: 150,
      borderColor: '#9B9B9B',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#B0BEC5',
      
    },

    
    })