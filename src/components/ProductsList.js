import React, { useEffect, useState } from "react"
import { StyleSheet, View, Text, TouchableOpacity, Button, ScrollView } from "react-native"
import { ListItem } from 'react-native-elements'
import { Icon } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddProductComponent from "./AddProduct";


export const ProductContext = React.createContext()

const ProductsListComponent = () => {
    let removeItemValue = async (key) => {
        try {
            await AsyncStorage.removeItem(key);
            return true;
        }
        catch (exception) {
            return false;
        }
    }
    let [products, setProducts] = useState([])
    useEffect(() => {
        AsyncStorage.getItem('products')
            .then((value) => {
                const data = JSON.parse(value);
                setList(data)
                console.log(value)
            });
    }, [])
    return <ProductContext.Provider value={[products, setProducts]}>
        <View>
            <AddProductComponent />
            <ScrollView style={styles.scrollView}>
                {products &&
                    products.map((l, i) => (
                        <ListItem key={i} bottomDivider>
                            <ListItem.Content style={styles.list} >
                                <ListItem.Title>{l["productName"]}</ListItem.Title>
                                <Icon name='edit' onPress={() => {
                                }} />
                                <ListItem.Title>{l["price"]}</ListItem.Title>
                                <Icon name='edit' onPress={() => {
                                }} />
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
            </ScrollView>
            <Button title="clear" onPress={() => {
                // removeItemValue("products")
                // console.log(route)
            }} />
        </View >
    </ProductContext.Provider>
}

const styles = StyleSheet.create({
    list: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    }
});

export default ProductsListComponent;