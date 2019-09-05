import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';

import SignupForm from '../Components/SignupForm'

export default class Signup extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Appbar.Header style={styles.header}>
                    <Appbar.BackAction
                        onPress={this._goBack}
                    />
                    <Appbar.Content style={styles.headerText}
                        title="Register"
                    />
                </Appbar.Header>
                <SignupForm navigation={this.props.navigation} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#56c8d8',
    },
    signupText: {
        fontSize: 20,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 50
    },
    header: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#D86656'

    },
    headerText: {
        color: '#ffffff'
    }
});