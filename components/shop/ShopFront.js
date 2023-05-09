import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const ShopFront = ({ navigation }) => {
  const handleBrandPress = (brandName) => {
    navigation.navigate('BrandScreen', { brandName });
  };

  return (
    <View>
      <Text style={styles.logo}>Candii</Text>
      <Text style={styles.smallText}>The Vape app</Text>
      <View style={styles.inputView}></View>
      <View style={styles.inputView}>
        <TouchableOpacity
          id="lost_mary"
          style={styles.loginBtn}
          onPress={() => handleBrandPress('Lost Mary')}
        >
          <Text style={styles.loginText}>Lost Mary</Text>
        </TouchableOpacity>
        <TouchableOpacity
          id="elf_bar"
          style={styles.loginBtn}
          onPress={() => handleBrandPress('Elfbar')}
        >
          <Text style={styles.loginText}>Elfbar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  smallText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#fb5b5a',
    marginBottom: 40,
  },
});

export default ShopFront;