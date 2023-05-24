
import React, { useState } from 'react';

import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import ShopHeader from '../shop/ShopHeader';

const ChangeFlavours = ({ navigation }) => {
    const [selectedFlavours, setSelectedFlavours] = useState({
      'Cola0': 4,
    });
    const flavours = ['Cola0', 'Cola1', 'Cola2', 'Cola3'];

    const { brandName } = route.params;
  const [varieties, setVarieties] = useState([]);
  const [selectedVarieties, setSelectedVarieties] = useState({});

  useEffect(() => {
    const dataAsArray = Object.entries(brandData).map(([id, product]) => ({ id, ...product }));
    const filteredData = dataAsArray.filter(product => product.brand === brandName);
    setVarieties(filteredData);
  }, [brandName]);

  const handlePress = (id) => {
    setSelectedVarieties((prev) => {
      if (!prev[id]) {
        return { ...prev, [id]: 1 };
      } else if (prev[id] < 4) {
        return { ...prev, [id]: prev[id] + 1 };
      } else {
        return prev;
      }
    });
  };

  const handleDeselect = (id) => {
    setSelectedVarieties((prev) => {
      if (prev[id] === 1) {
        const { [id]: _, ...rest } = prev;
        return rest;
      } else {
        return { ...prev, [id]: prev[id] - 1 };
      }
    });
  };

  return (

    <View>
      <ShopHeader navigation={navigation} />
    <View style={styles.container}>
      <Text style={styles.title}>Change Flavours</Text>

      <FlatList
        data={flavours}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <BrandBox
            product={item}
            selected={selectedFlavours[item] > 0}
            quantity={selectedFlavours[item] || 0}
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