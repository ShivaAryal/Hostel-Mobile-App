import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements'
import GuardService from './Guard.service';
import {PRIMARY_COLOR,BUTTON_COLOR} from './../../global/constants'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class HomeScreen extends Component {

  static navigationOptions ={
    tabBarLabel: 'Home Screen',
    drawerIcon: ({tintColor})=>{
      return(
        <MaterialIcons
          name="home"
          size={24}
          style={{color:tintColor}}>
        </MaterialIcons>
      );
    }
  }
  
  componentDidMount(){
    GuardService.getAcceptedRequests().then(res=>{
      this.setState({requests:res.data});
    })
  }
    state={
      requests:[],
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
            <Text style={{padding:15,fontSize:20,color:'#ffffff'}}>Home</Text>
          </View>
      <ScrollView style={styles.container} contentContainerStyle={styles.content} >
        <View style={{justifyContent:'center',alignItems:'center',paddingBottom:30}}>
          <Image
            style={{width:200,height:200,borderRadius:100}}
            source={require('./../../images/ronaldo.jpg')}
          />
        </View >
        <View style={{alignItems:'center',justifyContent:'center'}}>
          <Text style={styles.headerText}>Granted Requests</Text>
          {this.state.requests.map(request=>(
            <TouchableOpacity style={styles.requestView}>
            <Text style={styles.subHeaderText}>{request.name}</Text>
            <Text style={styles.subsubHeaderText}>{this.extractDate(request.dateofLeaving)}</Text>
            </TouchableOpacity>
          ))}
        </View>
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
    padding:10,
  },
  requestView:{
    backgroundColor:'#EFEBE9',
    borderRadius:5,
    padding:10,
    marginBottom:5,width:350
  },
  headerText:{
    textAlign:'left',
    fontWeight:'bold',
    color:'#000000',
    backgroundColor:'transparent',
    fontSize:30,
    marginBottom:5,
    marginTop:15,
    
  },
  subHeaderText:{
    textAlign:'center',
    fontWeight:'bold',
    color:'#000000',
    backgroundColor:'transparent',
    fontSize:20,
    marginBottom:5,
    marginTop:0,
    marginLeft:5
  },
  subsubHeaderText:{
    textAlign:'center',
    fontWeight:'bold',
    color:'#000000',
    backgroundColor:'transparent',
    fontSize:15,
    marginBottom:5,
    marginTop:0,
    marginLeft:5
  },
  button:{
    backgroundColor:'#BCAAA4',
    width:200,
    height:100,
    borderRadius:10
  }
})
