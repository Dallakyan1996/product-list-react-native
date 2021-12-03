import React, { useEffect, useState } from "react"
import { StyleSheet, View, Text, TouchableOpacity, Modal, ScrollView, Pressable } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AddProductComponent } from "./AddProduct";
import { ListItem, Icon, Button } from 'react-native-elements'
import SumBtn from "./SumBtn";
import { styles } from './modalStyle';


const ProductsListComponent = () => {
    let [products, setProducts] = useState([])
    let [info, setInfo] = useState("")
    const [modalVisible, setModalVisible] = useState(false);
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
                    <Text>{info}</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => {
                            setModalVisible(!modalVisible)
                        }}
                    >
                        <Text style={styles.textStyle}>Close</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
        <View style={styles.productList}>
            <View style={styles.test}>
                <AddProductComponent products={products} setProducts={setProducts} />
                <SumBtn products={products} />
            </View>
            {products &&
                products.map((l, i) => (
                    <ListItem.Swipeable
                        key={10 * Math.random()}
                        style={styles.product}
                        leftContent={
                            <Button
                                title="Info"
                                icon={{ name: 'info', color: 'white' }}
                                buttonStyle={{ minHeight: '100%', marginTop: 2 }}
                                onPress={() => {
                                    setModalVisible(!modalVisible)
                                    setInfo(l.info)
                                }
                                }
                            />
                        }
                        rightContent={
                            <Button
                                title="Delete"
                                icon={{ name: 'delete', color: 'white' }}
                                buttonStyle={{ minHeight: "100%", backgroundColor: 'red', marginTop: 2 }}
                                onPress={() => {
                                    products.splice(i, 1)
                                    setProducts([...products])
                                    _storeData([...products])
                                }}
                            />
                        }
                    >
                        <ListItem.Content style={styles.list}>
                            <ListItem.Title>{l["productName"]}</ListItem.Title>
                            <ListItem.Title>{l["price"]}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem.Swipeable>
                ))
            }
        </View >
    </ScrollView >
}


export default ProductsListComponent;