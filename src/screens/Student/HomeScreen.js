import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {Icon} from 'react-native-elements';
import StudentService from './Student.service'
import {PRIMARY_COLOR,BUTTON_COLOR} from './../../global/constants'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import StudentService from './Student.service';

export default class HomeScreen extends Component {
  static navigationOptions ={
    tabBarLabel: 'Home Screen',
    drawerIcon: ({tintColor})=>{
      return(
        <MaterialIcons
          name="home"
          size={24}
          style={{color:tintColor}}
        >
        </MaterialIcons>
      );
    }
  }

  state={
    latestRequest:'',
    latestStatus:''
  }

  componentDidMount(){
    StudentService.getMyRequest().then(res=>{
      let request = res.data;
      this.setState({latestRequest:this.extractDate(request.dateofLeaving),latestStatus:request.status})
    })
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
        {/* <Text style={styles.headerText}>Welcome, {this.state.wardenName}</Text>
        <Text style={styles.subHeaderText}>You have got {this.state.noofRequests} leave requests</Text> */}
        <View style={{justifyContent:'center',alignItems:'center',paddingBottom:30}}>
          <Image
            style={{width:200,height:200,borderRadius:100}}
            source={require('./../../images/ronaldo.jpg')}
          />
        </View>
        <View>
          <Text style={styles.subHeaderText}>Your request on {this.state.latestRequest}</Text>
          {this.state.latestStatus == 'Yes' && <Text style={styles.subHeaderText}>has been granted</Text>}
          {this.state.latestStatus == 'No' && <Text style={styles.subHeaderText}>has been declined</Text>}
          {this.state.latestStatus == '' && <Text style={styles.subHeaderText}>is still pending</Text>}
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
    color:'#000000',
    backgroundColor:'transparent',
    fontSize:30,
    marginBottom:5,
    marginTop:15,
    marginLeft:100,
  },
  subHeaderText:{
    textAlign:'center',
    fontWeight:'bold',
    color:'#000000',
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
