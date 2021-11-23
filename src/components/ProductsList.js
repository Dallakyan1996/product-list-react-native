import React, { cloneElement } from "react"
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native"
import ProductComponent from "./Product"

const ProductsListComponent = ({ navigation }) => {

    return <View>
        <ProductComponent productName="Name" productPrice="300$" />
        <ProductComponent productName="Name" productPrice="300$" />
        <ProductComponent productName="Name" productPrice="300$" />
        <ProductComponent productName="Name" productPrice="300$" />
        <ProductComponent productName="Name" productPrice="300$" />
        <ProductComponent productName="Name" productPrice="300$" />
        <View style={styles.addBtnView}>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Add Product')
                }
                style={styles.roundButton2}>
                <Text style={styles.addBtnText}>+ Add Product</Text>
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({

    roundButton2: {
        marginTop: 10,
        display: "flex",
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // padding: 10,
        borderRadius: 50,
        backgroundColor: '#0a5bef',
    },
    addBtnText: {
        fontSize: 18,
        color: 'white'
    },
    addBtnView: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
});

export default ProductsListComponent;