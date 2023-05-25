import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, FlatList, StyleSheet, Appearance } from 'react-native';
import { Header, SearchBar, Icon } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ShopFooter from './ShopFooter';

const colorSchemes = {
  light: {
    background: '#F5F5F5',
    header: '#D3D3D3',
  },
  dark: {
    background: '#333',
    header: '#666',
  },
}

type SearchProductProps = {
  navigation: any;
  brandData: any[];
}

const SearchProducts: React.FC<SearchProductProps> = ({ brandData, navigation }) => {
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const search = (searchText: string) => {
    setSearchTerm(searchText);
    setHasSearched(true);



    let relevantBrands = [];
    if (searchText.toLowerCase().includes('disposables')) {
      relevantBrands = ['Elfbar', 'Elfabar', 'IVGBar', 'LostMary', 'Jewel Mini'];
    } else if (searchText.toLowerCase().includes('juice')) {
      relevantBrands = brandData.filter(item => item.type === 'juice').map(item => item.name);
    }

    const filteredResults = brandData.filter(item => 
      item.name.toLowerCase().includes(searchText.toLowerCase()) && relevantBrands.includes(item.name)
    );

    setResults(filteredResults);
  }

  const [searchTerm, setSearchTerm] = useState('');

  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

  const toggleColorScheme = () => {
    const newColorScheme = colorScheme === 'light' ? 'dark' : 'light';
    setColorScheme(newColorScheme);
    AsyncStorage.setItem('colorScheme', newColorScheme);
  }

  useEffect(() => {
    AsyncStorage.getItem('colorScheme').then(storedColorScheme => {
      if (storedColorScheme) {
        setColorScheme(storedColorScheme);
      }
    })
  }, [])

  return (
    <View>
      <View style={styles.container}>
    <Header
      leftComponent={{ 
        icon: colorScheme === 'light' ? 'moon' : 'sun', 
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
        onPress: search,
      }}
    />
    <SearchBar
      containerStyle={{ width: '100%'}}
      lightTheme
      searchIcon={{ size: 24 }}
      onChangeText={setSearchTerm}
      onClear={() => {setSearchTerm(''); setHasSearched(false);}} // clear the search term and reset hasSearched
      placeholder='Search...'
      value={searchTerm}
    />
      {results.length > 0 ? (
        <FlatList
          data={results}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={item => item.id.toString()}
        />
      ) : hasSearched && (
        <Text>Can't find that item!</Text>
      )}
    </View>
    <ShopFooter navigation={navigation}/>
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

export default SearchProducts;