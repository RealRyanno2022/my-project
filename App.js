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
// import BrandVarieties from './components/shop/BrandVarieties';

import AccountInfo from './components/account/AccountInfo';
import UserInfo from './components/account/UserInfo'
import ProjectInfo from './components/account/ProjectInfo';
import CustomerBasket from './components/account/CustomerBasket';
import Queries from './components/account/Queries';
import NotFoundScreen from './components/NotFoundScreen';


export default function App() {


  //  ShopFront -> BrandScreen -> BrandVarieties -> ProductPage -> LoginScreen -> PaymentPage -> ConfirmationPage
  //        |_>AccountInfo                                       |_> SignUp -> Verify Email   
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
      <Stack.Navigator initialRouteName="Queriesd">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        {/* <Stack.Screen name="SearchVideos" component={SearchVideos} />
        <Stack.Screen name="MusicVideos" component={MusicVideos} />  */}
        <Stack.Screen name="ProjectInfo" component={ProjectInfo} /> 
        <Stack.Screen name="SignUp" component={SignUp} /> 
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> 
        <Stack.Screen name="VerifyEmail" component={VerifyEmail} /> 
        <Stack.Screen name="AccountInfo" component={AccountInfo} />
        <Stack.Screen name="UserInfo" component={UserInfo} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="ShopFront" component={ShopFront} />
        {/* <Stack.Screen name="BrandVarieties" component={BrandVarieties} /> */}
        <Stack.Screen name="ProductPage" component={ProductPage} />
        <Stack.Screen name="CustomerBasket" component={CustomerBasket} />
        <Stack.Screen name="PaymentPage" component={PaymentPage} />
        <Stack.Screen name="ConfirmationPage" component={ConfirmationPage} />
        <Stack.Screen name="Queries" component={Queries} />
        <Stack.Screen name="NotFoundScreen" component={NotFoundScreen} />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

