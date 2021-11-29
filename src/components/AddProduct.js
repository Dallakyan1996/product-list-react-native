import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Keyboard } from "react-native"
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useProducts } from '../hooks/useProducts';


const AddProductComponent = () => {

    let [products, setProducts] = useProducts([])
    let _storeData = async (products) => {
        try {
            await AsyncStorage.setItem('products', JSON.stringify(products));
        } catch (error) {
            console.log("error")
        }
    };
    const [newProduct, setNewProduct] = useState({
        id: null,
        productName: "",
        price: ""
    })

    useEffect(() => {
        _storeData(products)
    }, [products])

    return <View>
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
        />
        <View style={styles.addBtnView}>
            <TouchableOpacity
                onPress={() => {
                    if (newProduct.price && newProduct.productName) {
                        setProducts([...products, newProduct])
                        setNewProduct({
                            id: 10 * Math.random(),
                            productName: "",
                            price: ""
                        })
                        _storeData;
                    }
                    Keyboard.dismiss()
                }
                }
                style={styles.roundButton2}>
                <Text style={styles.addBtnText} >+ Add Product</Text>
            </TouchableOpacity>
        </View>
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
        color: "#fff"
    }

});
export default AddProductComponent;