import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Footer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.footerContent}>
        <Icon name="home" size={25} color="black" style={styles.icon} />
        <Icon name="user" size={25} color="black" style={styles.icon} />
        <Icon name="shopping-basket" size={25} color="black" style={styles.icon} />
        <Icon name="smoking" size={25} color="black" style={styles.icon} />
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
    backgroundColor: 'white',
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default Footer;