import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { SafeAreaView } from 'react-native-safe-area-context';

const AccountScreen = ({ navigation }) => {
    const { signout } = React.useContext(AuthContext);
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Text h3>Account management.</Text>
                <Spacer/>
                <Button title="Sign OUT" onPress={async () => {
                    await signout();
                }} />
            </View>
        </SafeAreaView>);
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