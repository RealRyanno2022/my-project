import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const ProjectInfo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate('ShopFront')}>
          <Text style={styles.nextText}>NEXT</Text>
        </TouchableOpacity>
      <Text style={styles.title}>Project Info</Text>
      <Text style={styles.infoText}>Developed in React Native by Daniel Ryan, 2023</Text>
      <Text style={styles.subtitle}>Features:</Text>
      <Text style={styles.featuresText}>- Youtube API-based music video search app made with React Native </Text>
      <Text style={styles.featuresText}>- Full account creation system with PostgreSQL</Text>
      <Text style={styles.featuresText}>- Node and Express backend</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  nextBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  nextText: {
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
    textAlign: 'center',
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#fb5b5a',
    marginBottom: 20,
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  infoText: {

    marginVertical: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  featuresText: {
    fontSize: 16,
    marginVertical: 5,
    marginLeft: 10,
    textAlign: 'left',
    alignSelf: 'stretch',
    fontWeight: 'bold',
    color: '#fb5b5a',
  },
});

export default ProjectInfo;