import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const TracksListScreen = ({ navigation }) => {
    return (<View>
        <Text style={{fontSize: 28}}>TracksListScreen</Text>
        <Button title="Track Detail" onPress={() => {navigation.navigate("TrackDetailScreen")}} />
    </View>);
};

const styles = StyleSheet.create({});

export default TracksListScreen;