import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper'
import { DrawerActions } from 'react-navigation-drawer'


export default class Products extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Appbar.Header style={styles.header}>
                    <TouchableOpacity onPress={() => { this.props.navigation.dispatch(DrawerActions.openDrawer()) }} >
                        <Appbar.Action icon="menu" size={40} />
                    </TouchableOpacity>
                    <Appbar.Content title="Products" />
                </Appbar.Header>
                <View style={styles.textalign}>
                    <Text style={styles.text}>
                        Comming Soon !
                </Text>
                </View>

            </View >
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#56c8d8',
    },
    text: {
        color: "gray",
        fontSize: 18,
        paddingTop: 250
    },
    header: {

        backgroundColor: '#0097a7'
    },
    textalign: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});