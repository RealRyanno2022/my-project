import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, SearchBar, Icon } from 'react-native-elements';

const NotFoundScreen = () => {
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
    <View style={styles.container}>
      <Text style={styles.title}>404 Not Found</Text>
      <Text style={styles.subtitle}>The page you are looking for does not exist.</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
  },
});

export default NotFoundScreen;