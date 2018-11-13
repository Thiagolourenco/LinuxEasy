import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'

export default class Artigos extends Component{
    static navigationOptions = {
        drawerLabel: 'Artigos',
        drawerIcon:(
            <Image source={require('../imagemLinux/artigos.png')} style={{width: 30, height: 30}}/>
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

const styles = StyleSheet.create({
    
})