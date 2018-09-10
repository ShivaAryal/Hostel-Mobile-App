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
import WardenService from './../Warden.service';
import {Dialog} from 'react-native-simple-dialogs';
import { Icon } from 'react-native-elements'
import {PRIMARY_COLOR,BUTTON_COLOR} from './../../../global/constants'

export default class RegisterStaff extends Component {
    onRegisterPress=()=>{
        this.openDialog(true);
    }

    onConfirmPress = () => {
        const {name,email,password,phone_no,address,userType,myemail,mypassword} = this.state;
        WardenService.registerStaff(name,email,password,phone_no,address,userType,myemail,mypassword);
        Alert.alert(name);
    }

    openDialog(show){
        this.setState({ showDialog: show });
    }

    state={
        showDialog:false,
       name:'',
       myemail:'',
       mypassword:'',
       mode:Picker.MODE_DIALOG,
       password:'randompassword',
       email:'',
       phone_no:'',
       address:'',
       userType:'2'
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
            <Text style={{padding:15,fontSize:20,color:'#ffffff'}}> Register Staff</Text>
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
                    onChangeText={(email)=>this.setState({email:email.trim()})}
                    keyboardType={'email-address'} />
                <Text style={styles.headerText}>Phone Number</Text>
                <TextInput style={styles.inputText}
                    placeholder="Contact Number"
                    placeholderTextColor="#000000" 
                    keyboardType={'numeric'}
                    onChangeText={(phone_no)=>this.setState({phone_no:phone_no})} />
                <Text style={styles.headerText}>Address</Text>
                <TextInput style={styles.inputText}
                    placeholder="Address"
                    placeholderTextColor="#000000"
                    onChangeText={(address)=>this.setState({address:address})} />
                <Text style={styles.headerText}>Staff Type</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={this.state.userType}
                    onValueChange={(itemValue, itemIndex) => this.setState({userType: itemValue})}
                    mode="dropdown">
                    <Picker.Item label="Guard" value='2' />
                    <Picker.Item label="Warden" value='1' />
                </Picker>
                <TouchableOpacity style={styles.button}  onPress={this.onConfirmPress}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
                <Dialog
                    visible={this.state.showDialog}
                    title="Login with your email account"
                    onTouchOutside={()=>this.openDialog(false)}
                    contentStyle={{ justifyContent: 'center', alignItems: 'center', }}
                    animationType="fade">
                    <View>
                    <Text style={styles.headerText}>Email</Text>
                    <TextInput style={styles.dialoginputText}
                        placeholder="Email"
                        placeholderTextColor="#000000"
                        onChangeText={(myemail)=>this.setState({myemail:myemail.trim()})} />
                    <Text style={styles.headerText}>Password</Text>
                    <TextInput style={styles.dialoginputText}
                        placeholder="Password"
                        placeholderTextColor="#000000"
                        onChangeText={(mypassword)=>this.setState({mypassword:mypassword.trim()})} />
                    <TouchableOpacity style={styles.dialogbutton}  onPress={this.onConfirmPress}>
                        <Text style={styles.buttonText}>Confirm</Text>
                    </TouchableOpacity>
                    </View>
                </Dialog>
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
    picker:{
        width:350,
        backgroundColor:'rgba(255,255,255,0.1)',
        borderRadius: 15,
        overflow:'hidden'
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
    dialogbutton:{
        width:300,
        backgroundColor:'#4E342E',
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