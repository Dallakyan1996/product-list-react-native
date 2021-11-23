import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text } from 'react-native';
import ProductsListComponent from './ProductsList';
import AddProductComponent from './AddProduct';

const Stack = createStackNavigator();

const Navigate = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={ProductsListComponent}
                    options={{ title: 'Products List' }}
                />
                <Stack.Screen name="Add Product" component={AddProductComponent} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigate;