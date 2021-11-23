import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ProductComponent = ({ productName, productPrice }) => {
    return <View style={styles.productWrapper}>
        <View style={styles.productNameView}>
            <Text style={styles.productText}>{productName}</Text>
        </View>
        <View>
            <Text style={styles.productText}>{productPrice}</Text>
        </View>
    </View>
}


const styles = StyleSheet.create({
    productWrapper: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#14347ab8",
        marginTop: 3,
        padding: 5
    },
    productNameView: {
        paddingRight: 10
    },
    productText: {
        color: "white",
        fontSize: 18
    }
});


export default ProductComponent;