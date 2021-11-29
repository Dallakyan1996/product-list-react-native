import React, { useEffect, useState } from "react"
import { StyleSheet, View, Text, TouchableOpacity, Button, ScrollView } from "react-native"
// import { ListItem } from 'react-native-elements'
import { Icon } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddProductComponent from "./AddProduct";
import { ListItem, Avatar } from 'react-native-elements'

export const ProductContext = React.createContext()

const ProductsListComponent = () => {
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
        AsyncStorage.getItem('products')
            .then((value) => {
                const data = JSON.parse(value);
                // setList(data)
                // console.log(value)
            });
    }, [])
    return <ProductContext.Provider value={[products, setProducts]}>
        <ScrollView style={styles.scrollView}>
            <View style={styles.productList}>
                <AddProductComponent />
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
    }
});

export default ProductsListComponent;