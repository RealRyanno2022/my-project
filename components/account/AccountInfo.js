import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function AccountInfo({ navigation }) {
  const handleSignOut = () => {
    // Handle sign out logic here
    console.log('Signing out...');
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.nextText}>NEXT</Text>
        </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ShopFront')}
      >
        <Text style={styles.buttonText}>Back to Shopfront</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ProjectInfo')}
      >
        <Text style={styles.buttonText}>Project Info</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserInfo')}>
        <Text style={styles.buttonText}>User Info</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
  },
});