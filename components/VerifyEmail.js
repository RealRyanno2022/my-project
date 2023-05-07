import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function VerifyEmail({ navigation }) {
  const [code, setCode] = useState('');
  const [generatedCode, setGeneratedCode] = useState(null);

  const handleSendCode = () => {
    const randomCode = Math.floor(Math.random() * 900000000000) + 100000000000;
    setGeneratedCode(randomCode);
    console.log(`Generated code: ${randomCode}`);
  };

  const handleVerifyCode = () => {
    if (code === generatedCode.toString()) {
      console.log('Email verified successfully!');
    } else {
      console.log('Invalid code');
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

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  info: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#fb5b5a',
    textAlign: 'center',
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 30,
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
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
  },
});