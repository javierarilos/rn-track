import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('blur', clearErrorMessage);
        return unsubscribe;
    }, [navigation]);

    return (
        <View style={styles.container}>
            <AuthForm
                headerText='Sign Up for Tracker'
                errorMessage={state.errorMessage}
                submitButtonText='Sign Up'
                onSubmit={signup}
            />
            <NavLink
                dst='SigninScreen'
                txt='Already have an account? Sign in instead'
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

export default SignupScreen;