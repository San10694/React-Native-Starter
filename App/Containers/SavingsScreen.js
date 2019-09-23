import React, { Component } from "react";
import { Platform, StyleSheet, Text, Dimensions, View } from "react-native";
import Colors from '../Colors';
const { width, height } = Dimensions.get('window');

export default class SavingsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 1,
                    borderRadius: 5,
                    marginHorizontal: 15,
                    height: height * 0.45
                }}>
                    <Text style={{
                        fontSize: 40, fontFamily: "roboto.medium", color: 'green'
                    }}>20%</Text>
                    <Text style={styles.welcome}>Savings on electricity bill due to green technology.</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: Colors.lightGrey,

    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});
