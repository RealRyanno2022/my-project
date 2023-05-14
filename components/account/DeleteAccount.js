import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';

const DeleteAccountPage = ({ navigation }) => {
  
  const handleDelete = () => {
    // Call the API to delete the account here
    // After deleting, navigate to login or welcome screen
    // navigation.navigate('Login')
    console.log('Account deleted');
    navigation.navigate('ShopFront');
  };

  const handleConfirmDelete = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account? This action is irreversible.",
      [
        {
          text: "No",
          onPress: () => console.log("Deletion cancelled"),
          style: "cancel"
        },
        { 
          text: "Yes", 
          onPress: handleDelete 
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delete Account</Text>
      <Text style={styles.info}>
        Are you sure you want to delete your account? This action is irreversible.
      </Text>
      <Text style={styles.info}>
        This will delete your purchase history, record of your account and basket. 
      </Text>
      <View style={styles.space} />
      <TouchableOpacity style={styles.deleteButton} onPress={handleConfirmDelete}>
        <Text style={styles.buttonText}>Delete Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.goBack()}>
          <Text style={styles.cardText}>Back</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  card: {
    width: '45%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    color: '#1F1F1F',
    fontSize: 18,
    fontWeight: 'bold',
  },
  style: {
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  deleteButton: {
    width: "80%",
    backgroundColor: '#fb5b5a',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default DeleteAccountPage;
