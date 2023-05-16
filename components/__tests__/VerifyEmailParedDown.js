import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import axios from 'axios'; // import axios

export default function VerifyEmail({ navigation }) {
  const [code, setCode] = useState('');
  const [generatedCode, setGeneratedCode] = useState(null);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [email, setEmail] = useState('');


  const inputStyle = (isInvalid) => [
    styles.input,
    isInvalid ? styles.inputInvalid : null,
  ];

  const handleSendCode = async () => {
    const generatedCode = generateCode();
    setGeneratedCode(generatedCode);

    try {
      const response = await axios.post('https://candii-vapes.herokuapp.com/send_email', {
        name: 'Candii',
        email: email,
        message: `Your verification code is: ${generatedCode}`
      });

      if (response.data === 'Email sent successfully') {
          Alert.alert('Success', 'Code sent successfully!');
      } else {
          throw new Error('Failed to send email');
      }
    } catch (error) {
        console.error('Error sending code:', error);
        Alert.alert('Error', 'Code sending failed');
    }
};

  const generateCode = () => {
    const code = Math.floor(Math.random() * 1000000000000);
    return code.toString().padStart(12, '0');
  };

  const handleVerifyCode = () => {
    if (code === generatedCode) {
      Alert.alert('Success', 'Email verified successfully!');
      navigation.navigate('ProductPage');
    } else {
      Alert.alert('Error', 'Invalid code');
    }
  };

  const handleInputFocus = () => {
    setIsEmailInvalid(false);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Text style={styles.info}>
          A 12-digit code has been sent to your email address. Type it in to verify
          your email here:
        </Text>
        <View style={styles.inputView}>
        <TextInput
          style={inputStyle(isEmailInvalid)}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          onFocus={handleInputFocus}
        />
          <TextInput
            style={styles.inputText}
            placeholder="12-digit code"
            placeholderTextColor="#003f5c"
            keyboardType="numeric"
            onChangeText={setCode}
            value={code}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleVerifyCode}>
          <Text style={styles.buttonText}>VERIFY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSendCode}>
          <Text style={styles.buttonText}>SEND CODE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigation.goBack()}>
          <Text style={styles.buttonText}>Go back</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  inputInvalid: {
    borderColor: 'red',
  },
  nextBtn: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  nextText: {
    color: '#fb5b5a',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fb5b5a',
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
  button: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
  },
});