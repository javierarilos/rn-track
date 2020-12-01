import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TracksListScreen from './src/screens/TracksListScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AccountScreen">
        <Stack.Screen name="AccountScreen" component={AccountScreen} options={{ title: "AccountScreen" }} />
        <Stack.Screen name="SigninScreen" component={SigninScreen} options={{ title: "SigninScreen" }} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ title: "SignupScreen" }} />
        <Stack.Screen name="TrackCreateScreen" component={TrackCreateScreen} options={{ title: "TrackCreateScreen" }} />
        <Stack.Screen name="TrackDetailScreen" component={TrackDetailScreen} options={{ title: "TrackDetailScreen" }} />
        <Stack.Screen name="TracksListScreen" component={TracksListScreen} options={{ title: "TracksListScreen" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return <App />
};