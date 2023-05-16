import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Animated,
  Modal,
  ScrollView,
  Alert,
} from 'react-native';
import { Platform } from 'react-native';
import ShopHeader from '../shop/ShopHeader';
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
// import { LoginManager, AccessToken } from 'react-native-fbsdk';

// // configure GoogleSignin
// GoogleSignin.configure({
//   webClientId: 'your-client-id', // replace with your own client id
//   offlineAccess: true,
// });

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [isConfirmedPasswordInvalid, setIsConfirmedPasswordInvalid] = useState(false);
  let [isPasswordRequirementsVisible, setIsPasswordRequirementsVisible] = useState(false);

  // MIGHT NEED TO ADD PHONE NUMBER AND ADDRESS FIELDS


  const apiUrl =
  Platform.OS === 'android' ? 'http://10.0.2.2:5000' : 'http://localhost:5000';

  const scrollViewRef = useRef();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  const createUser = async () => {
    try {
      await axios.post(`${apiUrl}/signup`, {
        username,
        password,
        email,
      });
      Alert.alert('Success', 'Account created successfully!');
      navigation.navigate('VerifyEmail');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to create account');
    }
  };

  const handleSignupPress = () => {
    switch (true) {
      case username === '' || password === '' || email === '':
        Alert.alert('Error', 'Please fill in all your info');
        break;
      case username.length > 20 || password.length > 20:
        Alert.alert('Error', 'Error: Username/Password is too long');
        break;
      case confirmedPassword === '':
        Alert.alert('Error','You must confirm your password');
        break;
      case !emailRegex.test(email):
        setIsEmailInvalid(true);
        Alert.alert('Error', 'Invalid email: No @');
        break;
      case !passwordRegex.test(password):
        setIsPasswordInvalid(true);
        Alert.alert('Error', 'Invalid password');
        break;
      case confirmedPassword !== password:
        setIsConfirmedPasswordInvalid(true);
        Alert.alert('Error', 'Passwords do not match');
        break;
      default:
        createUser();
        break;
    }
  };



  // const signInWithGoogle = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     // here you can handle user's information and navigate to another screen
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // operation (f.e. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // play services not available or outdated
  //     } else {
  //       // some other error happened
  //     }
  //   }
  // };

  // const signInWithFacebook = async () => {
  //   try {
  //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

  //     if (result.isCancelled) {
  //       throw 'User cancelled the login process';
  //     }

  //     const data = await AccessToken.getCurrentAccessToken();

  //     if (!data) {
  //       throw 'Something went wrong obtaining access token';
  //     }

  //     // here you can handle user's information and navigate to another screen
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    if (isEmailInvalid) {
      setEmail('');
    }
    if (isPasswordInvalid) {
      setPassword('');
    }
    if (isConfirmedPasswordInvalid) {
      setConfirmedPassword('');
    }
  }, [isEmailInvalid, isPasswordInvalid, isConfirmedPasswordInvalid]);

  const handleInputFocus = (event) => {

    event.persist();

    if (event && event.nativeEvent && event.nativeEvent.target) {
      setTimeout(() => {
        scrollViewRef.current.scrollTo({
          y: event.nativeEvent.target.offsetTop,
          animated: true,
        });
      }, 100);
    }
  };

  const passwordRequirements = "Must contain at minimum 8 letters, 1 number, and 1 non-alphanumeric value (?, !, $)";

  const handlePasswordChange = (password) => {
    if (password.length > 0) {
      setIsPasswordRequirementsVisible(true);
    } else {
      setIsPasswordRequirementsVisible(false);
    }
    setPassword(password);
  };

  const inputStyle = (isInvalid) => [
    styles.input,
    isInvalid ? styles.inputInvalid : null,
  ];


  return (
    <ScrollView style={styles.scrollViewContainer} ref={scrollViewRef}>

      <ShopHeader navigation={navigation}  />
      <View style={styles.background}>
        <Text style={styles.title}>Sign up</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.info}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            onFocus={handleInputFocus}
          />
          <Text style={styles.info}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
            keyboardType="email-address"
            onFocus={handleInputFocus}
          />
          <Text style={styles.info}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(text) => {
              handlePasswordChange(text);
            }}
            secureTextEntry={true}
            onFocus={handleInputFocus}
          />
          <Text style={styles.info}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmedPassword}
            onChangeText={(text) => {
              setConfirmedPassword(text);
            }}
            secureTextEntry={true}
            onFocus={handleInputFocus}
          />
        </View>
        <TouchableOpacity
          style={styles.signupBtn}
          onPress={handleSignupPress}
        >
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={signInWithGoogle}>
          <Text style={styles.loginText}>LOGIN WITH GOOGLE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={signInWithFacebook}>
          <Text style={styles.loginText}>LOGIN WITH FACEBOOK</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: '#003f5c',
  },
  background: {
    flexGrow: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fb5b5a',
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },
  inputInvalid: {
    borderColor: 'red',
    borderWidth: 2,
  },
  info: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fb5b5a',
  },
  signupBtn: {
    width: '100%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  signupText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default SignUp;