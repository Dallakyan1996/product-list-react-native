import React, { useEffect, useState } from 'react';
import { Alert, Modal, StyleSheet, View, TextInput, TouchableOpacity, Text, Keyboard, Pressable, } from "react-native";
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useProducts } from '../hooks/useProducts';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './modalStyle';


const AddProductComponent = () => {
    const [modalVisible, setModalVisible] = useState(false);
    let [products, setProducts] = useProducts([])
    let _storeData = async (products) => {
        try {
            await AsyncStorage.setItem('products', JSON.stringify(products));
            console.log("wow")
        } catch (error) {
            console.log("error")
        }
    };
    const [newProduct, setNewProduct] = useState({
        id: null,
        productName: "",
        price: ""
    })

    // useEffect(() => {
    //     // _storeData(products)
    // }, [products])

    return <View>
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
                    <Input
                        placeholder='Product Name'
                        onChangeText={(e) => {
                            setNewProduct({
                                ...newProduct,
                                productName: e
                            })
                        }}
                        value={newProduct.productName}
                        style={styles.input}
                        leftIcon={
                            <Icon
                                name='crop'
                                size={18}
                                color='#758087e8'
                            />
                        }
                    />
                    <Input
                        placeholder='Product Price'
                        onChangeText={(e) => {

                            setNewProduct({
                                ...newProduct,
                                price: e
                            })
                        }}
                        value={newProduct.price}
                        keyboardType="numeric"
                        style={styles.input}
                        leftIcon={
                            <Icon
                                name='dollar'
                                size={18}
                                color='#758087e8'
                            />
                        }
                    />
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => {
                            setModalVisible(!modalVisible)
                            if (newProduct.price && newProduct.productName) {
                                setProducts([...products, newProduct])
                                setNewProduct({
                                    id: 10 * Math.random(),
                                    productName: "",
                                    price: ""
                                })
                                _storeData(products)
                            }
                            // Keyboard.dismiss()
                        }}
                    >
                        <Text style={styles.textStyle}>+ Add</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
        <View style={styles.addBtnView}>
            <TouchableOpacity
                onPress={() => {
                    setModalVisible(!modalVisible)
                }
                }
                style={styles.roundButton2}>
                <Text style={styles.addBtnText}>+ Add Product</Text>
            </TouchableOpacity>
        </View>
    </View>
}
export default AddProductComponent;