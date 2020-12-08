import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
    return (<View>
        <Text style={{fontSize: 28}}>SignupScreen</Text>
        <Button title="Already have an Account? Sign in" onPress={() => {navigation.navigate("SigninScreen")}} />
    </View>);
};

const styles = StyleSheet.create({});

export default SignupScreen;