import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = ({ navigation }) => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('blur', clearErrorMessage);
        return unsubscribe;
      }, [navigation]);

    return (<View style={styles.container}>
        <AuthForm
            headerText="Sign in to your account"
            errorMessage={state.errorMessage}
            onSubmit={signin}
            submitButtonText='Sign in'
        />
        <NavLink
            dst="SignupScreen"
            txt="New to the app? Sign Up"
        />
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

export default SigninScreen;