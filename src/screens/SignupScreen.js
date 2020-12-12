import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (<View style={styles.container}>
        <Spacer>
            <Text h3>Sign up for Tracker</Text>
        </Spacer>
            <Input 
                label="Email" 
                value={email} 
                onChange={setEmail}
                autoCapitalize="none"
                autoCorrect={false}/>
            <Input 
                label="Password" 
                value={password} 
                onChange={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry/>
        <Spacer>
            <Button title="Sign up" />
        </Spacer>
    </View>);
};

const styles = StyleSheet.create({
    container: {
       flex: 1,
       justifyContent: 'center',
       marginTop: 50,
       marginBottom: 250
    },
});

export default SignupScreen;