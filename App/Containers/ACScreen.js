import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Colors from "../Colors";

export default class ACScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to ACScreen!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.lightGrey,

    },
    welcome: {
        fontSize: 12,
        fontFamily: "roboto.medium",
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop: 5,
        color: Colors.black
    },

    imgContainer: {
        // width: width * 0.45,
        // height: 100,
        // width: width * 0.95,
        // height: height * 0.30,
        position: 'relative',

    },
    bookImg: {
        width: 80,
        height: 40,
        top: 5,
        // left: 70,
        // position: 'absolute',
        borderRadius: 5,
    },
});
