import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import images from '../data/images'
import brandData from '../data/BrandData';

type Product = {
  id: string;
  name: string;
  price: number;
  brand: string;
  image: string;
};

type BrandBoxProps = {
  product: Product;
  selected: boolean;
  quantity: number;
  onSelect: () => void;
  onDeselect: () => void;
  navigation: any;
};


const BrandBox: React.FC<BrandBoxProps> = ({ product, selected, quantity, onSelect, onDeselect, navigation }) => {
  const handleProductPress = () => {
    navigation.navigate('ProductScreen', { product });
  };

  return (
    <TouchableOpacity style={styles.brandBox} onPress={handleProductPress}>
      <Image style={styles.productImage} source={{ uri: product.image }} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>{`${product.price.toFixed(2)}`}</Text>
    </TouchableOpacity>
  );
};

// ... the rest of your code ...


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