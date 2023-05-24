import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ShopHeader from '../shop/ShopHeader'
import ShopFooter from '../shop/ShopFooter';

export default function AccountInfo({ navigation }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add state to track whether user is signed in

  const handleSignOut = () => {
    // Handle sign out logic here
    navigation.navigate("ShopFront")
    setIsLoggedIn(false); // Set isLoggedIn to false when user signs out
  };

  const handleSignIn = () => {
    // Handle sign in logic here
    navigation.navigate("LoginScreen")
    // setIsLoggedIn(true); // Set isLoggedIn to true when user signs in
  };

  const handleSignUp = () => {
    // Handle sign up logic here
    navigation.navigate("SignUp")
  };

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    navigation.push('SearchProducts', { searchTerm });
  }

  return (
    <View style={styles.container}>
      <ShopHeader navigation={navigation} style={{ position: 'absolute '}} />
      <Text>Your username is USERNAME.</Text>
      <Text>Your email address is EMAIL.</Text>
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.goBack()}>
          <Text style={styles.cardText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProjectInfo')}>
          <Text style={styles.cardText}>Project Info</Text>
        </TouchableOpacity>
        {isLoggedIn ? (
          <>
            <TouchableOpacity style={styles.card} onPress={handleSignOut}>
              <Text style={styles.cardText}>Sign Out</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('DeleteAccount')}>
              <Text style={styles.cardText}>Delete Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ChangePassword')}>
              <Text style={styles.cardText}>Change Password</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity style={styles.card} onPress={handleSignIn}>
              <Text style={styles.cardText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={handleSignUp}>
              <Text style={styles.cardText}>Sign Up</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
      <ShopFooter navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    padding: 20,
  },
  card: {
    width: '45%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    color: '#1F1F1F',
    fontSize: 18,
    fontWeight: 'bold',
  },
});