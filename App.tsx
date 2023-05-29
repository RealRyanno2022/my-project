
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AccountInfo from './components/account/AccountInfo';
import ProjectInfo from './components/account/ProjectInfo';
import CustomerBasket from './components/account/CustomerBasket';
import Queries from './components/account/Queries';
import DeleteAccount from './components/account/DeleteAccount';

import Intro from './components/onboarding/Intro';
import PrivacyPolicy from './components/onboarding/PrivacyPolicy';
import ShopFront from './components/onboarding/ShopFront';
import VerifyAge from './components/onboarding/VerifyAge';

import ForgotPassword from './components/register/ForgotPassword';
import LoginScreen from './components/register/LoginScreen';
import NewPassword from './components/register/NewPassword';
import SignUp from './components/register/SignUp';
import VerifyEmail from './components/register/VerifyEmail';

import ConfirmationPage from './components/sales/ConfirmationPage';
import DeliveryAddress from './components/sales/DeliveryAddress';

import BrandVarieties from './components/shop/BrandVarieties';
import JuiceProductPage from './components/shop/JuiceProductPage';
import JuiceScreen from './components/shop/JuiceScreen';
import ProductPage from './components/shop/ProductPage';
import SearchProducts from './components/shop/SearchProducts';
import VapeScreen from './components/shop/VapeScreen';

import NotFoundScreen from './components/NotFoundScreen';


import ContinueShopping from './components/shop/ContinueShopping';

import SubSignUp from './components/subscriptions/SubSignUp';
import SubVapeScreen from './components/subscriptions/SubVapeScreen';
import ChooseFlavours from './components/subscriptions/ChooseFlavours';
import ManageSubscription from './components/subscriptions/ManageSubscription';

import ChangeAddress from './components/subscriptions/ChangeAddress';
import CancelMembership from './components/subscriptions/CancelMembership';
import ChangeFlavours from './components/subscriptions/ChangeFlavours';
import CancelConfirm from './components/subscriptions/CancelConfirm';


import { View, Appearance } from 'react-native';

import { lightStyles, darkStyles } from './styles.js';


type RootStackParamList = {
  AccountInfo: { userId: number};
  CustomerBasket: undefined;
  DeleteAccount: undefined;
  ProjectInfo: undefined;
  Queries: undefined;
  Intro: undefined;
  PrivacyPolicy: undefined;
  ShopFront: undefined;
  VerifyAge: undefined;
  ForgotPassword: undefined;
  LoginScreen: undefined;
  NewPassword: undefined;
  SignUp: undefined;
  VerifyEmail: undefined;
  ConfirmationPage: { orderID: string; orderDate: string; totalAmount: number };
  DeliveryAddress: undefined;
  BrandVarieties: undefined;
  ContinueShopping: undefined;
  JuiceProductPage: undefined;
  JuiceScreen: undefined;
  ProductPage: undefined;
  SearchProducts: undefined;
  VapeScreen: undefined;
  SubSignUp: undefined;
  SubVapeScreen: undefined;
  NotFoundScreen: undefined;
  ChooseFlavours: undefined;
  ManageSubscription: undefined;
  CancelMembership: undefined;
  ChangeAddress: undefined;
  ChangeFlavours: undefined;
  CancelConfirm: undefined;
};





const App: React.FC = () => {

  // CHECKLIST


  // FEATURE LIST TO ADD;
  // 




    // APP SCHEMATIC

//             \/ Probably most important component!!!
  // Intro -> verifyAge ||| ______ ______________________________________________________________> Search Products_________________     searchProducts used everywhere
        //     \/             \/               \/                   \/                \/          \/              \/              \/
        //     |_____>ShopFront -> JuiceScreen / VapeScreen -> BrandVarieties -> ProductPage -> LoginScreen -> PaymentPage -> ConfirmationPage
            //        |_>AccountInfo              |_>BrandBox                |_> SignUp -> Verify Email   
            //            |_> UserInfo                                      |_>ForgotPassword -> NewPassword
            //            |_> ProjectInfo
            //         |_>CustomerBasket                                     
            //         |_>Queries
            //            |_> FAQItem
  //
  // ? -> NotFoundScreen


  const Stack = createStackNavigator();

  const deviceTheme = Appearance.getColorScheme(); // 'light' or 'dark'
  const [isDarkMode, setIsDarkMode] = useState(deviceTheme === 'dark');
  const [isSubscribed, setIsSubscribed] = useState(true);

  const styles = isDarkMode ? darkStyles : lightStyles;
  

  return (
    <View style={{backgroundColor: styles.background}}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">

      <Stack.Screen name="AccountInfo" component={AccountInfo} />
      <Stack.Screen name="CustomerBasket" component={CustomerBasket} />
      <Stack.Screen name="DeleteAccount" component={DeleteAccount} /> 
      <Stack.Screen name="ProjectInfo" component={ProjectInfo} /> 
      <Stack.Screen name="Queries" component={Queries} />
        
      <Stack.Screen name="Intro" component={Intro} />  
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="ShopFront" component={ShopFront} /> 
      <Stack.Screen name="VerifyAge" component={VerifyAge} />
      
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> 
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmail} /> 

      <Stack.Screen 
        name="ConfirmationPage" 
        component={ConfirmationPage}
        initialParams={{ orderID: "defaultID", orderDate: "defaultDate", totalAmount: 0 }} 
      />
      <Stack.Screen name="DeliveryAddress" component={DeliveryAddress} /> 

      <Stack.Screen name="BrandVarieties" component={BrandVarieties} />
      <Stack.Screen name="ContinueShopping" component={ContinueShopping} />
      <Stack.Screen name="JuiceProductPage" component={JuiceProductPage} />
      <Stack.Screen name="JuiceScreen" component={JuiceScreen} />  
      <Stack.Screen name="ProductPage" component={ProductPage} />
      <Stack.Screen name="SearchProducts" component={SearchProducts} />    
      <Stack.Screen name="VapeScreen" component={VapeScreen} />    
  

   
      <Stack.Screen name="SubSignUp" component={SubSignUp} />   
      <Stack.Screen name="SubVapeScreen" component={SubVapeScreen} />  


      <Stack.Screen name="NotFoundScreen" component={NotFoundScreen} />    
      <Stack.Screen name="ChooseFlavours" component={ChooseFlavours} />   
      <Stack.Screen name="ManageSubscription" component={ManageSubscription} />   

      <Stack.Screen name="CancelMembership" component={CancelMembership} />   
      <Stack.Screen name="ChangeAddress" component={ChangeAddress} />   
      <Stack.Screen name="ChangeFlavours" component={ChangeFlavours} />   
      <Stack.Screen name="CancelConfirm" component={CancelConfirm} initialParams={{ isSubscribed }} />


      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

export default App;