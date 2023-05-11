import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ShopFront = ({ navigation }) => {
  const handleBrandPress = (brandName) => {
    navigation.navigate('BrandVarieties', { brandName });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Candii</Text>
      <Text style={styles.smallText}>The Vape app</Text>
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
          <TouchableOpacity
          id="elf_bar"
          style={styles.loginBtn}
          onPress={() => handleBrandPress('ElfaBar')}
        >
          <Text style={styles.loginText}>Elfabar</Text>
          </TouchableOpacity>
        <TouchableOpacity
          id="elf_bar"
          style={styles.loginBtn}
          onPress={() => handleBrandPress('Mini Vape')}
        >
          <Text style={styles.loginText}>Vape Mini</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});

export default ShopFront;