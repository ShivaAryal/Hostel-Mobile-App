import React,{Component} from 'react';
import Auth from './../Login/Login.service'
import {BASE_URL} from './../../global/constants'

export default class StudentService{
    static registerStudent(name,email,password,phone_no,roll_no,address,course,year,guardian_name,guardian_contact,lg_name,lg_contact,lg_address,myemail,mypassword){
        return new Promise((resolve, reject)=>{

            fetch(`${BASE_URL}/staff/registerStudent`,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'Authorization':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMWU1ODNmZDVlNWU0MmU3MDBmY2QwMiIsInVzZXJUeXBlIjoxLCJpYXQiOjE1MjkzMDYyODV9.cM_rWTugeCItxBJNu-PIPUAMKusM7A74oLtb5qK47WI"
                },
                body:JSON.stringify({
                    name:name,
                    email:email,
                    password:password,
                    phone_no:phone_no,
                    roll_no:roll_no,
                    address:address,
                    course:course,
                    year:year,
                    guardian_name:guardian_name,
                    guardian_contact:guardian_contact,
                    lg_name:lg_name,
                    lg_contact:lg_contact,
                    lg_address:lg_address,
                    myemail:myemail,
                    mypassword:mypassword
                })
            }
        ).then(res=>res.json())
        }).then(info=>{
            console.log("Info:",info)
            if(info.status=='success'){
                resolve(info.data);
            }else{
                reject(info.message);
            }
        }).catch(err => reject(err));
    }

    static requestLeave(warden,studentName,name,dateofLeaving,dateofArrival,requestAddress,requestContact){
        return new Promise((resolve, reject)=>{
            fetch(`${BASE_URL}/student/leaveRequest`,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMjc2ZmY2MjRjNDQ5MDBlNDgyZDJkNiIsImlhdCI6MTUzMDA3ODE4NX0.7P5DwmVJ7u1UuWH8oZMzp91bSY5RZZEtm7-vVjtRSl4'
                },
                body:JSON.stringify({
                    warden:warden,
                    studentName:StudentName,
                    name:name,
                    dateofLeaving:dateofLeaving,
                    dateofArrival:dateofArrival,
                    requestAddress:requestAddress,
                    requestContact:requestContact
                })
            }).then(res=>res.json())
        }).then(info=>{
            if(info.status=='success'){
                resolve(info.data)
            }else{
                reject(info.message)
            }
        }).catch(err => reject(err))
    }

    static getProfile(){
        return new Promise((resolve,reject)=>{
            fetch(`${BASE_URL}/student/myProfile`,{
                method:'GET',
                headers:{
                    'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMjc2ZmY2MjRjNDQ5MDBlNDgyZDJkNiIsImlhdCI6MTUzMDA3ODE4NX0.7P5DwmVJ7u1UuWH8oZMzp91bSY5RZZEtm7-vVjtRSl4'
                }
            }).then(res=>res.json()).then(res=>resolve(res))
        }).catch(err=>reject(err))
    }

    static updateProfile(phone_no,roll_no,address,guardianName,guardianContact,lg_name,lg_contact,lg_address){
        return new Promise((resolve, reject)=>{
            fetch(`${BASE_URL}/student/myProfile/edit`,{
                method:'PUT',
                headers:{
                    'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMjc2ZmY2MjRjNDQ5MDBlNDgyZDJkNiIsImlhdCI6MTUzMDA3ODE4NX0.7P5DwmVJ7u1UuWH8oZMzp91bSY5RZZEtm7-vVjtRSl4'
                },
                body:JSON.stringify({
                    phone_no:phone_no,
                    roll_no:roll_no,
                    address:address,
                    guardian_name:guardianName,
                    guardian_contact:guardianContact,
                    lg_name:lg_name,
                    lg_contact:lg_contact,
                    lg_address:lg_address
                })
            }).then(res=>res.json()).then(info =>{
                if(info.status=='success'){
                    resolve(info.data);
                }else{
                    reject(info.message);
                }
            })
        })
    }

    static updatePassword(oldPassword,newPassword){
        return new Promise((resolve, reject)=>{
            fetch(`${BASE_URL}/student/changePassword`,{
                method:'PUT',
                headers:{
                    'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMjc2ZmY2MjRjNDQ5MDBlNDgyZDJkNiIsImlhdCI6MTUzMDA3ODE4NX0.7P5DwmVJ7u1UuWH8oZMzp91bSY5RZZEtm7-vVjtRSl4'
                },
                body:JSON.stringify({
                    oldPassword:oldPassword,
                    newPassword:newPassword
                })
            }).then(res=>res.json()).then(info=>{
                if(info.status=='success'){
                    resolve(info.data)
                }else{
                    reject(info.message)
                }
            }).catch(err=>reject(err))
        })
    }
    static getMyRequest(){
        return new Promise((resolve,reject)=>{
            fetch(`${BASE_URL}/student/myRequest`,{
                method:'GET',
                headers:{
                    'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMjc2ZmY2MjRjNDQ5MDBlNDgyZDJkNiIsImlhdCI6MTUzMDA3ODE4NX0.7P5DwmVJ7u1UuWH8oZMzp91bSY5RZZEtm7-vVjtRSl4'
                }
            }).then(res=>res.json()).then(res=>resolve(res))
        }).catch(err=>reject(err))
    }
}