import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity, Appearance } from 'react-native';
import { Header, Icon, SearchBar} from 'react-native-elements';

type ShopHeaderProps = {
  navigation: any;
}



const ShopHeader: React.FC<ShopHeaderProps> = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    navigation.push('SearchProducts', { searchTerm });
  }

  const deviceTheme = Appearance.getColorScheme(); // 'light' or 'dark'
  const [isDarkMode, setIsDarkMode] = useState(deviceTheme === 'dark');

  const handleColorMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  const handleSearchTextChange = (text) => {
    setSearchTerm(text);
  }

  return (
    <View>
      <Header
        leftComponent={{
          icon: 'moon',
          color: '#fff',
          onPress: () => handleColorMode(),
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
      <SearchBar
        containerStyle={{ width: '100%' }}
        lightTheme
        searchIcon={{ name: 'search', size: 24 }}
        onChangeText={handleSearchTextChange} // Updated the prop to use the callback function
        onClear={() => setSearchTerm('')} // clear the search term
        placeholder="Search..."
        value={searchTerm}
      />
    </View>
  );
}

export default ShopHeader;