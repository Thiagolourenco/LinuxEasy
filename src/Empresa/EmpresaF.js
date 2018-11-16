import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class EmpresaF extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text> F13 Tecnologia</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    }
})