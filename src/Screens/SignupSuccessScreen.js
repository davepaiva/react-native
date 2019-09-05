import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SignupSuccess extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Sucessfully Registered</Text>
                <Text style={styles.signupText} onPress={() => { this.props.navigation.navigate('Login') }}>
                    Sign In to continue
            </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#56c8d8',
        alignItems: 'center',
        justifyContent: 'center'

    },
    signupText: {
        marginVertical: 20
    }
});