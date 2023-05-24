import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CancelConfirm = ({ navigation }) => {
  const [isSubscribed, setIsSubscribed] = useState(true);

  // Simulate cancellation of subscription
  useEffect(() => {
    setIsSubscribed(false);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isSubscribed ? 'Cancelling your subscription...' : 'Your subscription has been cancelled.'}
      </Text>

      {!isSubscribed && (
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CancelConfirm;