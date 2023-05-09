import { View, Text } from 'react-native';
import React from 'react';

const BrandScreen = ({ route }) => {
  const { brandName } = route.params;

  return (
    <View>
      <Text>{brandName}</Text>
    </View>
  );
};

export default BrandScreen;