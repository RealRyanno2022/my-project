import { View, Text } from 'react-native'
import React from 'react'
import { Header, SearchBar, Icon } from 'react-native-elements';

const CustomerBasket = ({ navigation }) => {
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
      <Text>CustomerBasket</Text>
    </View>
  )
}

export default CustomerBasket