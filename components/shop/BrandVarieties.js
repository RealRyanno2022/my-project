import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BrandBox from './BrandBox';

// ... brandData and product schema ...

const brandData = {
  Elfbar: [
    {
      id: '1',
      name: 'Elfbar RF350',
      image: 'https://dummyimage.com/300x200/000/fff.png&text=Elfbar+RF350',
      price: 24.99,
    },
    {
      id: '2',
      name: 'Elfbar RF550',
      image: 'https://dummyimage.com/300x200/000/fff.png&text=Elfbar+RF550',
      price: 29.99,
    },
    {
      id: '3',
      name: 'Elfbar RF800',
      image: 'https://dummyimage.com/300x200/000/fff.png&text=Elfbar+RF800',
      price: 34.99,
    },
  ],
  LostMary: [
    {
      id: '4',
      name: 'LostMary AIR Plus',
      image: 'https://dummyimage.com/300x200/000/fff.png&text=LostMary+AIR+Plus',
      price: 19.99,
    },
    {
      id: '5',
      name: 'LostMary DISC Mini',
      image: 'https://dummyimage.com/300x200/000/fff.png&text=LostMary+DISC+Mini',
      price: 24.99,
    },
    {
      id: '6',
      name: 'LostMary GEM Pen',
      image: 'https://dummyimage.com/300x200/000/fff.png&text=LostMary+GEM+Pen',
      price: 29.99,
    },
  ],
};

const BrandVarieties = ({ route, navigation }) => {
  const { brand } = route.params;
  const [varieties, setVarieties] = useState(brandData[brand]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{brand} Varieties</Text>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={varieties}
        renderItem={({ item }) => (
          <BrandBox product={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#fb5b5a',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default BrandVarieties;