import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import OrderConfirmation from './OrderConfirmation';

const ConfirmationPage = ({ order }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Order Confirmation</Text>
        <OrderConfirmation order={order} id={123456} />
        <Text style={styles.deliveryText}>Expect your order in 3-4 working days</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  deliveryText: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default ConfirmationPage;