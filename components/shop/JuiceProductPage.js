import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { Header, SearchBar, Icon } from 'react-native-elements';
import ShopHeader from './ShopHeader';
// import { Picker } from '@react-native-picker/picker';

const JuiceProductPage = ({ navigation }) => {
    // dummy product
    
    const product = {
        name: 'Cool Headphones',
        images: [
          'https://example.com/images/cool-headphones-1.jpg',
          'https://example.com/images/cool-headphones-2.jpg',
          'https://example.com/images/cool-headphones-3.jpg',
          '../pictures/react.png',
        ],
        price: 150.99,
        description:
          '',
        reviewCount: 185,
        rating: 4.5,
        deliveryCharge: 5.95,
      };

  const [quantity, setQuantity] = useState(1);
  const [sliderValue, setSliderValue] = useState(0);
  const totalPrice = product.price * quantity + product.deliveryCharge;

  const [shippingOption, setShippingOption] = useState('standard');
  const shippingCost = shippingOption === 'standard' ? 5.95 : 15.95;

  const handleShippingButtonPress = (option) => {
    setShippingOption(option);
  };

  const isStandardShipping = shippingOption === 'standard';
  const isExpressShipping = shippingOption === 'express';

  function handleAddtoCart() {
    navigation.navigate("LoginScreen");
  }


  const renderStarRating = (rating) => {
    const emptyStar = '../pictures/star1-removebg-preview.png';
    const halfStar = '../pictures/star2-removebg-preview.png';
    const fullStar = '../pictures/star3-removebg-preview.png';

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <View>
        <View style={styles.starRating}>
          {Array(fullStars)
            .fill(null)
            .map((_, index) => (
              <Image key={`full_star_${index}`} source={fullStar} style={styles.star} />
            ))}
          {hasHalfStar && <Image source={halfStar} style={styles.star} />}
          {Array(emptyStars)
            .fill(null)
            .map((_, index) => (
              <Image key={`empty_star_${index}`} source={emptyStar} style={styles.star} />
            ))}
        </View>
      </View>
    );
  };

  const [mgOption, setMgOption] = useState('6mg'); // new state

  const handleMgOptionButtonPress = (option) => {
    setMgOption(option);
  };

  const is6mg = mgOption === '6mg';
  const is12mg = mgOption === '12mg';
  const is18mg = mgOption === '18mg';


  
const incrementQuantity = () => {
    if(quantity < 18) { 
    setQuantity(quantity + 1);
    } else {
        return;
    }
    
  };

  const decrementQuantity = () => {
    setQuantity(Math.max(1, quantity - 1));
  };

  return (
    <ScrollView style={styles.scrollView}>
      <ShopHeader />
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.images[sliderValue] }} />
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
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decrementQuantity}>
          <Text style={styles.arrow}>-</Text>
        </TouchableOpacity>



        <Text style={styles.quantityText}>{quantity}</Text>




        <TouchableOpacity onPress={incrementQuantity}>
          <Text style={styles.arrow}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.shippingContainer}>
      <TouchableOpacity
          onPress={() => handleShippingButtonPress('standard')}
          style={[
            styles.shippingButton,
            isStandardShipping && styles.shippingButtonActive,
          ]}
        >
          <Text
            style={[
              styles.shippingButtonText,
              isStandardShipping && styles.shippingButtonTextActive,
            ]}
          >
            Standard Shipping
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleShippingButtonPress('express')}
          style={[
            styles.shippingButton,
            isExpressShipping && styles.shippingButtonActive,
          ]}
        >
          <Text
            style={[
              styles.shippingButtonText,
              isExpressShipping && styles.shippingButtonTextActive,
            ]}
          >
            Express Shipping
          </Text>
        </TouchableOpacity>
      </View>
      </View>

      <View style={styles.mgOptionContainer}>
          <TouchableOpacity
            onPress={() => handleMgOptionButtonPress('6mg')}
            style={[
              styles.mgOptionButton,
              is6mg && styles.mgOptionButtonActive,
            ]}
          >
            <Text
              style={[
                styles.mgOptionButtonText,
                is6mg && styles.mgOptionButtonTextActive,
              ]}
            >
              6mg
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleMgOptionButtonPress('12mg')}
            style={[
              styles.mgOptionButton,
              is12mg && styles.mgOptionButtonActive,
            ]}
          >
            <Text
              style={[
                styles.mgOptionButtonText,
                is12mg && styles.mgOptionButtonTextActive,
              ]}
            >
              12mg
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleMgOptionButtonPress('18mg')}
            style={[
              styles.mgOptionButton,
              is18mg && styles.mgOptionButtonActive,
            ]}
          >
            <Text
              style={[
                styles.mgOptionButtonText,
                is18mg && styles.mgOptionButtonTextActive,
              ]}
            >
              18mg
            </Text>
          </TouchableOpacity>
        </View>








      <View style={styles.priceInfoContainer}>
        <Text style={styles.totalPrice}>
          Delivery Charge: ${shippingCost.toFixed(2)}
        </Text>
        <Text style={styles.totalPrice}>
          Total Price: ${(totalPrice + shippingCost).toFixed(2)}
        </Text>
      </View>
      <TouchableOpacity
            style={styles.card}
            onPress={() => handleAddtoCart()}
          >
            <Text style={styles.cardText}>Add to Cart</Text>
          </TouchableOpacity>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#003f5c',
    },
    container: {
        flexGrow: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        padding: 10,
    },
    reviewCounter: {
        fontSize: 14,
        color: 'white',
        marginBottom: 10,
    },
    priceInfoContainer: {
    marginBottom: 20,
    },
    starRating: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    star: {
      width: 24,
      height: 24,
      marginHorizontal: 2,
    },
    image: {
      width: '100%',
      height: 300,
      resizeMode: 'contain',
    },
    navyBox: {
    borderWidth: 2,
    borderColor: 'navy',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    height: 150,
    },
    slider: {
      width: '100%',
      height: 40,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fb5b5a',
      marginTop: 10,
      marginBottom: 5,
    },
    shippingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'space-around',
    },
    shippingButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#fb5b5a',
        borderRadius: 5,
      },
      shippingButtonActive: {
        backgroundColor: '#d64947',
      },
      card: {
        width: '45%',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      cardText: {
        color: '#1F1F1F',
        fontSize: 18,
        fontWeight: 'bold',
      },
      shippingButtonText: {
        fontSize: 16,
        color: 'white',
      },
      shippingButtonTextActive: {
        fontWeight: 'bold',
      },

      shippingText: {
        fontSize: 18,
        color: 'white',
      },
      shippingPicker: {
        height: 50,
        width: 250,
        color: 'white',
      },
    price: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fb5b5a',
      marginBottom: 10,
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    arrow: {
        fontSize: 60,
        paddingHorizontal: 10,
        color: '#fb5b5a',
    },
    quantityText: {
        fontSize: 32,
        color: 'white',
        marginHorizontal: 5,
        readonly:"true",
      },
    quantityInput: {
    width: 50,
    textAlign: 'center',
    marginBottom: 10,
    color: 'white',
    },
    description: {
        fontSize: 16,
        color: 'white',
        marginBottom: 10,
      },
      reviewCounter: {
        fontSize: 14,
        color: 'white',
        marginBottom: 10,
      },
      totalPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fb5b5a',
        marginBottom: 10,
      },
      button: {
        width: '80%',
        backgroundColor: '#fb5b5a',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
      },
      buttonText: {
        color: 'white',
      },
});

export default JuiceProductPage;