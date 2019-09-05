import React, { Component } from 'react';
import { Dimensions, SafeAreaView, ScrollView, View, StyleSheet, Image, Text } from 'react-native'
import { createAppContainer, createDrawerNavigator, DrawerItems } from 'react-navigation';

import Profile from '../Screens/Profile'
import Products from '../Screens/Products'
import Orders from '../Screens/Orders'
import data from '../fakeDB'

const WIDTH = Dimensions.get("window").width

const CustomeDrawerComponents = (props) => (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.profile}>
            <Image source={require('../../assets/man.png')} style={styles.image} />
            <Text style={styles.text}>
                {data.email}
            </Text>
        </View>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
)

const DrawerConfig = {
    drawerWidth: WIDTH * 0.84,
    contentComponent: CustomeDrawerComponents

}


const DrawerNavigator = createDrawerNavigator({
    Orders: {
        screen: Orders
    },

    Profile: {
        screen: Profile,
    },
    Products: {
        screen: Products
    }

},

    DrawerConfig
)


const styles = StyleSheet.create({
    profile: {
        flex: 1,
        backgroundColor: '#5687D8',
        height: 150,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        justifyContent: "center",
        alignItems: "center",
        color: "#ffffff",
        marginVertical: 10
    },
    image: {
        height: 120,
        width: 120,
        borderRadius: 50,
        justifyContent: "center",

    }
});

export default createAppContainer(DrawerNavigator)