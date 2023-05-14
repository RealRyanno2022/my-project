import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BrandBox from './BrandBox';
import brandData from './brandData';

const BrandVarieties = ({ route, navigation }) => {
  const { brandName } = route.params;
  const [varieties, setVarieties] = useState([]);

  useEffect(() => {
    const filteredData = brandData.filter(product => product.brand === brandName);
    setVarieties(filteredData);
  }, [brandName]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{brandName} Varieties</Text>
      <View style={styles.listContainer}>
        {varieties.map((product) => (
          <BrandBox key={product.id} product={product} navigation={navigation} />
        ))}
      </View>
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