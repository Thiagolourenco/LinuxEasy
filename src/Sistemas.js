import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    Image
} from 'react-native'

export default class Sistemas extends Component {
    static navigationOptions = {
        drawerLabel: 'Sistemas Operacionais',
        drawerIcon:() => (
            <Image source={require('../imagemLinux/sos.png')} style={{width: 30, height: 30}}/>
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