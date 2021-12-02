import React, { useEffect, useState } from "react"
import { View, Text, Modal, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import { styles } from './modalStyle';

const SumBtn = ({ products }) => {
    const [modalVisible, setModalVisible] = useState(false);
    let [productsPrice, setProductsPrice] = useState(0)
    const sumPrice = () => {
        for (let i = 0; i < products.length; i++)
            setProductsPrice(productsPrice + parseInt(products[i]["price"]))
    }

    return <View style={styles.addBtnView}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text>{productsPrice}</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => {
                            setModalVisible(!modalVisible)
                            setProductsPrice(0)
                        }}
                    >
                        <Text style={styles.textStyle}>Close</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
        <TouchableOpacity
            onPress={() => {
                setModalVisible(!modalVisible)
                sumPrice()
            }}
            style={styles.roundButton2}>
            <Text style={styles.addBtnText}>Sum Prices</Text>
        </TouchableOpacity>
    </View>
}

export default SumBtn;