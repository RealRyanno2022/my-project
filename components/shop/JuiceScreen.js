import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Header, SearchBar, Icon } from 'react-native-elements';

const JuiceScreen = ({ navigation }) => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleBrandPress = (brandName) => {
    navigation.navigate('BrandVarieties', { brandName });
  };

  const handleBackPress = () => {
    navigation.navigate("ShopFront");
  }

  const handleSearch = () => {
    navigation.push('SearchProducts', { searchTerm });
  }

  return (
    <View>
      <Header
        leftComponent={{ 
          icon: 'person-outline', 
          color: '#fff',
          onPress: () => navigation.navigate('AccountInfo') 
        }}
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
      <ScrollView>
        <View style={styles.cardContainer}>
          {["Kinship", "BMG", "Hale", "Slushie", "Yeti", "IVG Salt", "Elfiq"].map(brand => (
            <TouchableOpacity
              key={brand}
              style={styles.card}
              onPress={() => handleBrandPress(brand)}
            >
              <Text style={styles.cardText}>{brand}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleBackPress()}
          >
            <Text style={styles.cardText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 30,
    backgroundColor: '#1F1F1F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#FB5B5A',
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

export default JuiceScreen;