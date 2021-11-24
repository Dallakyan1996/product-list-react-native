import React, { useEffect, useState } from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { ListItem } from 'react-native-elements'
import { Icon } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';



const ProductsListComponent = ({ navigation }) => {
    let _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('products');
            console.log(value)
            if (value !== null) {
                setList(JSON.parse(value));
            }
        } catch (error) {

        }
    };
    let [list, setList] = useState()
    useEffect(() => {
        _retrieveData()
        console.log(true)
    }, [])
    return <View>
        {list &&
            list.map((l, i) => (
                <ListItem key={i} bottomDivider>
                    <ListItem.Content style={styles.list} >
                        <ListItem.Title>{l.name}</ListItem.Title>
                        <Icon name='edit' onPress={() => {
                        }} />
                        <ListItem.Title>{l.subtitle}</ListItem.Title>
                        <Icon name='edit' onPress={() => {
                        }} />
                    </ListItem.Content>
                </ListItem>
            ))
        }
        <View style={styles.addBtnView}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Add Product', { list: list })
                }
                }
                style={styles.roundButton2}>
                <Text style={styles.addBtnText}>+ Add Product</Text>
            </TouchableOpacity>
        </View>
    </View >
}

const styles = StyleSheet.create({

    roundButton2: {
        marginTop: 10,
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

export default ProductsListComponent;