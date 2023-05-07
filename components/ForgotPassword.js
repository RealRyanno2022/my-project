import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [isCodeCorrect, setIsCodeCorrect] = useState(false);

  const generateRandomCode = () => {
    const randomNumber = Math.floor(Math.random() * 1000000000000);
    setCode(randomNumber.toString());
  };

  const handleSubmit = () => {
    navigation.navigate('NewPassword');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.smallText}>Enter your email and enter the code to reset your password</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="Enter your email"
          placeholderTextColor="#003f5c"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          value={code}
          onChangeText={setCode}
          keyboardType="numeric"
          placeholder="Enter the code"
          placeholderTextColor="#003f5c"
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={() => setIsCodeCorrect(code === '123456789012')}>
        <Text style={styles.loginText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={generateRandomCode}>
        <Text style={styles.loginText}>Generate code</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={() => handleSubmit()}>
        <Text style={styles.loginText}>Boom</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    fontSize: 18,
    color: '#fb5b5a',
    marginBottom: 40,
    textAlign: 'center',
  },
  title: {
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
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});

export default ForgotPassword;