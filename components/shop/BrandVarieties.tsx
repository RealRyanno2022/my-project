import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BrandBox from './BrandBox';
import brandData from '../data/BrandData';
import ShopHeader from './ShopHeader';
import ShopFooter from './ShopFooter';
import { StackParamList } from '../../types/types';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type ProductType = {
  id: string;
  name: string;
  price: number;
  brand: string;
  image: string;
};

type BrandBoxProps = {
  product: ProductType;
  navigation: any;
  selected: boolean;
  quantity: number;
  onSelect: () => void;
  onDeselect: () => void;
};

type BrandVarietiesProps = {
  route: RouteProp<StackParamList, 'BrandVarieties'>;
  navigation: StackNavigationProp<StackParamList, 'BrandVarieties'>;
};

const BrandVarieties: React.FC<BrandVarietiesProps> = ({ route, navigation }) => {
  const { brandName } = route.params;

  if (!brandName) {
    return <View><Text>No Brand Name Provided</Text></View>;
  }

  const [varieties, setVarieties] = useState<ProductType[]>([]);

  useEffect(() => {
    const dataAsArray = Object.entries(brandData).map(([id, product]) => ({ ...product, id }));
    const filteredData = dataAsArray.filter(product => product.brand === brandName);
    setVarieties(filteredData as ProductType[]);
  }, [brandName]);

  const handleSelect = () => {
    console.log('Selected product');
  };

  const handleDeselect = () => {
    console.log('Deselected product');
  };

  return (
    <View style={styles.container}>
      <ShopHeader navigation={navigation} />
      <Text style={styles.title}>{brandName} Varieties</Text>
      <FlatList 
        data={varieties.map(item => ({ ...item, price: item.price || 0 }))}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <BrandBox 
            product={item} 
            navigation={navigation} 
            selected={false}
            quantity={0}
            onSelect={handleSelect}
            onDeselect={handleDeselect}
          />
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
});

export default BrandVarieties;