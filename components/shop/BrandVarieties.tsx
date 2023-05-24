import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BrandBox from './BrandBox';
import brandData from '../data/brandData';
import ShopHeader from './ShopHeader';
import ShopFooter from './ShopFooter';

type BrandVarietiesProps = {
  route: {
    params: {
      brandName: string;
    };
  };
  navigation: any; // Update the type for the navigation prop
};

const BrandVarieties: React.FC<BrandVarietiesProps> = ({ route, navigation }) => {
  const { brandName } = route.params;
  const [varieties, setVarieties] = useState([]);

  useEffect(() => {
    console.log(route.params);
    const dataAsArray = Object.entries(brandData).map(([id, product]) => ({ id, ...product }));
    const filteredData = dataAsArray.filter(product => product.brand === brandName);
    console.log(filteredData);
    setVarieties(filteredData);
  }, [brandName]);

  return (


    <View style={styles.container}>
      <ShopHeader navigation={navigation} />
      <Text style={styles.title}>{brandName} Varieties</Text>
      <FlatList 
        data={varieties}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <BrandBox product={item} navigation={navigation} />
        )}
      />
       <ShopFooter navigation={navigation}/>
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