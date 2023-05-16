import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import ShopHeader from '../shop/ShopHeader';

const NewPassword = ({ navigation }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = () => {
      // Insert your own logic here
      if (password === confirmPassword) {
          console.log("Passwords match!");
          // Navigate or do something else
      } else {
          console.log("Passwords do not match!");
          // Maybe show an error message
      }
    };


    return (
      <View>
      <ShopHeader />
        <View style={styles.container}>
          <Text style={styles.logo}>Reset Password</Text>
          <Text style={styles.smallText}>Enter your new password and confirm it</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              placeholder="Enter your new password"
              placeholderTextColor="#003f5c"
            />
            <TextInput
              style={styles.inputText}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={true}
              placeholder="Confirm your new password"
              placeholderTextColor="#003f5c"
            />
            <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
              <Text style={styles.loginText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    nextBtn: {
      width: '80%',
      backgroundColor: '#fb5b5a',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      marginBottom: 10,
    },
    nextText: {
      color: 'white',
    },
    smallText: {
      fontWeight: 'bold',
      fontSize: 25,
      color: '#fb5b5a',
      marginBottom: 40,
    },
    logo: {
      fontWeight: 'bold',
      fontSize: 50,
      color: '#fb5b5a',
      marginBottom: 40,
    },
    inputView: {
      width: '80%',
      backgroundColor: '#465881',
      borderRadius: 25,
      height: 50,
      marginBottom: 20,
      justifyContent: 'center',
      padding: 20,
    },
    inputText: {
      height: 50,
      color: 'white',
    },
    loginBtn: {
      width: '80%',
      backgroundColor: '#fb5b5a',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      marginBottom: 10,
    },
    loginText: {
      color: 'white',
    },
  });
  
  export default NewPassword;
