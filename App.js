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

const AuthStack = createStackNavigator();
const TrackListStack = createStackNavigator();
const Tab = createBottomTabNavigator();
var isUserAuthenticated = true;

const TrackListFlow = () => {
  return <AuthStack.Navigator initialRouteName="TracksListScreen">
    <Tab.Screen name="TracksListScreen" component={TracksListScreen} options={{ title: "TracksListScreen" }} />
    <Tab.Screen name="TrackDetailScreen" component={TrackDetailScreen} options={{ title: "TrackDetailScreen" }} />
  </AuthStack.Navigator>;
}

const App = () => {
  return (
    <NavigationContainer>
      {isUserAuthenticated ? (
        <Tab.Navigator>
          <Tab.Screen name="TracksListFlow" component={TrackListFlow} options={{ title: "TracksListFlow" }} />
          <Tab.Screen name="AccountScreen" component={AccountScreen} options={{ title: "AccountScreen" }} />
          <Tab.Screen name="TrackCreateScreen" component={TrackCreateScreen} options={{ title: "TrackCreateScreen" }} />
        </Tab.Navigator>
      ) : (
        <AuthStack.Navigator initialRouteName="SigninScreen">
          <AuthStack.Screen name="SigninScreen" component={SigninScreen} options={{ title: "SigninScreen" }} />
          <AuthStack.Screen name="SignupScreen" component={SignupScreen} options={{ title: "SignupScreen" }} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>)
};

export default () => {
  return <App />
};
