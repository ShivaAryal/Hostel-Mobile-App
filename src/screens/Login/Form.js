import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ToucableOpacity,
    Image,
    TextInput,
    Picker
} from 'react-native';
import ButtonSubmit from './ButtonSubmit';
import {PRIMARY_COLOR} from './../../global/constants'; 

export default class Form extends Component{
    state={
        email:'',
        password:'',
        userType:'student'
    }
    onLogin = () => {
        const { email, password, userType } = this.state;
        this.props.onLogin(email, password, userType);
    }
    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox} 
                    placeholder="Email"
                    placeholderTextColor="#000000"
                    onChangeText={(email)=>this.setState({email:email})}
                    keyboardType={'email-address'} />
                <TextInput style={styles.inputBox} 
                    placeholder="Password"
                    placeholderTextColor="#000000"
                    onChangeText={(password)=>this.setState({password:password})}
                     />
                <View style={styles.pickerView}>
                <Picker
                    style={styles.picker}
                    selectedValue={this.state.userType}
                    onValueChange={(itemValue, itemIndex) => this.setState({userType: itemValue})}
                    mode="dropdown">
                    <Picker.Item label="Student" value="student" />
                    <Picker.Item label="Guard" value="guard" />
                    <Picker.Item label="Warden" value="warden" />
                </Picker>
                </View>
                <ButtonSubmit onPress={this.onLogin}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:PRIMARY_COLOR
    },
    inputBox:{
            width:350,
            backgroundColor:'rgba(255,255,255,0.1)',
            paddingHorizontal:16,
            fontSize:16,
            borderRadius:15,
            color:'#000000',
            margin:20
    },
    pickerView:{
        alignItems:'center',
        justifyContent:'center',
        width:350,
        backgroundColor:'rgba(255,255,255,0.1)',
        borderRadius:25,
        paddingHorizontal:16,
        marginVertical:20,
        height:50
    },
    picker:{
        width:350,
        backgroundColor:'transparent',
        borderRadius:25,
        paddingHorizontal:16,
        color:'#000000',
        marginVertical:20,
    },
})