import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default class CompletedPrders extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    No Completed Orders
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