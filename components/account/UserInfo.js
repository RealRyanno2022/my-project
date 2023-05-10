import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function AccountInfo({ navigation }) {
  const handleSignOut = () => {
    // Handle sign out logic here
    console.log('Signing out...');
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>User Info</Text>
        <Text style={styles.infoText}>Your username is USERNAME.</Text>
        <Text style={styles.infoText}>Your email address is EMAIL.</Text>
        <Text style={styles.infoText}>You have used search SEARCH_COUNT times! / You haven't searched yet. Get searching!</Text>
        <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate('AccountInfo')}>
            <Text style={styles.nextText}>Go Back</Text>
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
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
    textAlign: 'center',
  },
  infoText: {

    marginVertical: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fb5b5a',
    marginBottom: 40,
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
  button: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
  },
});