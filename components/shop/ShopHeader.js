import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { Header, Icon, SearchBar} from 'react-native-elements';

const ShopHeader = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    navigation.push('SearchProducts', { searchTerm });
  }
  return (
    <View>
      <Header
        leftComponent={{
          icon: 'search',
          color: '#fff',
          onPress: () => navigation.navigate('Queries'),
        }}
        centerComponent={{
          text: 'Candii',
          style: { color: '#fff', fontSize: 20 },
        }}
        rightComponent={{
          icon: 'message',
          color: '#fff',
          onPress: () => navigation.navigate('Queries'),
        }}
      />
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Queries')}>
          <Icon name="message" color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSearch}>
          <Icon name="search" color="#fff" />
        </TouchableOpacity>
      </View>
      <SearchBar
        containerStyle={{ width: '100%' }}
        lightTheme
        searchIcon={{ size: 24 }}
        onChangeText={setSearchTerm}
        onClear={() => setSearchTerm('')} // clear the search term
        placeholder="Search..."
        value={searchTerm}
      />
    </View>
  );
}

export default ShopHeader