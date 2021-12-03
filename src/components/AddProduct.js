import React, { useEffect, useState } from 'react';
import { Alert, Modal, StyleSheet, View, TextInput, TouchableOpacity, Text, Keyboard, Pressable } from "react-native";
import { Input } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './modalStyle';


export const AddProductComponent = ({ products, setProducts }) => {
    const [modalVisible, setModalVisible] = useState(false);
    let _storeData = async (products) => {
        try {
            await AsyncStorage.setItem('products', JSON.stringify(products));
        } catch (error) {
            console.log(error)
        }
    };
    const [newProduct, setNewProduct] = useState({
        productName: "",
        price: ""
    })
    const _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('products');
            if (value !== null) {
                setProducts([...JSON.parse(value)])
            }
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        _retrieveData()
    }, [])

    return <>
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
                    <Input
                        placeholder='Product Buy Info'
                        onChangeText={(e) => {
                            setNewProduct({
                                ...newProduct,
                                info: e
                            })
                        }}
                        value={newProduct.info}
                        style={styles.input}
                        leftIcon={
                            <Icon
                                name='info'
                                size={18}
                                color='#758087e8'
                            />
                        }
                    />
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => {
                            if (newProduct.price && newProduct.productName) {
                                setProducts([...products, newProduct])
                                _storeData([...products, newProduct])
                                setNewProduct({
                                    productName: "",
                                    price: ""
                                })
                            }
                            setModalVisible(!modalVisible)
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
    </>
}