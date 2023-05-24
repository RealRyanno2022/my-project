import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import axios from 'axios'; // import axios
import ShopHeader from '../shop/ShopHeader';
import ShopFooter from '../shop/ShopFooter';

type VerifyEmailProps = {
  navigation: any;
}

const VerifyEmail: React.FC<VerifyEmailProps> = ({ navigation }) => {
  const [code, setCode] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [email, setEmail] = useState('');


  const inputStyle = (isInvalid) => [
    styles.input,
    isInvalid ? styles.inputInvalid : null,
  ];

  

  const generateCode = () => {
    const code = Math.floor(Math.random() * 1000000000000);
    return code.toString().padStart(12, '0');
  };

  const handleSendCode = async () => {
    if (email.length === 0 || email.length > 100 || !(email.includes("@"))) {
      setIsEmailInvalid(true);
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    const newCode = generateCode();
    setGeneratedCode(newCode);

    try {
      await axios.post('https://candii-vapes-backend.herokuapp.com/send_email', {
        email,
        code: newCode
      });

      Alert.alert('Success', 'Code sent successfully to your email address');
    } catch (error) {
      console.error('Error sending code:', error);
      Alert.alert('Error', 'Failed to send code');
    }
  };

  const handleVerifyCode = async () => {
    if (code === generatedCode) {
      // Email verification successful
      Alert.alert('Success', 'Email verified successfully!');
      
      try {
        // Create a new user with the provided email and purchasing data
        const response = await axios.post('https://candii-vapes-backend.herokuapp.com/create_user', {
          email,
          purchasingData: [] // Add the necessary purchasing data here
        });
  
        const { id } = response.data; // Get the newly created user's ID
        
        // Navigate to the next screen, passing the user ID
        navigation.navigate('ProductPage', { userId: id });
      } catch (error) {
        console.error('Error creating user:', error);
        Alert.alert('Error', 'Failed to create user');
      }
    } else {
      // Invalid verification code
      Alert.alert('Error', 'Invalid code');
    }
  };

  const handleInputFocus = () => {
    setIsEmailInvalid(false);
  };

  return (
    <View>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ShopHeader navigation={navigation}  />
    
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
     <ShopFooter navigation={navigation}/>
     </View>
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

export default VerifyEmail;