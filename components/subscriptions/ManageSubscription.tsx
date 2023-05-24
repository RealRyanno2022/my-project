import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel'; // you need to install this
import ShopHeader from '../shop/ShopHeader';

const ManageSubscription = ({ navigation, user }) => {
    const [subscription, setSubscription] = useState(user.subscription);
    const [flavours, setFlavours] = useState(user.flavours);

    const dummyUser = {
        subscription: {
          type: 'monthly',
        },
        flavours: [
          {
            image: require("../pictures/VapePics/Elfbar/Cola0.png"),
          },
          {
            image: require("../pictures/VapePics/Elfbar/Cola0.png"),
          },
          {
            image: require("../pictures/VapePics/Elfbar/Cola0.png"),
          },
          {
            image: require("../pictures/VapePics/Elfbar/Cola0.png"),
          },
        ],
      }



    const renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <Image source={{uri: item.image}} style={styles.image} />
            </View>
        );
    }

    return (
      <View>
        <ShopHeader navigation={navigation} />
        <View style={styles.container}>
            <Text style={styles.title}>Manage Subscription</Text>
            <Carousel
                data={flavours}
                renderItem={renderItem}
                sliderWidth={400}
                itemWidth={200}
            />

            {subscription.type === 'monthly' && (
                <Button title="Upgrade to yearly" onPress={() => navigation.navigate('UpgradeMembership')} />
            )}
            
            <Button title="Cancel Membership" onPress={() => navigation.navigate('CancelMembership')} />
            
            <Button title="Change Credit Card Information" onPress={() => navigation.navigate('ChangeCreditCard')} />
            
            <Button title="Change Address" onPress={() => navigation.navigate('ChangeAddress')} />

            <Button title="Change Flavours" onPress={() => navigation.navigate('ChangeFlavours')} />
        </View>
          <ShopFooter navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    slide: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    }
});

export default ManageSubscription;