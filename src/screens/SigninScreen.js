import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const SigninScreen = ({ navigation }) => {
    return (<View>
        <Text style={{fontSize: 28}}>SigninScreen</Text>
        <Button title="New to the app? Signin" onPress={() => {navigation.navigate("SignupScreen")}} />
    </View>);
};

const styles = StyleSheet.create({});

export default SigninScreen;