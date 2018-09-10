import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    Picker,
    TouchableOpacity,
    Alert
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import StudentService from './Student.service';
import WardenService from './../Warden/Warden.service';
import {PRIMARY_COLOR,BUTTON_COLOR} from './../../global/constants'
import { Icon } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class RequestLeaveScreen extends Component {
    static navigationOptions ={
        tabBarLabel: 'Request Screen',
        drawerIcon: ({tintColor})=>{
          return(
            <MaterialIcons
              name="launch"
              size={24}
              style={{color:tintColor}}>
            </MaterialIcons>
          );
        }
      }
    componentDidMount=()=>{
        var date = new Date()
        this.setState({'date':date});
        WardenService.getWarden().then(res=>{
            this.setState({wardens:res.data})
        })
        console.log(this.state.wardens)
    }

    onSubmitRequestPress=()=>{
        const {warden,studentName,name,dateofLeaving,dateofArrival,requestAddress,requestContact}= this.state;
        StudentService.requestLeave(warden,studentName,name,dateofLeaving,dateofArrival,requestAddress,requestContact);
        Alert.alert("Request submitted, do wait for response");
    }
    state={
        wardens:[],
       warden:'',
       mode:Picker.MODE_DIALOG,
       studentName:'',
       name:'',
       dateofLeaving:'',
       dateofArrival:'',
       requestAddress:'',
       requestContact:'',
       date:'' 
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
            <Text style={{padding:15,fontSize:20,color:'#ffffff'}}> Request Leave</Text>
          </View>
            <ScrollView style={styles.container} contentContainerStyle={styles.content}>
                <Text style={styles.headerText}>Name</Text>
                <TextInput style={styles.inputText}
                    placeholder="Name"
                    placeholderTextColor="#000000"
                    onChangeText={(studentName)=>this.setState({name:name,studentName:name})} />
                <Text style={styles.headerText}>Select Warden</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={this.state.warden}
                    onValueChange={(itemValue, itemIndex) => this.setState({warden: itemValue})}
                    mode="dropdown">
                    {this.state.wardens.map(warden=>(
                        <Picker.Item label={warden.name} value={warden._id} />
                    ))}
                </Picker>
                <Text style={styles.headerText}>Date of Leaving</Text>
                <DatePicker
                    style={styles.datePicker}
                    date={this.state.dateofLeaving}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate={this.state.date}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        right: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput:{
                        borderWidth:0
                    }
                    // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(dateofLeaving) => {this.setState({dateofLeaving: dateofLeaving})}}
                />
                <Text style={styles.headerText}>Date of Arrival</Text>
                <DatePicker
                    style={styles.datePicker}
                    date={this.state.dateofArrival}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate={this.state.dateofLeaving}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        right: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        borderWidth:0,
                    }
                    }}
                    onDateChange={(dateofArrival) => {this.setState({dateofArrival: dateofArrival})}}
                />
                <Text style={styles.headerText}>Request Address</Text>
                <TextInput style={styles.inputText}
                    placeholder="Request Address"
                    placeholderTextColor="#000000"
                    onChangeText={(requestAddress)=>this.setState({requestAddress:requestAddress})} 
                />
                <Text style={styles.headerText}>Request Contact</Text>
                <TextInput style={styles.inputText}
                    placeholder="Contact Number"
                    placeholderTextColor="#000000" 
                    keyboardType={'numeric'}
                    onChangeText={(requestContact)=>this.setState({requestContact:requestContact})} />
                <TouchableOpacity style={styles.button}  onPress={this.onSubmitRequestPress}>
                    <Text style={styles.buttonText}>Submit Request</Text>
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
        // alignItems:'center',
        // justifyContent:'center',
    },
    headerText:{
        textAlign:'left',
        color:'#000000',
        fontWeight:'bold',
        fontSize:15,
        backgroundColor:'transparent',
        marginTop:30,
        marginBottom:5,
        marginLeft:10
    },
    inputText:{
        width:350,
        backgroundColor:'rgba(255,255,255,0.1)',
        paddingHorizontal:16,
        fontSize:16,
        borderRadius:15,
        color:'#000000',
        
    },
    datePicker:{
        width:350,
        backgroundColor:'rgba(255,255,255,0.1)',
        paddingHorizontal:16,
        borderRadius:15,
        //color:'#000000',
        
    },
    picker:{
        width:350,
        backgroundColor:'rgba(255,255,255,0.1)',
        borderRadius: 15,
        overflow:'hidden'
    },
    button:{
        width:350,
        backgroundColor:BUTTON_COLOR,
        borderRadius:25,
        marginVertical:30,
        paddingVertical:14
    },
    buttonText:{
        fontSize:20,
        fontWeight:'600',
        color:'#ffffff',
        textAlign:'center'
    }
})