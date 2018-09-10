import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Alert,
  TouchableOpacity,
  Image
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import StudentService from './../Student.service';
import {PRIMARY_COLOR,BUTTON_COLOR} from './../../../global/constants'
import { Icon } from 'react-native-elements';
export default class EditProfile extends Component {
  state={
    phone_no:'9867104683',
    roll_no:'071BEX340',
    address:'Kupondole',
    guardianName:'Narayan Aryal',
    guardianContact:'9847090008',
    lg_name:'Hari Poudel',
    lg_contact:'9847009527',
    lg_address:'Thapathali',
    pickedImage: require('./../../../images/ronaldo.jpg')
  }
  componentDidMount(){
    StudentService.getProfile().then(res=>{
      let user = res.data;
      this.setState({
        phone_no:user.phone_no,
        roll_no:user.roll_no,
        address:user.address,
        guardianName:user.guardianName,
        guardianContact:user.guardianContact,
        lg_name:user.lg_name,
        lg_contact:user.lg_contact,
        lg_address:user.lg_address
      })
    })
  }

  onUpdatePress=()=>{
    const {phone_no,roll_no,address,guardianName,guardianContact,lg_name,lg_contact,lg_address}=this.state;
    StudentService.updateProfile(phone_no,roll_no,address,guardianName,guardianContact,lg_name,lg_contact,lg_address)
    //StudentService.updateProfile()
    Alert.alert("Profile Updated");
  }

  pickImageHandler = () => {
    ImagePicker.showImagePicker({title: "Pick an Image", maxWidth: 800, maxHeight: 600}, res => {
      if (res.didCancel) {
        console.log("User cancelled!");
      } else if (res.error) {
        console.log("Error", res.error);
      } else {
        this.setState({
          pickedImage: { uri: res.uri }
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
            <Image source={this.state.pickedImage} style={{width:150,height:150,borderRadius:100}} />
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
            <Text style={styles.subHeaderText}>Roll Number</Text>
            <TextInput style={styles.textinput}
              placeholder={this.state.roll_no}
              defaultValue={this.state.phone_no}
              placeholderTextColor='#000000'
              onChangeText={(roll_no)=>this.setState({roll_no:roll_no})} 
            />
            <Text style={styles.subHeaderText}>Address</Text>
            <TextInput style={styles.textinput}
              placeholder={this.state.address}
              defaultValue={this.state.address}
              placeholderTextColor='#000000'
              onChangeText={(address)=>this.setState({address:address})} 
            />
            <Text style={styles.subHeaderText}>Guardian Name</Text>
            <TextInput style={styles.textinput}
              placeholder={this.state.guardianName}
              defaultValue={this.state.guardianName}
              placeholderTextColor='#000000'
              onChangeText={(guardianName)=>this.setState({guardianName:guardianName})} 
            />
            <Text style={styles.subHeaderText}>Guardian Contact</Text>
            <TextInput style={styles.textinput}
              placeholder={this.state.guardianContact}
              defaultValue={this.state.guardianContact}
              placeholderTextColor='#000000'
              keyboardType={'numeric'}
              onChangeText={(guardianContact)=>this.setState({guardianContact:guardianContact})} 
            />
            <Text style={styles.subHeaderText}>Local Guardian Name</Text>
            <TextInput style={styles.textinput}
              placeholder={this.state.lg_name}
              defaultValue={this.state.lg_name}
              placeholderTextColor='#000000'
              onChangeText={(lg_name)=>this.setState({lg_name:lg_name})} 
            />
            <Text style={styles.subHeaderText}>Local Guardian Contact</Text>
            <TextInput style={styles.textinput}
              placeholder={this.state.lg_contact}
              defaultValue={this.state.lg_contact}
              placeholderTextColor='#000000'
              keyboardType={'numeric'}
              onChangeText={(lg_contact)=>this.setState({lg_contact:lg_contact})} 
            />
            <Text style={styles.subHeaderText}>Local Guardian Address</Text>
            <TextInput style={styles.textinput}
              placeholder={this.state.lg_address}
              defaultValue={this.state.lg_address}
              placeholderTextColor='#000000'
              onChangeText={(lg_address)=>this.setState({lg_address:lg_address})} 
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