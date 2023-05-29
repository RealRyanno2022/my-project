
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ShopHeader from '../shop/ShopHeader';
import ShopFooter from '../shop/ShopFooter';
import BrandBox from '../shop/BrandBox';
import BrandData from '../data/brandData';



type ChangeFlavoursProps = {
  route: {
    params: {
      brandName: string;
    };
  };
  navigation: any; // Update the type for the navigation prop
};

const ChangeFlavours: React.FC<ChangeFlavoursProps> =  ({ route, navigation }) => {
  const [selectedFlavours, setSelectedFlavours] = useState(['Cola0']);
  const flavours: string[] = ['Cola0', 'Cola1', 'Cola2', 'Cola3'];

  const { brandName } = route.params;
  const [varieties, setVarieties] = useState<brandData[]>([]);
  const [selectedVarieties, setSelectedVarieties] = useState<Record<string, number | undefined>>({});

  useEffect(() => {
    const dataAsArray = Object.entries(brandData).map(([id, product]) => ({ id, ...product }));
    const filteredData = dataAsArray.filter(product => product.brand === brandName);
    setVarieties(filteredData);
  }, [brandName]);

  const handlePress = (id: string) => {
    setSelectedVarieties((prev) => {
      if (!prev[id]) {
        return { ...prev, [id]: 1 };
      } else if (prev[id]! < 4) {
        return { ...prev, [id]: prev[id]! + 1 };
      } else {
        return prev;
      }
    });
  };
  
  const handleDeselect = (id: string) => {
    setSelectedVarieties((prev) => {
      if (prev[id] === 1) {
        const { [id]: _, ...rest } = prev;
        return rest;
      } else if (prev[id] && prev[id]! > 1) {
        return { ...prev, [id]: prev[id]! - 1 };
      } else {
        return prev;
      }
    });
  };

  return (
    <View style={styles.container}>
      <ShopHeader navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.title}>Change Flavours</Text>

        <FlatList
          data={flavours}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <BrandBox
              product={item}
              selected={selectedFlavours.includes(item)}
              quantity={selectedFlavours.filter((flavour) => flavour === item).length}
              onSelect={() => handlePress(item)}
              onDeselect={() => handleDeselect(item)}
            />
          )}
        />

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('ManageSubscription', { selectedFlavours })}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
      <ShopFooter navigation={navigation} />
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
  continueButton: {
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#fb5b5a',
    alignItems: 'center',
    marginBottom: 20,
  },
  continueText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ChangeFlavours;