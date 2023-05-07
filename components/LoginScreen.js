import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    // Validate username and password
    if (username === 'myusername' && password === 'mypassword') {
      // Navigate to the home screen
      console.log('Login successful!');
    } else {
      console.log('Invalid username or password');
    }
  };


  const handleSignUpPress = () => {

  }

  const handleForgotPasswordPress = () => {

  }






  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate('MusicVideos')}>
        <Text style={styles.nextText}>NEXT</Text>
      </TouchableOpacity>
      <Text style={styles.logo}>Rhythmly</Text>
      <Text style={styles.smallText}>The music video app</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={setUsername}
          value={username}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLoginPress}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.loginText}>SIGN UP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.loginText}>FORGOT PASSWORD?</Text>
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