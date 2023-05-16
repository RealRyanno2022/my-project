import React, { Component } from 'react';
import { View, Button } from 'react-native';
import BraintreeDropIn from 'react-native-braintree-payments-drop-in';
import { Header, SearchBar, Icon } from 'react-native-elements';
import ShopHeader from '../shop/ShopHeader';

const PaymentPage = ({ navigation }) => {
  handlePayment = async () => {
    try {
      // Fetch the client token from your server
      const tokenResponse = await fetch('http://your-server.com/client_token');
      const { clientToken } = await tokenResponse.json();

      // Show the Braintree Drop-in UI
      const nonce = await BraintreeDropIn.show({
        clientToken,
      });

      // Send the nonce to your server for processing the payment
      const paymentResponse = await fetch('http://your-server.com/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethodNonce: nonce,
          amount: '10.00', // Replace with the actual amount
        }),
      });

      if (!paymentResponse.ok) {
        throw new Error('Payment failed');
      }

      const { message } = await paymentResponse.json();
      console.log(message);

    } catch (error) {
      console.error(error);
    }
  }
    return (
      <View>
        <ShopHeader />
        <Button
          title="Pay"
          onPress={this.handlePayment}
        />
      </View>
    );
  }

export default PaymentPage;