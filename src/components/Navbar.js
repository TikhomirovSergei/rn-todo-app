import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { THEME } from '../theme';

export const Navbar = ({ title }) => {
    return (
        <View style={styles.containter}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containter: {
        height: 70,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: THEME.MAIN_COLOR,
        paddingBottom: 10
    },
    text: {
        color: "white",
        fontSize: 20
    }
})