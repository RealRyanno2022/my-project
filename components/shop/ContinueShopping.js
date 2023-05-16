import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomerBasket from '../account/CustomerBasket';
import ShopHeader from './ShopHeader';

const ContinueShopping = () => {
  const navigation = useNavigation();

  const handleContinueShopping = () => {
    navigation.goBack();
    navigation.goBack(); // Navigate back twice to the BrandVarieties page
  };

  const handleCheckout = () => {
    navigation.navigate('LoginScreen'); // Navigate to the LoginScreen for checkout
  };

  return (
    <View style={styles.container}>
      <ShopHeader navigation={navigation} />
      <View style={styles.header}>
        <Text style={styles.smallText}>The item was added to your cart! Continue shopping or checkout now?</Text>
      </View>
      <CustomerBasket />
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card} onPress={handleContinueShopping}>
          <Text style={styles.cardText}>Continue Shopping</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={handleCheckout}>
          <Text style={styles.cardText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 30,
    backgroundColor: '#1F1F1F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#FB5B5A',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    padding: 20,
  },
  card: {
    width: '45%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    color: '#1F1F1F',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ContinueShopping;