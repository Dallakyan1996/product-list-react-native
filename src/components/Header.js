import React, { cloneElement } from "react"
import { Modal, StyleSheet, View, Text } from "react-native"

const HeaderComponent = () => {
    return <View style={styles.headerView}>
        <Text style={styles.headerText}>Product List</Text>
    </View>
}

const styles = StyleSheet.create({
    headerView: {
        display: "flex",
        alignItems: "center"
    },
    headerText: {
        fontSize: 20
    }
});

export default HeaderComponent;