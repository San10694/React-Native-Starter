import React, { Component } from "react";
import { Platform, StyleSheet, TouchableOpacity, Text, View, Dimensions } from "react-native";
import Colors from '../Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

export default class SmartkeyScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{
                    height: 300, width: 300,
                    borderWidth: 3,
                    borderColor: Colors.primary,
                    borderRadius: 150,
                    alignItems: "center",
                    justifyContent: 'center'
                }}>
                    <Icon name={"key-outline"} size={80} color={Colors.primary} style={{ marginTop: 10 }}> </Icon>
                    <Text style={styles.welcome}>Tap here to use room key</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        paddingTop: 50,
        alignItems: "center",
        backgroundColor: Colors.lightGrey,

    },
    welcome: {
        fontSize: 18,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});
