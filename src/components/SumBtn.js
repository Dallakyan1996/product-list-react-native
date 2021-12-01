import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const SumBtn = () => {
    return <View style={styles.addBtnView}>
        <TouchableOpacity
            onPress={() => {

            }}
            style={styles.roundButton2}>
            <Text style={styles.addBtnText}>Sum Prices</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    roundButton2: {
        marginTop: 10,
        marginBottom: 10,
        display: "flex",
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#3781e6',
    },
    addBtnText: {
        fontSize: 18,
        color: 'white'
    },
    addBtnView: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        color: "#fff",
        fontSize: 15
    }

});

export default SumBtn;