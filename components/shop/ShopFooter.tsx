import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

type ShopFooterProps = {
  navigation: any;
}


const ShopFooter: React.FC<ShopFooterProps> = ({ navigation }) => {
  const [isSubscribed, setIsSubscibed] = useState(true);
  const route = useRoute();

  const componentNames = ['BrandVarieties','JuiceProductPage','SearchProducts','ContinueShopping','ProductPage','ShopFront', 'VapeScreen', 'JuiceScreen'];

  const signUpComponentNames = ["SubSignUp", "YourFlavours","ManageSubscription","SubVapeScreen","ChooseFlavours"];

  const isShopComponent = componentNames.includes(route?.name);
  const isAccountInfoComponent = route?.name === 'AccountInfo';

  const isSubSignUpComponent = signUpComponentNames.includes(route?.name);

  const handleVapePress = () => {
    if(isSubscribed) {
      navigation.navigate("ManageSubscription", { isSubscribed, setIsSubscibed})
    } else {
      navigation.navigate("SubSignUp", { isSubscribed, setIsSubscibed })
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.footerContent}>
        <TouchableOpacity onPress={() => navigation.navigate('ShopFront')} disabled={isShopComponent}>
          <Image
            source={require('../pictures/haus-removebg-preview.png')}
            style={[styles.icon, isShopComponent && styles.disabledIcon]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AccountInfo')} disabled={isAccountInfoComponent}>
          <Image 
            source={require('../pictures/person-removebg-preview.png')} 
            style={[styles.icon, isAccountInfoComponent && styles.disabledIcon]} 
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CustomerBasket')}>
          <Image source={require('../pictures/basket-removebg-preview.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleVapePress} disabled={isSubSignUpComponent}>
          <Image 
            source={require('../pictures/vape-removebg-preview.png')} 
            style={[styles.icon, isSubSignUpComponent && styles.disabledIcon]} 
          />
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
    tintColor: 'black',
  },
  disabledIcon: {
    tintColor: 'blue',
  },
});

export default ShopFooter;