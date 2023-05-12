import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import axios from 'axios'; // import axios

export default function VerifyEmail({ navigation }) {
  const [code, setCode] = useState('');
  const [generatedCode, setGeneratedCode] = useState(null);
  const [email, setEmail] = useState('');

  const handleSendCode = async () => {
    const generatedCode = generateCode();
    setGeneratedCode(generatedCode);

    try {
        const response = await axios.post('http://localhost:5000/send-email', {
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

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate('AccountInfo')}>
        <Text style={styles.nextText}>NEXT</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.info}>
          A 12-digit code has been sent to your email address. Type it in to verify
          your email here:
        </Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Your Email"
            placeholderTextColor="#003f5c"
            onChangeText={setEmail}
            value={email}
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
      </View>
    </ScrollView>
  );
}