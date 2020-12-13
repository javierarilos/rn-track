import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TracksListScreen from './src/screens/TracksListScreen';
import { Context as AuthContext, Provider as AuthProvider } from './src/context/AuthContext';

const AuthStack = createStackNavigator();
const TrackListStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TrackListFlow = () => {
  return <AuthStack.Navigator initialRouteName="TracksListScreen">
    <Tab.Screen name="TracksListScreen" component={TracksListScreen} options={{ title: "TracksListScreen" }} />
    <Tab.Screen name="TrackDetailScreen" component={TrackDetailScreen} options={{ title: "TrackDetailScreen" }} />
  </AuthStack.Navigator>;
}

const App = () => {

  const { isSignedIn } = React.useContext(AuthContext);
  
  return (
    <NavigationContainer>
      {isSignedIn() ? (
        <Tab.Navigator>
          <Tab.Screen name="TracksListFlow" component={TrackListFlow} options={{ title: "TracksListFlow" }} />
          <Tab.Screen name="AccountScreen" component={AccountScreen} options={{ title: "AccountScreen" }} />
          <Tab.Screen name="TrackCreateScreen" component={TrackCreateScreen} options={{ title: "TrackCreateScreen" }} />
        </Tab.Navigator>
      ) : (
        <AuthStack.Navigator initialRouteName="SigninScreen" screenOptions={{headerShown: false}}>
          <AuthStack.Screen name="SigninScreen" component={SigninScreen} />
          <AuthStack.Screen name="SignupScreen" component={SignupScreen} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>)
};

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
