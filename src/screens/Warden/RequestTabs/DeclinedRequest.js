import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import {PRIMARY_COLOR} from './../../../global/constants'
import StudentService from '../../Student/Student.service';
import WardenService from './../Warden.service';
import { Icon } from 'react-native-elements';
export default class DeclinedRequest extends Component {
    state={
        requests:[]
    }
    componentDidMount(){
      WardenService.getMyDeclinedRequests().then(res=>{
            this.setState({requests:res.data})
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
          <Text style={{padding:15,fontSize:20,color:'#ffffff'}}>Declined Requests</Text>
          </View>
          <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            {this.state.requests.map(request=>(
                <View style={styles.requestView}>
                    <Text style={styles.subHeaderText}>{request.name}</Text>
                    <Text style={styles.normalText}>{this.extractDate(request.dateofLeaving)}</Text>
                </View>
            ))}
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
        padding:15,
      },
      requestView:{
        backgroundColor:'#EFEBE9',
        borderRadius:5,
        padding:10,
        marginBottom:5
      },
      subHeaderText:{
        textAlign:'left',
        fontWeight:'bold',
        color:'#3E2723',
        backgroundColor:'transparent',
        fontSize:19,
        marginBottom:5,
        marginTop:5,
        marginLeft:10
      },
      normalText:{
        textAlign:'left',
        fontWeight:'normal',
        color:'#3E2723',
        backgroundColor:'transparent',
        fontSize:12,
        marginBottom:5,
        marginTop:0,
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
    