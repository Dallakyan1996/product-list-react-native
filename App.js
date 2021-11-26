import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductListComponent from './src/components/ProductsList';
import HeaderComponent from './src/components/Header';
import { NavigationContainer } from '@react-navigation/native';
import Navigate from './src/components/Navigate';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Navigate /> */}
      <ProductListComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40
  },
});
