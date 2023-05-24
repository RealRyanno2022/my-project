import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { Header, SearchBar, Icon } from 'react-native-elements';
import ShopHeader from '../shop/ShopHeader';
import ShopFooter from '../shop/ShopFooter';
import BrandBox from '../shop/BrandBox';

const ConfirmationPage = ({ route, navigation }) => {
  const { orderID, orderDate, totalAmount } = route.params;

  const handleContinueShopping = () => {
    // Navigate to desired screen
    // For example: navigation.navigate('Home');
    navigation.navigate('ShopFront')
  }
  const renderOrderedItem = ({ item }) => {
    const { product } = item;
    return <BrandBox 
    product={product} 
    navigation={navigator} />;
  }

  const orderedItems = [
    { id: '1', product: { name: 'Product 1' } },
    { id: '2', product: { name: 'Product 2' } },
    { id: '3', product: { name: 'Product 3' } },
  ];

  return (
    <View>
    <ShopHeader navigation={navigation}  />
    <View style={styles.container}>
      <Text style={styles.title}>Order Confirmation</Text>
      <Text style={styles.details}>Your Order ID: {orderID}</Text>
      <Text style={styles.details}>Order Date: {orderDate}</Text>
      <Text style={styles.details}>Total Amount: {totalAmount}</Text>

      <Text style={styles.details}>Items Ordered:</Text>
      <FlatList
        // data={orderedItems}
        data=""
        renderItem={renderOrderedItem}
        keyExtractor={item => item.id}
      />

      <Text style={styles.confirmation}>
        Your order has been placed successfully! You will receive an email confirmation shortly.
      </Text>

      <Button 
        onPress={handleContinueShopping}
        title="Continue Shopping"
      />
    </View>
    <ShopFooter navigation={navigation} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },
  details: {
    fontSize: 18,
    marginBottom: 10
  },
  confirmation: {
    fontSize: 16,
    marginBottom: 20,
    color: 'green'
  }
});



export default ConfirmationPage;