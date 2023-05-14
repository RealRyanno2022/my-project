import React, { useState } from 'react';
import { View, TextInput, Text, FlatList } from 'react-native';
import { Header } from 'react-native-elements'

const SearchProducts = ({ brandData, navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const search = (searchText) => {
    setSearchTerm(searchText);

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

  return (
    <View>
      <Header
        leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          onPress: () => navigation.navigate("ShopFront"),
        }}
        centerComponent={{
          children: (
            <TextInput
              value={searchTerm}
              onChangeText={search}
              placeholder="Search Products..."
            />
          ),
        }}
      />

      <TextInput
        value={searchTerm}
        onChangeText={search}
        placeholder="Search Products..."
      />

      {results.length > 0 ? (
        <FlatList
          data={results}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <Text>Can't find that item!</Text>
      )}
    </View>
  );
};

export default SearchProducts;