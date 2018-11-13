import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    Image
} from 'react-native'

export default class Tutoriais extends Component {
    static navigationOptions = {
        drawerLabel: 'Tutoriais',
        drawerIcon: (
            <Image source={require('../imagemLinux/tutoriais.png')} style={{width: 30, height: 30}}/>
        )
    }
    render(){
        return(
            <View>  
                <Text>Tutoriais</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    
})