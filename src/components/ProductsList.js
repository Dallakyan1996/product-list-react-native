import React, { useEffect, useState } from "react"
import { StyleSheet, View, Text, TouchableOpacity, Button, ScrollView } from "react-native"
// import { ListItem } from 'react-native-elements'
import { Icon } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddProductComponent from "./AddProduct";
import { ListItem, Avatar } from 'react-native-elements'
import SumBtn from "./SumBtn";

export const ProductContext = React.createContext()

const ProductsListComponent = () => {
    const _retrieveData = async () => {
        try {
            if (value !== null) {
                const value = await AsyncStorage.getItem('products');
                console.log(JSON.parse(value));
                // We have data!!
            }
        } catch (error) {
            // Error retrieving data
        }
    };
    // let removeItemValue = async (key) => {
    //     try {
    //         await AsyncStorage.removeItem(key);
    //         return true;
    //     }
    //     catch (exception) {
    //         return false;
    //     }
    // }
    let [products, setProducts] = useState([])
    useEffect(() => {
        _retrieveData()
    }, [products])
    return <ProductContext.Provider value={[products, setProducts]}>
        <ScrollView style={styles.scrollView}>
            <View style={styles.productList}>
                <View style={styles.test}>
                    <AddProductComponent />
                    <SumBtn />
                </View>
                {products &&
                    products.map((l, i) => (
                        <ListItem style={styles.listItem} key={l.id} >
                            <ListItem.Content style={styles.list} >
                                <ListItem.Title>{l["productName"]}</ListItem.Title>
                                <ListItem.Title>{l["price"]}</ListItem.Title>
                                <Icon name='delete' onPress={() => {
                                    products.splice(i, 1)
                                    setProducts([...products])
                                }} />
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
                {/* <Button title="clear" onPress={() => {
                    // removeItemValue("products")
                    // console.log(route)
                }} /> */}
            </View >
        </ScrollView>
    </ProductContext.Provider>
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