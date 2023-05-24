import React from 'react';
import { View, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ShopFooter = ({ navigation }) => {
  const route = useRoute();

  const componentNames = ['BrandVarieties','JuiceProductPage','SearchProducts','ContinueShopping','ProductPage','ShopFront', 'VapeScreen', 'JuiceScreen'];

  // Check if the current route is from the "shop" folder
  const isShopComponent = componentNames.includes(route?.name);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.footerContent}>
        <TouchableOpacity onPress={() => navigation.navigate('ShopFront')} disabled={isShopComponent}>
          <Image
            source={require('../pictures/haus-removebg-preview.png')}
            style={[styles.icon, isShopComponent && styles.disabledIcon]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SomeOtherScreen')}>
          <Image source={require('../pictures/person-removebg-preview.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AnotherScreen')}>
          <Image source={require('../pictures/basket-removebg-preview.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('YetAnotherScreen')}>
          <Image source={require('../pictures/vape-removebg-preview.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(205, 205, 204, 0.8)',
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  icon: {
    marginHorizontal: 10,
    width: 25,
    height: 25,
  },
  disabledIcon: {
    tintColor: 'blue',
  },
});

export default ShopFooter;