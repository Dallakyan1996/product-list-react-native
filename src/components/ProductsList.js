import React, { useEffect, useState } from "react"
import { StyleSheet, View, Text, TouchableOpacity, Button, ScrollView } from "react-native"
import { Icon } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AddProductComponent } from "./AddProduct";
import { ListItem, Avatar } from 'react-native-elements'
import SumBtn from "./SumBtn";


const ProductsListComponent = () => {
    let [products, setProducts] = useState([])
    let _storeData = async (products) => {
        try {
            await AsyncStorage.setItem('products', JSON.stringify(products));
        } catch (error) {
            console.log("error")
        }
    };
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
    return <ScrollView style={styles.scrollView}>
        <View style={styles.productList}>
            <View style={styles.test}>
                <AddProductComponent products={products} setProducts={setProducts} />
                <SumBtn products={products} />
            </View>
            {products &&
                products.map((l, i) => (
                    console.log(products),
                    <ListItem style={styles.listItem} key={10 * Math.random()} >
                        <ListItem.Content style={styles.list} >
                            <ListItem.Title>{l["productName"]}</ListItem.Title>
                            <ListItem.Title>{l["price"]}</ListItem.Title>
                            <Icon name='delete' onPress={() => {
                                products.splice(i, 1)
                                setProducts([...products])
                                _storeData([...products])

                            }} />
                        </ListItem.Content>
                    </ListItem>
                ))
            }
        </View >
    </ScrollView>
}

const styles = StyleSheet.create({
    list: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    listItem: {
        marginTop: 10
    },
    productList: {
        padding: 10
    },
    btnsView: {
        display: "flex",
        flexDirection: "row"
    },
    test: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    }
});

export default ProductsListComponent;