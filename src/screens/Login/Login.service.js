import { BASE_URL } from '../../global/constants';
import { AsyncStorage } from 'react-native';

export default class Auth {
    state={
        'usermm':null,
    }
    static login(email, password, userType) {
        
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}/${userType}/login`, {
                method:'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                  })
                }).then(res => res.json())
                .then(info => {
                    console.log("Info: ", info);
                if(info.status == 'success') {
                    
                    this.setSession(info.data, userType);
                    resolve(info.data);
                } else {
                    reject(info.message);
                }
            }).catch(err =>reject(err))
        })
    }

    static setSession = (user, userType) => {
        let userObj = {
            name: user.name,
            token: user.token,
            type: userType
        }
        AsyncStorage.setItem("user", JSON.stringify(userObj));
    }

    static getSession = async () => {await AsyncStorage.getItem("user");
        this.setState({'usermm':user})
        console.log(this.state.usermm)
}
}