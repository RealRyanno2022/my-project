import { View, Text } from 'react-native'
import React from 'react'
import ShopHeader from '../shop/ShopHeader';

const CustomerBasket = ({ navigation }) => {
  return (
    <View>
      <ShopHeader />
      <Text>CustomerBasket</Text>
    </View>
  )
}

export default CustomerBasket