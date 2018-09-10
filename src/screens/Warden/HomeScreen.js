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
import WardenService from './Warden.service';
import {PRIMARY_COLOR,BUTTON_COLOR} from './../../global/constants'
import RequestScreen from './RequestScreen';
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
    WardenService.getMyNewRequests().then(res=>{
      let requests = res.data;
      this.setState({noofNewRequests:requests.length})
    })
    WardenService.getMyApprovedRequests().then(res=>{
      let requests= res.data;
      this.setState({noofApprovedRequests:requests.length})
    })
    WardenService.getMyDeclinedRequests().then(res=>{
      let requests= res.data;
      this.setState({noofDeclinedRequests:requests.length})
    })
  }
    state={
      wardenName:'Shiva',
      noofNewRequests:0,
      noofApprovedRequests:0,
      noofDeclinedRequests:0
    }

    onNewPress=()=>{
      this.props.navigation.navigate('RequestScreen')
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
        {/* <Text style={styles.headerText}>Welcome, {this.state.wardenName}</Text>
        <Text style={styles.subHeaderText}>You have got {this.state.noofRequests} leave requests</Text> */}
        <View style={{justifyContent:'center',alignItems:'center',paddingBottom:30}}>
          <Image
            style={{width:200,height:200,borderRadius:100}}
            source={require('./../../images/ronaldo.jpg')}
          />
        </View>
        <View style={{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
          <View style={{flexDirection:'row',flex:1}}>
            <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('RequestScreen')}>
              <Text style={styles.headerText}>{this.state.noofNewRequests}</Text>
              <Text style={styles.subHeaderText}>new request</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} >
            <Text style={styles.headerText}>{this.state.noofApprovedRequests}</Text>
              <Text style={styles.subHeaderText}>approved request</Text>
            </TouchableOpacity>
            
          </View>
          <View style={{flexDirection:'row',flex:1}}>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.headerText}>{this.state.noofDeclinedRequests}</Text>
              <Text style={styles.subHeaderText}>declined request</Text>
            </TouchableOpacity>
          </View>
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
    padding:20,
  },
  headerText:{
    textAlign:'left',
    fontWeight:'bold',
    color:'#ffffff',
    backgroundColor:'transparent',
    fontSize:30,
    marginBottom:5,
    marginTop:15,
    marginLeft:100,
  },
  subHeaderText:{
    textAlign:'center',
    fontWeight:'bold',
    color:'#ffffff',
    backgroundColor:'transparent',
    fontSize:17,
    marginBottom:15,
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
