import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductsListComponent from './src/components/ProductsList';
import { Header } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <Header
        leftComponent={{ color: '#fff', iconStyle: { color: '#fff' } }}
        centerComponent={{ text: 'Products List', style: { fontSize: 18, color: '#fff' } }}
        rightComponent={{ color: '#fff' }}
        statusBarProps={{ barStyle: 'light-content' }}
        barStyle="light-content"
      />
      <ProductsListComponent />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000eb',
  }
});
