import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AccountInfo from './components/account/AccountInfo';
import ProjectInfo from './components/account/ProjectInfo';
import CustomerBasket from './components/account/CustomerBasket';
import Queries from './components/account/Queries';
import DeleteAccount from './components/account/DeleteAccount';
import { BrandVarietiesProps, StackParamList } from './types/types';

import LanguageSelect from './components/onboarding/LanguageSelect';
import Intro from './components/onboarding/Intro';
import PrivacyPolicy from './components/onboarding/PrivacyPolicy';
import ShopFront from './components/onboarding/ShopFront';
import VerifyAge from './components/onboarding/VerifyAge';

import ForgotPassword from './components/register/ForgotPassword';
import LoginScreen from './components/register/LoginScreen';
import NewPassword from './components/register/NewPassword';
import SignUp from './components/register/SignUp';
import VerifyEmail from './components/register/VerifyEmail';

import DeliveryAddress from './components/sales/DeliveryAddress';

import BrandVarieties from './components/shop/BrandVarieties';
import JuiceProductPage from './components/shop/JuiceProductPage';
import JuiceScreen from './components/shop/JuiceScreen';
import ProductPage from './components/shop/ProductPage';
import SearchProducts from './components/shop/SearchProducts';
import VapeScreen from './components/shop/VapeScreen';
import NonDisposableScreen from './components/shop/NonDisposableScreen';
import NonDisposableProductPage from './components/shop/NonDisposableProductPage';

import NotFoundScreen from './components/NotFoundScreen';

import ContinueShopping from './components/shop/ContinueShopping';

import SubSignUp from './components/subscriptions/SubSignUp';
import SubVapeScreen from './components/subscriptions/SubVapeScreen';
import ChooseFlavours from './components/subscriptions/ChooseFlavours';
import ManageSubscription from './components/subscriptions/ManageSubscription';

import ChangeAddress from './components/subscriptions/ChangeAddress';
import CancelMembership from './components/subscriptions/CancelMembership';
import CancelConfirm from './components/subscriptions/CancelConfirm';

import { View, Appearance, Text } from 'react-native';

import { lightStyles, darkStyles } from './styles.js';

interface Props {
  children: React.ReactNode;
}


class ErrorBoundary extends React.Component<Props> {
  state = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('An error occurred:', error);
    console.error('Error info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <View>
        <Text>Error encountered</Text>
        </View>;
    }

    return this.props.children;
  }
}

const App: React.FC = () => {
  const Stack = createStackNavigator<StackParamList>();

  const WrappedConfirmationPage: React.FC = () => (
    <View>
      {/* Placeholder content */}
    </View>
  );

  console.log("It's gucci!")
  const deviceTheme = Appearance.getColorScheme(); // 'light' or 'dark'
  const [isDarkMode, setIsDarkMode] = useState(deviceTheme === 'dark');
  const [isSubscribed, setIsSubscribed] = useState(true);

  const styles = isDarkMode ? darkStyles : lightStyles;

  return (
    <ErrorBoundary>
    <View style={{ backgroundColor: styles.background }}>
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

          <Stack.Screen name="LanguageSelect" component={LanguageSelect} />

          <Stack.Screen
            name="ConfirmationPage"
            component={WrappedConfirmationPage}
          />
          <Stack.Screen name="DeliveryAddress" component={DeliveryAddress} />

          <Stack.Screen name="BrandVarieties" component={BrandVarieties as any} />
          <Stack.Screen name="ContinueShopping" component={ContinueShopping} />
          <Stack.Screen name="JuiceProductPage" component={JuiceProductPage} />
          <Stack.Screen name="JuiceScreen" component={JuiceScreen} />
          <Stack.Screen name="ProductPage" component={ProductPage} />
          <Stack.Screen name="SearchProducts" component={SearchProducts as any} />
          <Stack.Screen name="VapeScreen" component={VapeScreen} />
          <Stack.Screen
            name="NonDisposableScreen"
            component={NonDisposableScreen}
          />
          <Stack.Screen
            name="NonDisposableProductPage"
            component={NonDisposableProductPage}
          />

          <Stack.Screen name="SubSignUp" component={SubSignUp} />
          <Stack.Screen name="SubVapeScreen" component={SubVapeScreen} />

          <Stack.Screen name="NotFoundScreen" component={NotFoundScreen} />
          <Stack.Screen name="ChooseFlavours" component={ChooseFlavours as any} />
          <Stack.Screen 
            name="ManageSubscription"
            component={ManageSubscription as any}
          />

          <Stack.Screen
            name="CancelMembership"
            component={CancelMembership as any}
          />
          <Stack.Screen name="ChangeAddress" component={ChangeAddress} />
          {/* <Stack.Screen name="ChangeFlavours" component={ChangeFlavours as any} /> */}
          <Stack.Screen
            name="CancelConfirm"
            component={CancelConfirm as any}

          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    </ErrorBoundary>

 
  )
}



export default App;