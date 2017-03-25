import React, {Component} from 'react';

import {
    Alert,
    View,
    AppRegistry
} from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {
    LoginButton,
} = FBSDK;

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <LoginButton
                    readPermissions={["user_friends", "read_custom_friendlists"]}
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                console.log("Login failed with error: " + result.error);
                            } else if (result.isCancelled) {
                                console.log("Login was cancelled");
                            } else {
                                console.log("Login was successful with permissions: " + result.grantedPermissions)
                            }
                        }
                    }
                    onLogoutFinished={() => console.log("User logged out")}/>
            </View>
        );
    }

}

export {Login}