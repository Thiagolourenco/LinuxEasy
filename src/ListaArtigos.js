import React, { Component } from 'react';
import {Text, View, StyleSheet, Linking, TouchableHighlight} from 'react-native';

export default class ListaArtigos extends Component {
    render(){
        return(
            <TouchableHighlight style={[styles.container, {backgroundColor:this.props.data.bg}]} onPress={()=> Linking.openURL(this.props.data.url)} underlayColor="#ecf0f1">
                <Text style={styles.texto}>{this.props.data.titulo}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        height: 80,
        width: 400,
        margin: 8,
        borderRadius: 10
    },
    texto: {
        fontSize: 15,
        fontWeight: 'bold',
        margin: 5
    }
})