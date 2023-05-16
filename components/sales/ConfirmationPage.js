import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Header, SearchBar, Icon } from 'react-native-elements';

const ConfirmationPage = ({ route, navigation }) => {
  const { orderID, orderDate, totalAmount } = route.params;

  const handleContinueShopping = () => {
    // Navigate to desired screen
    // For example: navigation.navigate('Home');
    navigation.navigate('ShopFront')
  }
  const renderOrderedItem = ({ item }) => {
    return <BrandBox item={item} />;
  }

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
      <Text style={styles.title}>Order Confirmation</Text>
      <Text style={styles.details}>Your Order ID: {orderID}</Text>
      <Text style={styles.details}>Order Date: {orderDate}</Text>
      <Text style={styles.details}>Total Amount: {totalAmount}</Text>

      <Text style={styles.details}>Items Ordered:</Text>
      <FlatList
        data={orderedItems}
        renderItem={renderOrderedItem}
        keyExtractor={item => item.id}
      />

      <Text style={styles.confirmation}>
        Your order has been placed successfully! You will receive an email confirmation shortly.
      </Text>

      <Button 
        onPress={handleContinueShopping}
        title="Continue Shopping"
      />
    </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },
  details: {
    fontSize: 18,
    marginBottom: 10
  },
  confirmation: {
    fontSize: 16,
    marginBottom: 20,
    color: 'green'
  }
});



export default ConfirmationPage;