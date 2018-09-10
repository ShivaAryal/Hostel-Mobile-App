import {BASE_URL} from './../../global/constants';
import {AsyncStorage,Alert} from 'react-native';

export default class GuardService{
    static getmyProfile(){
        return new Promise((resolve, reject)=>{
            fetch(`${BASE_URL}/guard/myProfile`,{
                method:'GET',
                headers:{
                    'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMzUzMmYzMDA2MGMyMzc2NDA0ZDZiYyIsInVzZXJUeXBlIjoyLCJpYXQiOjE1MzAyMTMyNjN9.CclIGjbDyE1yHT8DRvQMpcOWoYeT3wFTX3LFXBTjaq4'
                }
            }).then(res=>res.json()).then(res=>resolve(res))

        }).catch(err=>reject(err));
    }

    static getAcceptedRequests(){
        return new Promise((resolve,reject)=>{
            fetch(`${BASE_URL}/guard/acceptedRequests`,{
                method:'GET',
                headers:{
                    'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMzUzMmYzMDA2MGMyMzc2NDA0ZDZiYyIsInVzZXJUeXBlIjoyLCJpYXQiOjE1MzAyMTMyNjN9.CclIGjbDyE1yHT8DRvQMpcOWoYeT3wFTX3LFXBTjaq4'
                }
            }).then(res=>res.json()).then(res=>resolve(res))

        }).catch(err=>reject(err));
    }


    static updateProfile(name,email,phone_no,address){
        return new Promise((resolve, reject)=>{
            fetch(`${BASE_URL}/guard/myProfile/edit`,{
                method:'PUT',
                headers:{
                    'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMzUzMmYzMDA2MGMyMzc2NDA0ZDZiYyIsInVzZXJUeXBlIjoyLCJpYXQiOjE1MzAyMTMyNjN9.CclIGjbDyE1yHT8DRvQMpcOWoYeT3wFTX3LFXBTjaq4'
                },
                body:JSON.stringify({
                    name:name,
                    email:email,
                    phone_no:phone_no,
                    address:address
                })
            }).then(res=>res.json())
        }).then(info=>{
            if(info.status=='success'){
                resolve(info.data);
            }else{
                reject(info.message);
            }
        })
    }
    static updatePassword(oldPassword,newPassword){
        return new Promise((resolve, reject)=>{
            fetch(`${BASE_URL}/guard/changePassword`,{
                method:'PUT',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMzUzMmYzMDA2MGMyMzc2NDA0ZDZiYyIsInVzZXJUeXBlIjoyLCJpYXQiOjE1MzAyMTMyNjN9.CclIGjbDyE1yHT8DRvQMpcOWoYeT3wFTX3LFXBTjaq4'
                },
                body:JSON.stringify({
                    oldPassword:oldPassword,
                    newPassword:newPassword
                })
            }).then(res=>res.json()).then(info=>{
                if(info.status=='success'){
                    Alert.alert("Password Changed")
                    resolve(info.data)
                }else{
                    reject(info.message)
                }
            }).catch(err=>reject(err))
        })
    }
}