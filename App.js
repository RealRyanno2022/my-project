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

export default function App() {

  // CHECKLIST
  // - Add delete account api route
  // - Fix the brand varieties issue (Main bottleneck)




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
  

  return (
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

      <Stack.Screen name="ConfirmationPage" component={ConfirmationPage} />
      <Stack.Screen name="DeliveryAddress" component={DeliveryAddress} /> 

      <Stack.Screen name="BrandVarieties" component={BrandVarieties} />
      <Stack.Screen name="ContinueShopping" component={ContinueShopping} />
      <Stack.Screen name="JuiceProductPage" component={JuiceProductPage} />
      <Stack.Screen name="JuiceScreen" component={JuiceScreen} />  
      <Stack.Screen name="ProductPage" component={ProductPage} />
      <Stack.Screen name="SearchProducts" component={SearchProducts} />    
      <Stack.Screen name="VapeScreen" component={VapeScreen} />    
  

   



      <Stack.Screen name="NotFoundScreen" component={NotFoundScreen} />    


      </Stack.Navigator>
    </NavigationContainer>
  );
}

