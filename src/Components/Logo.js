import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const Logo = () => {
    return (
        <View>
            <Image style={{ width: 200, height: 150 }}
                source={require('../../assets/iconsample.png')} />

        </View>


    )
}



export default Logo