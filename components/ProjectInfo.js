import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const ProjectInfo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate('SearchVideos')}>
          <Text style={styles.nextText}>NEXT</Text>
        </TouchableOpacity>
      <Text style={styles.title}>Project Info</Text>
      <Text style={styles.infoText}>Developed in React Native by Daniel Ryan, 2023</Text>
      <Text style={styles.subtitle}>Features:</Text>
      <Text style={styles.featuresText}>- Youtube API-based search for music videos by your favorite artist</Text>
      <Text style={styles.featuresText}>- Authentication</Text>
      <Text style={styles.featuresText}>- Embedded videos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333333',
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  infoText: {
    fontSize: 18,
    marginVertical: 5,
    color: '#333333',
    textAlign: 'center',
  },
  featuresText: {
    fontSize: 16,
    marginVertical: 5,
    marginLeft: 10,
    color: '#333333',
    textAlign: 'left',
    alignSelf: 'stretch',
  },
});

export default ProjectInfo;