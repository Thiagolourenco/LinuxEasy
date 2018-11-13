import React,{Component} from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    StyleSheet,
    Image
} from 'react-native'

export default class ListaNome extends Component {
    render(){
        return(
            <TouchableHighlight style={styles.container}>
               <Image source={this.props.data.img} style={styles.imagems}/>
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
        margin: 8
    },
    imagems: {
        width: 70,
        height: 70,
        margin: 10,
        alignSelf: 'flex-start'

    }
})