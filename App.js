import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MusicVideos from './components/MusicVideos';
import SearchVideos from './components/SearchVideos';
import LoginScreen from './components/LoginScreen'
import ProjectInfo from './components/ProjectInfo';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import VerifyEmail from './components/VerifyEmail';
import AccountInfo from './components/AccountInfo';
import UserInfo from './components/UserInfo'
import NewPassword from './components/NewPassword'

export default function App() {


  const Stack = createStackNavigator();
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AccountInfo">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SearchVideos" component={SearchVideos} />
        <Stack.Screen name="MusicVideos" component={MusicVideos} /> 
        <Stack.Screen name="ProjectInfo" component={ProjectInfo} /> 
        <Stack.Screen name="SignUp" component={SignUp} /> 
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> 
        <Stack.Screen name="VerifyEmail" component={VerifyEmail} /> 
        <Stack.Screen name="AccountInfo" component={AccountInfo} />
        <Stack.Screen name="UserInfo" component={UserInfo} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

