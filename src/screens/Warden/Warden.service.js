import {BASE_URL} from './../../global/constants';
import {AsyncStorage,Alert} from 'react-native';

export default class WardenService{
    static getWarden(){
        return new Promise((resolve,reject)=>{
            fetch(`${BASE_URL}/warden/getStaff/warden`,{
                method:'GET',
                // headers:{
                //     'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMWU1ODNmZDVlNWU0MmU3MDBmY2QwMiIsInVzZXJUeXBlIjoxLCJpYXQiOjE1MjkzMDYyODV9.cM_rWTugeCItxBJNu-PIPUAMKusM7A74oLtb5qK47WI'
                // }
            }).then(res=>res.json()).then(res=>resolve(res))
        }).catch(err => reject(err));
    }

    // static getGuard(){
    //     return new Promise((resolve, reject)=>{
    //         fetch(`${BASE_URL}/getStaff/guard`,{
    //             method:'GET',
    //             headers:{
    //                 'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMWU1ODNmZDVlNWU0MmU3MDBmY2QwMiIsInVzZXJUeXBlIjoxLCJpYXQiOjE1MjkzMDYyODV9.cM_rWTugeCItxBJNu-PIPUAMKusM7A74oLtb5qK47WI'
    //             }
    //         }).then(res=>res.json()).then(res=>resolve(res))
    //     }).catch(err => reject(err));
    // }

    static getmyProfile(){
        return new Promise((resolve, reject)=>{
            fetch(`${BASE_URL}/warden/myProfile`,{
                method:'GET',
                headers:{
                    'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMWU1ODNmZDVlNWU0MmU3MDBmY2QwMiIsInVzZXJUeXBlIjoxLCJpYXQiOjE1MjkzMDYyODV9.cM_rWTugeCItxBJNu-PIPUAMKusM7A74oLtb5qK47WI'
                }
            }).then(res=>res.json()).then(res=>resolve(res))

        }).catch(err=>reject(err));
    }

    static updateProfile(name,email,phone_no,address,image){
        return new Promise((resolve, reject)=>{
            const data = new FormData();
            data.append('fileData', {
                uri : image.uri,
                type: image.type,
                name: image.fileName,
            });
            data.append(...{name:name,email,email,phone_no:phone_no,address:address})
            fetch(`${BASE_URL}/warden/myProfile/edit`,{
                method:'PUT',
                headers:{
                    'Content-Type': 'multipart/form-data',
                    'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMWU1ODNmZDVlNWU0MmU3MDBmY2QwMiIsInVzZXJUeXBlIjoxLCJpYXQiOjE1MjkzMDYyODV9.cM_rWTugeCItxBJNu-PIPUAMKusM7A74oLtb5qK47WI'
                },
                body:data
                //JSON.stringify({
                    // name:name,
                    // email:email,
                    // phone_no:phone_no,
                    // address:address,
                    // image:image
                   
                //})
            }).then(res=>res.json())
        }).then(info=>{
            if(info.status=='success'){
                resolve(info.data);
            }else{
                reject(info.message);
            }
        })
    }

    static registerStaff(name,email,password,phone_no,address,userType,myemail,mypassword){
        return new Promise((resolve, reject)=>{
            fetch(`${BASE_URL}/warden/registerStaff`,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMWU1ODNmZDVlNWU0MmU3MDBmY2QwMiIsInVzZXJUeXBlIjoxLCJpYXQiOjE1MjkzMDYyODV9.cM_rWTugeCItxBJNu-PIPUAMKusM7A74oLtb5qK47WI'
                },
                body:JSON.stringify({
                    name:name,
                    email:email,
                    password:password,
                    phone_no:phone_no,
                    address:address,
                    userType:userType,
                    myemail:myemail,
                    mypassword:mypassword
                })
            }).then(res=>res.json())
        }).then(info=>{
            if(info.status=='success'){
                resolve(info.data);
            }else{
                reject(info.message);
            }
        }).catch(err => reject(err));
    }

    static getMyNewRequests(){
        return new Promise((resolve,reject)=>{
            fetch(`${BASE_URL}/warden/newLeaveRequests`,{
                method:'GET',
                headers:{
                    'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMWU1ODNmZDVlNWU0MmU3MDBmY2QwMiIsInVzZXJUeXBlIjoxLCJpYXQiOjE1MjkzMDYyODV9.cM_rWTugeCItxBJNu-PIPUAMKusM7A74oLtb5qK47WI'
                }
            }).then(res=>res.json()).then(res=>resolve(res))
        }).catch(err=>reject(err));
    }

    static getMyApprovedRequests(){
        return new Promise((resolve,reject)=>{
            fetch(`${BASE_URL}/warden/approvedLeaveRequests`,{
                method:'GET',
                headers:{
                    'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMWU1ODNmZDVlNWU0MmU3MDBmY2QwMiIsInVzZXJUeXBlIjoxLCJpYXQiOjE1MjkzMDYyODV9.cM_rWTugeCItxBJNu-PIPUAMKusM7A74oLtb5qK47WI'
                }
            }).then(res=>res.json()).then(res=>resolve(res))
        }).catch(err=>reject(err))
    }

    static getMyDeclinedRequests(){
        return new Promise((resolve,reject)=>{
            fetch(`${BASE_URL}/warden/declinedLeaveRequests`,{
                method:'GET',
                headers:{
                    'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMWU1ODNmZDVlNWU0MmU3MDBmY2QwMiIsInVzZXJUeXBlIjoxLCJpYXQiOjE1MjkzMDYyODV9.cM_rWTugeCItxBJNu-PIPUAMKusM7A74oLtb5qK47WI'
                }
            }).then(res=>res.json()).then(res=>resolve(res))
        }).catch(err=>reject(err))
    }

    static updateRequestStatus(status,id){
        return new Promise((resolve, reject)=>{
            fetch(`${BASE_URL}/warden/grantPermission`,{
                method:'PUT',
                headers:{
                    'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMWU1ODNmZDVlNWU0MmU3MDBmY2QwMiIsInVzZXJUeXBlIjoxLCJpYXQiOjE1MjkzMDYyODV9.cM_rWTugeCItxBJNu-PIPUAMKusM7A74oLtb5qK47WI'
                },
                body:JSON.stringify({
                    id:id,
                    status:status
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
            fetch(`${BASE_URL}/warden/changePassword`,{
                method:'PUT',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMWU1ODNmZDVlNWU0MmU3MDBmY2QwMiIsInVzZXJUeXBlIjoxLCJpYXQiOjE1MjkzMDYyODV9.cM_rWTugeCItxBJNu-PIPUAMKusM7A74oLtb5qK47WI'
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