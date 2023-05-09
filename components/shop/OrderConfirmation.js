import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function OrderConfirmation({ order }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thank you for your order!</Text>
      <View style={styles.orderSummary}>
        <Text style={styles.summaryTitle}>Order Summary:</Text>
        <Text style={styles.summaryText}>Product: {order.product}</Text>
        <Text style={styles.summaryText}>Price: ${order.price.toFixed(2)}</Text>
        <Text style={styles.summaryText}>Shipping Address: {order.address}</Text>
      </View>
      <Text style={styles.deliveryText}>Expect your order in 3-4 working days.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  orderSummary: {
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 20,
    marginBottom: 30,
    alignSelf: 'stretch',
  },
  summaryTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 18,
    marginBottom: 5,
  },
  deliveryText: {
    fontSize: 18,
    color: '#666',
    fontStyle: 'italic',
  },
});