import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    Image
} from 'react-native'

export default class Empresas extends Component {
    static navigationOptions = {
        drawerLabel: 'Empresas',
        drawerIcon:()=> (
            <Image source={require('../imagemLinux/if_companies_45362.png')} style={{width: 30, height: 30}}/>
        )
    }
    render(){
        return(
            <View>
                <Text>Ola</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    
})