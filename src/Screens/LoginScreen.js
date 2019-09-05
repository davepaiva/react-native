import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginForm from '../Components/LoginForm'



export default class Login extends Component {
    render() {

        return (
            <View style={styles.container}>
                <LoginForm navigation={this.props.navigation} />
                <View style={styles.signup}>
                    <Text style={styles.signupText} onPress={() => { this.props.navigation.navigate('Signup') }}>
                        Don't have an account yet? Sign Up
            </Text>
                </View>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#56c8d8'
    },
    signup: {
        paddingTop: 150,
        paddingBottom: 50
    },
    signupText: {
        color: 'rgba(255, 255, 255, 0.5)'
    }
});

