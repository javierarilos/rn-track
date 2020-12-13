import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = ({ navigation }) => {
    const { signout } = React.useContext(AuthContext);
    return (<View style={styles.container}>
        <Button title="Sign OUT" onPress={async () => {
            await signout();
        }} />
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

export default AccountScreen;