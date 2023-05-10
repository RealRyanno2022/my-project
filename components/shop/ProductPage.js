import React, { useState } from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import Slider from '@react-native-community/slider';

const ProductPage = () => {
    // dummy product
    
    const product = {
        name: 'Cool Headphones',
        images: [
          // 'https://example.com/images/cool-headphones-1.jpg',
          // 'https://example.com/images/cool-headphones-2.jpg',
          // 'https://example.com/images/cool-headphones-3.jpg',
          require('../pictures/react.png'),
        ],
        price: 150.99,
        description:
          'Our Cool Headphones offer an amazing audio experience, featuring high-quality sound and comfortable, stylish design. They are wireless, lightweight, and provide up to 24 hours of battery life on a single charge. With active noise cancellation and a built-in microphone, these headphones are perfect for music enthusiasts, travelers, and professionals.',
        reviewCount: 185,
        rating: 4.5,
        deliveryCharge: 5.95,
      };

  const [quantity, setQuantity] = useState(1);
  const [sliderValue, setSliderValue] = useState(0);
  const totalPrice = product.price * quantity + product.deliveryCharge;

  const renderStarRating = (rating) => {
    // const fullStar = require('./path/to/full_star_image.png');
    // const halfStar = require('./path/to/half_star_image.png');
    // const emptyStar = require('./path/to/empty_star_image.png');

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div>Wop</div>
      // <View style={styles.starRating}>
      //   {Array(fullStars)
      //     .fill(null)
      //     .map((_, index) => (
      //       <Image key={`full_star_${index}`} source={fullStar} />
      //     ))}
      //   {hasHalfStar && <Image source={halfStar} />}
      //   {Array(emptyStars)
      //     .fill(null)
      //     .map((_, index) => (
      //       <Image key={`empty_star_${index}`} source={emptyStar} />
      //     ))}
      // </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: product.images[sliderValue] }}
      />
      <Slider
        style={styles.slider}
        value={sliderValue}
        onValueChange={setSliderValue}
        minimumValue={0}
        maximumValue={product.images.length - 1}
        step={1}
      />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Text>Quantity:</Text>
      <TextInput
        keyboardType="number-pad"
        value={quantity.toString()}
        onChangeText={(value) => setQuantity(Math.max(1, parseInt(value)))}
        style={styles.quantityInput}
      />
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.reviewCounter}>
        {product.reviewCount} Reviews - {renderStarRating(product.rating)}
      </Text>
      <Text>Delivery Charge: ${product.deliveryCharge.toFixed(2)}</Text>
      <Text style={styles.totalPrice}>Total Price: ${totalPrice.toFixed(2)}</Text>
      <Button>Add to Cart</Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    image: {
      width: '100%',
      height: 300,
      resizeMode: 'contain',
    },
    slider: {
      width: '100%',
      height: 40,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 5,
    },
    price: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fb5b5a',
      marginBottom: 10,
    },
    quantityInput: {
      width: 100,
      marginBottom: 10,
    },
    description: {
      fontSize: 16,
      marginBottom: 10,
    },
    reviewCounter: {
      fontSize: 14,
      marginBottom: 10,
    },
    starRating: {
      flexDirection: 'row',
    },
    totalPrice: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
  });

export default ProductPage;