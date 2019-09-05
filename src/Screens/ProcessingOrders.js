import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default class ProcessingOrders extends Component {
    static navigationOptions = {
        title: 'Processing Orders',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    No  Processing Orders
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#56c8d8'
    },
    text: {
        color: "gray"
    }
});