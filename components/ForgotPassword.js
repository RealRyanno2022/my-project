import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [isCodeCorrect, setIsCodeCorrect] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const generateRandomCode = () => {
    const randomNumber = Math.floor(Math.random() * 1000000000000);
    setCode(randomNumber.toString());
  };

  const handleSubmit = () => {
    // Handle submit here
  };

  if (!isCodeCorrect) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.nextText}>NEXT</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Reset Password</Text>
        <Text style={styles.info}>Enter your email and enter the code to reset your password</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder="Enter your email"
          />
          <Text style={styles.label}>Code</Text>
          <TextInput
            style={styles.input}
            value={code}
            onChangeText={setCode}
            keyboardType="numeric"
            placeholder="Enter the code"
          />
          <TouchableOpacity style={styles.button} onPress={() => setIsCodeCorrect(code === '123456789012')}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.generateCodeButton} onPress={generateRandomCode}>
            <Text style={styles.generateCodeButtonText}>Generate code</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.infoText}>Enter your new password and confirm it</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>New Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholder="Enter your new password"
        />
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
          placeholder="Confirm your new password"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
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
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fb5b5a',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fb5b5a',
    marginBottom: 20,
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  codeInput: {
    height: 40,
    width: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    marginRight: 10,
  },
  codeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fb5b5a',
    marginRight: 10,
  },
  submitBtn: {
    backgroundColor: '#fb5b5a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ForgotPassword;