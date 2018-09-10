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
import StudentService from './../../Student/Student.service';
import { Icon } from 'react-native-elements'
import {PRIMARY_COLOR,BUTTON_COLOR} from './../../../global/constants'
import {
    Dialog,
    ProgressDialog,
    ConfirmDialog,
} from 'react-native-simple-dialogs';

export default class RegisterStudent extends Component {

    onConfirmPress(){
        const {name,mode,email,password,phone_no,roll_no,address,course,year,guardian_name,guardian_contact,lg_name,lg_contact,lg_address,myemail,mypassword} = this.state;
        StudentService.registerStudent(name,email,password,phone_no,roll_no,address,course,year,guardian_name,guardian_contact,lg_name,lg_contact,lg_address,myemail,mypassword);
        Alert.alert(myemail);
    }
    state={
       name:'',
       mode:Picker.MODE_DIALOG,
       email:'',
       password:'randompassword',
       phone_no:'',
       roll_no:'',
       address:'',
       course:'',
       year:'',
       guardian_name:'',
       guardian_contact:'',
       lg_name:'',
       lg_contact:'',
       lg_address:'',
       myemail:'',
       mypassword:'' 
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
            <Text style={{padding:15,fontSize:20,color:'#ffffff'}}> Register Student</Text>


          </View>
            <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.content}>
                <Text style={styles.headerText}>Name</Text>
                <TextInput style={styles.inputText}
                    placeholder="Name"
                    placeholderTextColor="#000000"
                    onChangeText={(name)=>this.setState({name:name})} />
                <Text style={styles.headerText}>Email</Text>
                <TextInput style={styles.inputText}
                    placeholder="Email"
                    placeholderTextColor="#000000"
                    onChangeText={(email)=>this.setState({email:email})}
                    keyboardType={'email-address'} />
                <Text style={styles.headerText}>Password</Text>
                <TextInput style={styles.inputText}
                    placeholder="Password"
                    placeholderTextColor="#000000"
                    onChangeText={(password)=>this.setState({password:password})} />
                <Text style={styles.headerText}>Phone Number</Text>
                <TextInput style={styles.inputText}
                    placeholder="Contact Number"
                    placeholderTextColor="#000000" 
                    keyboardType={'numeric'}
                    onChangeText={(phone_no)=>this.setState({phone_no:phone_no})} />
                <Text style={styles.headerText}>Roll number</Text>
                <TextInput style={styles.inputText}
                    placeholder="Roll Number"
                    placeholderTextColor="#000000"
                    onChangeText={(roll_no)=>this.setState({roll_no:roll_no})} />
                <Text style={styles.headerText}>Address</Text>
                <TextInput style={styles.inputText}
                    placeholder="Address"
                    placeholderTextColor="#000000"
                    onChangeText={(address)=>this.setState({address:address})} />
                <Text style={styles.headerText}>Select Course</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={this.state.course}
                    onValueChange={(itemValue, itemIndex) => this.setState({course: itemValue})}
                    mode="dropdown">
                    <Picker.Item label="Electronics Engineering" value="Electronics Engineering" />
                    <Picker.Item label="Civil Engineering" value="Civil Engineering" />
                </Picker>
                <Text style={styles.headerText}>Select Year</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={this.state.year}
                    onValueChange={(itemValue, itemIndex) => this.setState({year: itemValue})}
                    mode="dropdown">
                    <Picker.Item label="First" value="First" />
                    <Picker.Item label="Second" value="Second" />
                    <Picker.Item label="Third" value="Third" />
                    <Picker.Item label="Fourth" value="Fourth" />
                </Picker>
                <Text style={styles.headerText}>Guardian Name</Text>
                <TextInput style={styles.inputText}
                    placeholder="Guardian Name"
                    placeholderTextColor="#000000"
                    onChangeText={(guardian_name)=>this.setState({guardian_name:guardian_name})} />
                <Text style={styles.headerText}>Guardian Contact</Text>
                <TextInput style={styles.inputText}
                    placeholder="Guardian Contact"
                    placeholderTextColor="#000000"
                    keyboardType={'numeric'}
                    onChangeText={(guardian_contact)=>this.setState({guardian_contact:guardian_contact})} />
                <Text style={styles.headerText}>Local Guardian Name</Text>
                <TextInput style={styles.inputText}
                    placeholder="Local Guardian Name"
                    placeholderTextColor="#000000"
                    onChangeText={(lg_name)=>this.setState({lg_name:lg_name})} />
                <Text style={styles.headerText}>Local Guardian Address</Text>
                <TextInput style={styles.inputText}
                    placeholder="Local Guardian Address"
                    placeholderTextColor="#000000"
                    onChangeText={(lg_address)=>this.setState({lg_address:lg_address})} />
                <Text style={styles.headerText}>Local Guardian Number</Text>
                <TextInput style={styles.inputText}
                    placeholder="Local Guardian Number"
                    placeholderTextColor="#000000" 
                    keyboardType={'numeric'}
                    onChangeText={(lg_contact)=>this.setState({lg_contact:lg_contact})} />
                <TouchableOpacity style={styles.button}  onPress={this.onConfirmPress}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </ScrollView>
            </View>
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
    dialoginputText:{
        width:300,
        backgroundColor:'#D7CCC8',
        paddingHorizontal:16,
        fontSize:16,
        borderRadius:15,
        color:'#000000',
        
    },
    dialogbutton:{
        width:300,
        backgroundColor:'#4E342E',
        borderRadius:25,
        marginVertical:30,
        paddingVertical:14
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