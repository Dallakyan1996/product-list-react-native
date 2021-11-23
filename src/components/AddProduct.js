import React from 'react';
import { StyleSheet, View, TextInput, Button } from "react-native"

const AddProductComponent = () => {
    return <View>
        <TextInput style={styles.textInput} placeholder="Product Name"></TextInput>
        <TextInput style={styles.textInput} placeholder="Product Price"></TextInput>
        <View style={styles.addBtnView}>
            <Button title="Add Product" />
        </View>
    </View>
}

const styles = StyleSheet.create({
    textInput: {
        marginTop: 10,
        fontSize: 20
    },
    addBtnText: {
        fontSize: 15,
        color: 'white'
    },
    addBtnView: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
});
export default AddProductComponent;