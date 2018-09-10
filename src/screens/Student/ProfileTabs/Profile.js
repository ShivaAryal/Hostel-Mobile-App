import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';
import StudentService from './../Student.service';
import {PRIMARY_COLOR} from './../../../global/constants';
import { Icon } from 'react-native-elements';
export default class Profile extends Component {
  state={
    name:'',
    email:'',
    phone_no:'9867104683',
    roll_no:'071BEX340',
    room_no:'204',
    address:'Kupondole',
    year:'Fourth',
    guardianName:'Narayan Aryal',
    guardianContact:'9847090008',
    lg_name:'Hari Poudel',
    lg_contact:'9847009527',
    lg_address:'Thapathali',
    course:'Electronics Engineesring',
    
  }

  componentDidMount() {
    StudentService.getProfile().then(res=>{
      let user = res.data;
      this.setState({name:user.name,
        email:user.email,
        phone_no:user.phone_no,
        roll_no:user.roll_no,
        //room_no:user.room_no,
        address:user.address,
        year:user.year,
        guardianName:user.guardianName,
        guardianContact:user.guardianContact,
        lg_name:user.lg_name,
        lg_contact:user.lg_contact,
        lg_address:user.lg_address,
        //course:user.course
      })

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
        <Text style={styles.subHeaderText}>Roll Number</Text>
        <Text style={styles.normalText}>{this.state.roll_no}</Text>
        <Text style={styles.subHeaderText}>Room Number</Text>
        <Text style={styles.normalText}>204</Text>
        <Text style={styles.subHeaderText}>Address</Text>
        <Text style={styles.normalText}>{this.state.address}</Text>
        <Text style={styles.subHeaderText}>Course</Text>
        <Text style={styles.normalText}>Electronics Engineesring</Text>
        <Text style={styles.subHeaderText}>Year</Text>
        <Text style={styles.normalText}>{this.state.year}</Text>
        <Text style={styles.subHeaderText}>Guardian Name</Text>
        <Text style={styles.normalText}>{this.state.guardianName}</Text>
        <Text style={styles.subHeaderText}>Guardian Contact</Text>
        <Text style={styles.normalText}>{this.state.guardianContact}</Text>
        <Text style={styles.subHeaderText}>Local Guardian</Text>
        <Text style={styles.normalText}>{this.state.lg_name}</Text>
        <Text style={styles.subHeaderText}>Local Guardian Contact</Text>
        <Text style={styles.normalText}>{this.state.lg_contact}</Text>
        <Text style={styles.subHeaderText}>Local Guardian Address</Text>
        <Text style={styles.normalText}>{this.state.lg_address}</Text>
        {/* <InputField title="Local Guardian Address" value={this.state.lg_address} /> */}
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
