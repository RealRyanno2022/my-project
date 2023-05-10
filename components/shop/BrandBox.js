// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// const brandData = {
//   Elfbar: [
//     {
//       id: '1',
//       name: 'Elfbar RF350',
//       image: 'https://dummyimage.com/300x200/000/fff.png&text=Elfbar+RF350',
//       price: 24.99,
//     },
//     {
//       id: '2',
//       name: 'Elfbar RF550',
//       image: 'https://dummyimage.com/300x200/000/fff.png&text=Elfbar+RF550',
//       price: 29.99,
//     },
//     {
//       id: '3',
//       name: 'Elfbar RF800',
//       image: 'https://dummyimage.com/300x200/000/fff.png&text=Elfbar+RF800',
//       price: 34.99,
//     },
//   ],
//   LostMary: [
//     {
//       id: '4',
//       name: 'LostMary AIR Plus',
//       image: 'https://dummyimage.com/300x200/000/fff.png&text=LostMary+AIR+Plus',
//       price: 19.99,
//     },
//     {
//       id: '5',
//       name: 'LostMary DISC Mini',
//       image: 'https://dummyimage.com/300x200/000/fff.png&text=LostMary+DISC+Mini',
//       price: 24.99,
//     },
//     {
//       id: '6',
//       name: 'LostMary GEM Pen',
//       image: 'https://dummyimage.com/300x200/000/fff.png&text=LostMary+GEM+Pen',
//       price: 29.99,
//     },
//   ],
// };






// const BrandBox = ({ product, navigation }) => {
//   const handleProductPress = () => {
//     navigation.navigate('ProductScreen', { product });
//   };

//   return (
//     <TouchableOpacity style={styles.brandBox} onPress={handleProductPress}>
//       <Image style={styles.productImage} source={{ uri: product.image }} />
//       <Text style={styles.productName}>{product.name}</Text>
//       <Text style={styles.productPrice}>{`$${product.price.toFixed(2)}`}</Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   brandBox: {
//     backgroundColor: '#f0f0f0',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 15,
//     alignItems: 'center',
//     width: '100%',
//   },
//   productImage: {
//     width: '100%',
//     height: 150,
//     resizeMode: 'cover',
//     borderRadius: 5,
//   },
//   productName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     marginTop: 5,
//   },
//   productPrice: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginTop: 5,
//   },
// });

// export default BrandBox;