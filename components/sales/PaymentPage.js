import React from 'react';
import { View, Button } from 'react-native';
import BraintreeDropIn from 'react-native-braintree-payments-drop-in';
import ShopHeader from '../shop/ShopHeader';

const PaymentPage = ({ navigation }) => {
  handlePayment = async () => {
    try {
      // Fetch the client token from your server
      const tokenResponse = await fetch('https://candii-vapes-backend.herokuapp.com/client_token');
      const { clientToken } = await tokenResponse.json();

      // Show the Braintree Drop-in UI
      const nonce = await BraintreeDropIn.show({
        clientToken,
      });

      // Send the nonce to your server for processing the payment
      const paymentResponse = await fetch('https://candii-vapes-backend.herokuapp.com/execute_transaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethodNonce: nonce,
          amount: '1.00', // Replace with the actual amount
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
  };

  return (
    <View>
      <ShopHeader />
      <Button
        title="Pay"
        onPress={handlePayment}
      />
    </View>
  );
};

export default PaymentPage;