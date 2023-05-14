import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';

export default function AccountInfo({ navigation }) {
  const handleSignOut = () => {
    // Handle sign out logic here
    console.log('Signing out...');
  };
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    navigation.push('SearchProducts', { searchTerm });
  }

  return (
    <View style={styles.container}>
      <Header
        centerComponent={{ 
          text: 'Candii', 
          style: { color: '#fff', fontSize: 20 } 
        }}
        rightComponent={{ 
          icon: 'search',
          color: '#fff',
          onPress: handleSearch,
        }}
      />
      <SearchBar
        containerStyle={{ width: '100%'}}
        lightTheme
        searchIcon={{ size: 24 }}
        onChangeText={setSearchTerm}
        onClear={() => setSearchTerm('')} // clear the search term
        placeholder='Search...'
        value={searchTerm}
      />
      <Text>Your username is USERNAME.</Text>
      <Text>Your email address is EMAIL.</Text>
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.goBack()}>
          <Text style={styles.cardText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProjectInfo')}>
          <Text style={styles.cardText}>Project Info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={handleSignOut}>
          <Text style={styles.cardText}>Sign Out</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('DeleteAccount')}>
          <Text style={styles.cardText}>Delete Account</Text>
        </TouchableOpacity>
      </View>
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