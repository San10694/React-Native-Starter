import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, ScrollView, Dimensions, View, Image } from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import images from "../Images";
import Colors from '../Colors';
const { width, height } = Dimensions.get('window');

export default class ACScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{
                        fontSize: 40, paddingVertical: 100, fontFamily: "roboto.medium", color: Colors.primary
                    }}>20{'\u00B0'}</Text>
                </View>
                <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <TouchableOpacity
                        style={styles.cardContanier}>
                        <View >
                            <Icon name={"power"} size={30} color={Colors.primary} style={{}}> </Icon>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.cardContanier}>
                        <View>
                            <Text style={styles.welcome}>Mode</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <TouchableOpacity
                        style={styles.cardContanier2}>
                        <View >
                            <Text style={styles.welcome}>Speed</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.cardContanier2}>
                        <View>
                            <Text style={styles.welcome}>Direction</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.cardContanier2}>
                        <View>
                            <Text style={styles.welcome}>Swing</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <TouchableOpacity
                        style={styles.cardContanier3}>
                        <View >
                            <Icon name={"minus"} size={30} color={Colors.primary} style={{}}> </Icon>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.cardContanier3}>
                        <View>
                            <Text style={styles.welcome}>Temp</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.cardContanier3}>
                        <View>
                            <Icon name={"plus"} size={30} color={Colors.primary} style={{}}> </Icon>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: Colors.lightGrey,

    },
    welcome: {
        fontSize: 14,
        fontFamily: "roboto.medium",
        color: Colors.black
    },
    cardContanier: {
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1,
        borderRadius: 2,
        width: width * 0.45,
        margin: 1,
        paddingVertical: 15
    },

    cardContanier2: {
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1,
        borderRadius: 2,
        width: width * 0.30,
        margin: 1,
        paddingVertical: 15
    },
    cardContanier3: {
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1,
        borderRadius: 2,
        width: width * 0.30,
        margin: 1,
        paddingVertical: 20
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
