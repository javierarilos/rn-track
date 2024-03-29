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
import { SafeAreaProvider } from 'react-native-safe-area-context';

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

  const { state, loadAuth } = React.useContext(AuthContext);

  React.useEffect(() => {
    console.log('App.useEffect...');
    const bootstrapAsync = async () => {
      await loadAuth()
    }
    bootstrapAsync();
    console.log('Loaded auth')
    console.log(state)
  }, []);

  if (!state.isAuthInitialized) {
    return (<></>);
  }

  return (
    <NavigationContainer>
      {state.isSignedIn ? (
        <Tab.Navigator initialRouteName="TracksListFlow">
          <Tab.Screen name="TracksListFlow" component={TrackListFlow} options={{ title: "TracksListFlow" }} />
          <Tab.Screen name="AccountScreen" component={AccountScreen} options={{ title: "AccountScreen" }} />
          <Tab.Screen name="TrackCreateScreen" component={TrackCreateScreen} options={{ title: "TrackCreateScreen" }} />
        </Tab.Navigator>
      ) : (
          <AuthStack.Navigator initialRouteName="SigninScreen" screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="SigninScreen" component={SigninScreen} />
            <AuthStack.Screen name="SignupScreen" component={SignupScreen} />
          </AuthStack.Navigator>
        )}
    </NavigationContainer>)
};

export default () => {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </AuthProvider>
  );
};
