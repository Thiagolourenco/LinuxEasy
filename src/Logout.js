import React, {Component } from 'react';
import {Text, View,Image} from 'react-native';


export default class Logout extends Component {
    static navigationOptions = {
        drawerLabel: 'Logout',
        drawerIcon: (
            <Image source={require('../imagemLinux/logout.png')} style={{width: 30, height: 30}}/>
        ),
    }
    render(){
        return(
            <View style={styles.container}>
                 <Text style={styles.concluindo}>Concluindo...</Text>
            </View>
        );
    }
}