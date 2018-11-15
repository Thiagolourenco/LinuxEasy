import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity,Image,FlatList} from 'react-native';
import { ListItem } from 'native-base';
import ListaNome from './ListaNome'

export default class ItemBotaoMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: [
                {key: 1},
                {key: 2},
                {key: 3},
                {key: 4},
                {key: 5},

            ]

            
        };
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                      <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                            <Image source={require('../imagemLinux/menu.png')} style={styles.imagem}/>
                        </TouchableOpacity>
                    <View style={styles.headerSub}>
                        <Image source={require('../imagemLinux/281018125456_128.png')} style={{width: 50, height: 50}}/>
                        <Text style={styles.titulo}>LinuxEasy</Text>
                    </View>
                </View>

                <FlatList 
                    data={this.state.list}
                    renderItem={(item) => <ListaNome data={item}/>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7f8c8d',
        paddingTop: 20
    },
    header: {
        flex: 1,
        flexDirection :'row'
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    imagem: {
        width: 36,
        height: 36,
        paddingTop: 10,
        margin: 15
    },
    headerSub:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 50
    }
})