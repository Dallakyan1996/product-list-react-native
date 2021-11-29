import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductListComponent from './src/components/ProductsList';
import HeaderComponent from './src/components/Header';
import { NavigationContainer } from '@react-navigation/native';
import Navigate from './src/components/Navigate';
import { Header } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Navigate /> */}
      <Header
        // leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
        centerComponent={{ text: 'Products List', style: { color: '#fff', fontSize: 20 } }}
      // rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <ProductListComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000eb',
    // marginTop: 45,
    // padding: 10  
  }
});
