import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import MusicVideos from './components/MusicVideos';
// import SearchVideos from './components/SearchVideos';






import LoginScreen from './components/register/LoginScreen'
import ForgotPassword from './components/register/ForgotPassword';
import SignUp from './components/register/SignUp';
import VerifyEmail from './components/register/VerifyEmail';
import NewPassword from './components/register/NewPassword'

import ProductPage from './components/shop/ProductPage';
import PaymentPage from './components/shop/PaymentPage';
import ConfirmationPage from './components/shop/ConfirmationPage';
import ShopFront from './components/shop/ShopFront';
import BrandVarieties from './components/shop/BrandVarieties';
import JuiceScreen from './components/shop/JuiceScreen';
import VapeScreen from './components/shop/VapeScreen';
import SearchProducts from './components/shop/SearchProducts';



import AccountInfo from './components/account/AccountInfo';
import ProjectInfo from './components/account/ProjectInfo';
import CustomerBasket from './components/account/CustomerBasket';
import Queries from './components/account/Queries';
import DeleteAccount from './components/account/DeleteAccount';

import NotFoundScreen from './components/NotFoundScreen';
import JuiceProductPage from './components/shop/JuiceProductPage';
import Intro from './components/shop/Intro';
import DeliveryAddress from './components/shop/DeliveryAddress';

export default function App() {

  // CHECKLIST
  // - Allow the user to perform CRUD operations on their account
  // - Make sure the PostgreSQL database registers users and purchases
  // - Make BrandBox visible in the BrandVarieties screen, and possibly, ConfirmationPage, CustomerBasket
  // - Add authentication to the Login component, and SignUp
  // - Allow VerifyEmail, ForgotPassword, Queries and ConfirmationPage to send emails
      // - Add product search

  // THIS SESSION
    // - Add mg selectors for juice on a separate JuiceProductPage
    // - Add user email and username to AccountInfo to make UserInfo redundant. Add delete account option to AccountInfo
    // - Add additional vape varieties to BrandVarieties


  //     ______________________________________________________________> Search Products
  //     \/                   \/                   \/                \/
  //  ShopFront -> JuiceScreen / VapeScreen -> BrandVarieties -> ProductPage -> LoginScreen -> PaymentPage -> ConfirmationPage
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
      <Stack.Navigator initialRouteName="DeliveryAddress">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ProjectInfo" component={ProjectInfo} /> 
        <Stack.Screen name="SignUp" component={SignUp} /> 
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> 
        <Stack.Screen name="VerifyEmail" component={VerifyEmail} /> 
        <Stack.Screen name="AccountInfo" component={AccountInfo} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="ShopFront" component={ShopFront} />
        <Stack.Screen name="BrandVarieties" component={BrandVarieties} />
        <Stack.Screen name="ProductPage" component={ProductPage} />
        <Stack.Screen name="CustomerBasket" component={CustomerBasket} />
        <Stack.Screen name="PaymentPage" component={PaymentPage} />
        <Stack.Screen name="ConfirmationPage" component={ConfirmationPage} />
        <Stack.Screen name="Queries" component={Queries} />
        <Stack.Screen name="NotFoundScreen" component={NotFoundScreen} />        
        <Stack.Screen name="JuiceProductPage" component={JuiceProductPage} />        
        <Stack.Screen name="DeleteAccount" component={DeleteAccount} />  
        <Stack.Screen name="JuiceScreen" component={JuiceScreen} />  
        <Stack.Screen name="VapeScreen" component={VapeScreen} />    
        <Stack.Screen name="Intro" component={Intro} />      
        <Stack.Screen name="SearchProducts" component={SearchProducts} />   
        <Stack.Screen name="DeliveryAddress" component={DeliveryAddress} />   

      </Stack.Navigator>
    </NavigationContainer>
  );
}

