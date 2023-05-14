import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Header, SearchBar, Icon } from 'react-native-elements';

const ShopFront = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleBrandPress = (productType) => {
    if (productType === 'Disposables') {
      navigation.navigate('VapeScreen');
    }
    if (productType === 'Juice') {
      navigation.navigate('JuiceScreen');
    } 
  };

  const handleSearch = () => {
    navigation.push('SearchProducts', { searchTerm });
  }



  return (
    <View style={styles.container}>
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
        <View style={styles.space} />
        <TouchableOpacity
          id="disposables"
          style={styles.card}
          onPress={() => handleBrandPress('Disposables')}
        >
          <Image 
            source={require('my-project/components/pictures/VapePics/elfbar-fotor-bg-remover-20230514115238.png')} 
            style={styles.imageStyle}
          />
          <Text style={styles.cardText}>Disposables</Text>
        </TouchableOpacity>
        <View style={styles.space} />
        <TouchableOpacity
          id="juice"
          style={styles.card}
          onPress={() => handleBrandPress('Juice')}
        >
          <Image 
          
            source={require('my-project/components/pictures/VapePics/juice-fotor-bg-remover-20230514115248.png')} 
            style={styles.imageStyle}
          />
          <Text style={styles.cardText}>Juice</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 30,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#1F1F1F',
    fontFamily: 'Helvetica',
  },
  space: {
    marginTop: 50,
  },
  smallText: {
    fontSize: 20,
    color: '#1F1F1F',
    marginTop: 10,
    fontFamily: 'Helvetica',
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '80%',
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
    marginTop: 10,
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
  imageStyle: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});

export default ShopFront;