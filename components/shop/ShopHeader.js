import { View, Text } from 'react-native'
import React from 'react'

import { Header, Icon, SearchBar} from 'react-native-elements';

const ShopHeader = () => {
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
      rightComponent={(
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Queries')}>
            <Icon name="message" color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSearch}>
            <Icon name="search" color="#fff" />
          </TouchableOpacity>
        </View>
      )}
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
    </View>
  )
}

export default ShopHeader