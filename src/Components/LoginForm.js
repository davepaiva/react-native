import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

import data from '../fakeDB'  // simulates a database

class LoginForm extends Component {

    state = {
        username: '',
        password: ''
    }

    // simulates an API call to database
    signin = (username, password) => {
        console.log(username, password)
        console.log(data.email, data.password)
        if (data.password === password && data.email === username) {
            this.props.navigation.navigate('Orders')
        }

    }
    render() {
        return (
            <View style={styles.container} >
                <Image style={{ width: 200, height: 150 }}
                    source={require('../../assets/iconsample.png')} />
                <TextInput placeholder={'Username'} placeholderTextColor='gray' style={styles.inputText} keyboardType='email-address' onChangeText={(text) => { this.setState({ username: text }) }} />
                <TextInput placeholder={'Password'} placeholderTextColor='gray' style={styles.inputText} secureTextEntry={true} onChangeText={(text) => { this.setState({ password: text }) }} />
                <TouchableOpacity style={styles.button} onPress={() => { this.signin(this.state.username, this.state.password) }}>
                    <Text style={styles.buttonText}> Login </Text>
                </TouchableOpacity>
            </View>
        );
    };
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    inputText: {
        width: 300,
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        marginVertical: 10,
        fontSize: 16,
        paddingLeft: 10,
        borderRadius: 25,
    },
    button: {
        width: 200,
        height: 40,
        backgroundColor: '#0097a7',
        borderRadius: 15,
        textAlign: 'center',
        marginVertical: 15,
    },

    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        marginVertical: 7


    }



});

export default LoginForm