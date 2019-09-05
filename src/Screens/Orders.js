import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import { DrawerActions } from 'react-navigation-drawer'

import TabNavigator from '../Routes/TabNavigator'

export default class Orders extends Component {


    render() {
        return (
            <View style={styles.container}>
                <Appbar.Header style={styles.header}>
                    <TouchableOpacity onPress={() => { console.log('pressed') }} >
                        <Appbar.Action icon="menu" size={40} />
                    </TouchableOpacity>
                    <Appbar.Content title="Orders" />
                </Appbar.Header>
                <TabNavigator />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#56c8d8',

    },
    header: {

        backgroundColor: '#0097a7'
    },
    text: {
        textAlign: "center",
        justifyContent: "center",
        marginVertical: 200
    }
});