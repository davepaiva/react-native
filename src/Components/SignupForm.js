import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { TextInput } from 'react-native-paper';

export default class SignUp extends Component {
    state = {
        username: '',
        password: '',
        restaurant: '',
        adress: '',
        additional_details: ''

    }

    signup = () => {
        Actions.signupsucess()

    }



    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.form}
                    label='Email'
                    mode='flat'
                    onChangeText={text => this.setState({ username: text })}
                />
                <TextInput style={styles.form}
                    label='Password'
                    mode='flat'
                    onChangeText={text => this.setState({ password: text })}
                />
                <TextInput style={styles.form}
                    label='Restaurant'
                    mode='flat'
                    onChangeText={text => this.setState({ restaurant: text })}
                />
                <TextInput style={styles.form}
                    label='Address'
                    mode='flat'
                    onChangeText={text => this.setState({ adress: text })}
                />
                <TextInput style={styles.form}
                    label='Other Details'
                    mode='flat'
                    onChangeText={text => this.setState({ additional_details: text })}
                />
                <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate('SuccessLogin') }}>
                    <Text style={styles.buttonText} > Register </Text>
                </TouchableOpacity>

            </View>

        );

    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#56c8d8',
        paddingTop: 100,
    },
    form: {
        height: 50,
        width: 300,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15
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

})