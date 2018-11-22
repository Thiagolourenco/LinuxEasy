import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableHighlight, Image } from 'react-native';
import {withNavigation} from 'react-navigation';

class ListaEmpresa extends Component{
    render(){
        return(
            <TouchableHighlight style={[styles.container, {backgroundColor: this.props.data.bg}]} onPress={() => this.props.navigation.navigate('Sobre')} underlayColor="#ecf0f1">
            <View style={styles.corpo}>
                <Image source={this.props.data.img} style={styles.imgTouch}/>
                <View style={styles.coNome}>
                    <Text style={styles.nome}>{this.props.data.nome}</Text>
                    <Text numberOfLines={3}>{this.props.data.desc}</Text>
                </View>
            </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        height: 100,
        width: 390,
        margin: 8,
        borderRadius: 10
    },
    coNome: {
        flexDirection: 'column',
        marginLeft: 5
    },
    imgTouch: {
        width: 70,
        height: 70,
        margin: 10,
        alignSelf: 'flex-start',
        borderRadius: 10
    },
    nome: {
        fontSize: 25,
        fontWeight: 'bold',
        alignItems: 'center'
    },
    corpo: {
        flexDirection: 'row',
        margin: 5
    },
})

export default withNavigation(ListaEmpresa);