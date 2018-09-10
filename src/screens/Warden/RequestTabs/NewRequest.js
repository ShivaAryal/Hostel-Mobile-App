import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Icon } from 'react-native-elements'
import {Card} from 'react-native-elements';
import WardenService from './../Warden.service';
import {PRIMARY_COLOR,BUTTON_COLOR} from './../../../global/constants'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
export default class NewRequest extends Component {
  componentDidMount(){
    WardenService.getMyNewRequests().then(res=>{
      let requests = res.data;
      this.setState({studentRequests:requests})
    })
  }
  
    state={
      noofRequests:3,
      status:null,
      studentRequests:[]
}
  
    yesPermission=(id)=>{
        this.setState({status:'Yes'})
        Alert.alert("Permission granted")
        this.afterPermission(this.state.status,id);
    }
    noPermission=(id)=>{
        this.setState({status:'No'})
        Alert.alert("Permission not granted")
        this.afterPermission(this.state.status,id);
    }

    afterPermission=(status,id)=>{
      WardenService.updateRequestStatus(status,id)
    }

    extractDate=(fullDate)=>{
      return(fullDate.substring(0,10))
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
          <Text style={{padding:15,fontSize:20,color:'#ffffff'}}> New Requests </Text>
          </View>
      <ScrollView style={styles.container} contentContainerStyle={styles.content} >
        {this.state.studentRequests.map(request=>(
            <Card containerStyle={{backgroundColor:'#E0E0E0',borderRadius:20}} titleStyle={{color:'#000000',fontSize:25}}
            key= {request}
            title ={request.name}>
            <Text style={styles.headerText}>Date of Leaving</Text>
            <Text style={styles.normalText}>{this.extractDate(request.dateofLeaving)}</Text>
            <Text style={styles.headerText}>Date of Arrival</Text>
            <Text style={styles.normalText}>{this.extractDate(request.dateofArrival)}</Text>
            <Text style={styles.headerText}>Request Address</Text>
            <Text style={styles.normalText}>{request.requestAddress}</Text>
            <Text style={styles.headerText}>Request Contact</Text>
            <Text style={styles.normalText}>{request.requestContact}</Text>
            <Text style={styles.headerText}>Grant Request</Text>
            <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity style={styles.button} onPress={() => this.yesPermission(request._id)}><Text style={styles.buttonText}>Yes</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.noPermission(request._id)}><Text style={styles.buttonText}>No</Text></TouchableOpacity>
            </View>
            </Card>
        ))
    }
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
    padding:1 },
  cardStyle:{
    backgroundColor:'#BCAAA4',
    color:'#BCAAA4',
    flex:1,
  },
  button:{
    width:120,
    backgroundColor:BUTTON_COLOR,
    borderRadius:15,
    marginVertical:8,
    paddingVertical:11,
    marginHorizontal:10,
    //textAlign:'center'
  },
  buttonText:{
    fontSize:20,
    fontWeight:'600',
    color:'#ffffff',
    textAlign:'center'
  },
  headerText:{
    textAlign:'left',
    fontWeight:'bold',
    color:'#000000',
    backgroundColor:'transparent',
    fontSize:18,
    marginBottom:5,
    marginTop:10,
    marginLeft:10
  },
  normalText:{
    textAlign:'left',
    fontWeight:'bold',
    color:'#000000',
    backgroundColor:'transparent',
    fontSize:13,
    marginBottom:5,
    marginTop:5,
    marginLeft:10
  },
})
