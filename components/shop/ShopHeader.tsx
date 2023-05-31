import { View, Text, Platform } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity, Appearance } from 'react-native';
import { Header, Icon, SearchBar } from 'react-native-elements';
import { StackParamList } from '../../types/types';
import { StackActions } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';

type ShopHeaderProps = {
  navigation: NavigationProp<StackParamList>;
}

const ShopHeader: React.FC<ShopHeaderProps> = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    navigation.dispatch(StackActions.push('SearchProducts', { searchTerm }));
  }

  const deviceTheme = Appearance.getColorScheme(); // 'light' or 'dark'
  const [isDarkMode, setIsDarkMode] = useState(deviceTheme === 'dark');

  const handleColorMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  const handleSearchTextChange = (text: string) => {
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
        platform="default"  // Here is where we add platform
        containerStyle={{ width: '100%' }}
        lightTheme
        searchIcon={{ name: 'search', size: 24 }}
        onChangeText={handleSearchTextChange} 
        onClear={() => setSearchTerm('')}
        placeholder="Search..."
        value={searchTerm}
      />
    </View>
  );
}

export default ShopHeader;