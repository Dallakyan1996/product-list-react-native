import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from "react-native"
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';


const AddProductComponent = ({ route, navigation }) => {

    let [products, setProducts] = useState()
    let [a, setA] = useState()
    let _storeData = async (products) => {
        try {
            await AsyncStorage.setItem('products', products);
        } catch (error) {
        }
    };
    const [newProduct, setNewProduct] = useState({
        product: "",
        price: ""
    })
    useEffect(() => {
        setProducts(route.params.list)
    }, [])
    useEffect(() => {
        _storeData(a)
        console.log("listen")
        console.log(a)
    }, [a])
    return <View>
        <Input
            placeholder='Product Name'
            onChangeText={(e) => {
                setNewProduct({
                    ...newProduct,
                    product: e
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
                style={styles.roundButton2}
                onPress={() => {
                    // console.log(newProduct)
                    setA([...products, newProduct])
                    // console.log(products)
                    // navigation.navigate('Home')
                }}
            >
                <Text style={styles.addBtnText}>+</Text>
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    roundButton2: {
        marginTop: 10,
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#124fb5e0'
    },
    addBtnText: {
        fontSize: 25,
        color: "white"
    },
    addBtnView: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});
export default AddProductComponent;