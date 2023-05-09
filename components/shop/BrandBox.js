import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const BrandBox = ({ product, navigation }) => {
  const handleProductPress = () => {
    navigation.navigate('ProductScreen', { product });
  };

  return (
    <TouchableOpacity style={styles.brandBox} onPress={handleProductPress}>
      <Image style={styles.productImage} source={{ uri: product.image }} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  brandBox: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
    width: '100%',
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
});

export default BrandBox;