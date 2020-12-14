import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Spacer from './Spacer';
import { useNavigation } from '@react-navigation/native';

const NavLink = ({ txt, dst }) => {

    const navigation = useNavigation();
    
    return (
        <TouchableOpacity onPress={() => navigation.navigate(dst)}>
            <Spacer>
                <Text style={styles.link}>{txt}</Text>
            </Spacer>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    link: {
        color: 'blue'
    }
});


export default NavLink;