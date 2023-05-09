import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const product = {
  name: 'Cool Headphones',
  images: [
    'https://example.com/images/cool-headphones-1.jpg',
    'https://example.com/images/cool-headphones-2.jpg',
    'https://example.com/images/cool-headphones-3.jpg',
  ],
  price: 150.99,
  description:
    'Our Cool Headphones offer an amazing audio experience, featuring high-quality sound and comfortable, stylish design. They are wireless, lightweight, and provide up to 24 hours of battery life on a single charge. With active noise cancellation and a built-in microphone, these headphones are perfect for music enthusiasts, travelers, and professionals.',
  reviewCount: 185,
  rating: 4.5,
  deliveryCharge: 5.95,
};

const purchases = [
  {
    id: 1,
    product: product,
    date: '2022-05-01',
  },
  {
    id: 2,
    product: product,
    date: '2022-04-27',
  },
  {
    id: 3,
    product: product,
    date: '2022-04-20',
  },
];

const RecentPurchases = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Purchases</Text>
      {purchases.map((purchase) => (
        <View style={styles.purchaseContainer} key={purchase.id}>
          <Text style={styles.purchaseDate}>{purchase.date}</Text>
          <Text style={styles.purchaseName}>{purchase.product.name}</Text>
          <Text style={styles.purchasePrice}>${purchase.product.price.toFixed(2)}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  purchaseContainer: {
    marginBottom: 10,
  },
  purchaseDate: {
    color: 'gray',
  },
  purchaseName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },
  purchasePrice: {
    fontWeight: 'bold',
    color: 'green',
  },
});

export default RecentPurchases;