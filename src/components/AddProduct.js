import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from "react-native"
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useProducts } from '../hooks/useProducts';


const AddProductComponent = ({ list, setList }) => {

    const ref_input3 = useRef();
    let [products, setProducts] = useProducts([])
    let _storeData = async (products) => {
        try {
            await AsyncStorage.setItem('products', JSON.stringify(products));
        } catch (error) {
            console.log("error")
        }
    };
    const [newProduct, setNewProduct] = useState({
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

        />
        <Input
            placeholder='Product Price'
            onChangeText={(e) => {
                setNewProduct({
                    ...newProduct,
                    price: e
                })
            }}

        />

        <View style={styles.addBtnView}>
            <TouchableOpacity
                ref={ref_input3}
                onPress={() => {
                    setProducts([...products, newProduct])
                    ref_input3.current.focus()
                }
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
        marginBottom: 10,
        display: "flex",
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    list: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }
});
export default AddProductComponent;