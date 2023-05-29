import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BrandBox from './BrandBox';
import brandData from '../data/brandData';
import ShopHeader from './ShopHeader';
import ShopFooter from './ShopFooter';

type ProductType = {
  id: string;
  name: string;
  price?: number;
  brand?: string;
  image?: string;
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
  route: {
    params: {
      brandName: string;
    };
  };
  navigation: any; // Update the type for the navigation prop
};

const BrandVarieties: React.FC<BrandVarietiesProps> = ({ route, navigation }) => {
  const { brandName } = route.params;
  const [varieties, setVarieties] = useState<ProductType[]>([]);

  useEffect(() => {
    const dataAsArray = Object.entries(brandData).map(([id, product]) => ({ ...product, id }));
    const filteredData = dataAsArray.filter(product => product.brand === brandName);
    setVarieties(filteredData);
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
        data={varieties}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <BrandBox 
            product={item as ProductType} 
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
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default BrandVarieties;