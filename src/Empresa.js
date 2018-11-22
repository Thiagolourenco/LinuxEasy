import React, { Component } from 'react';
import {Text, View , StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import ListaEmpresa from './ListaEmpresa';

export default class Empresas extends Component{
    constructor(props){
        super(props);
        this.state = {
            list: [
                {
                    key: 1,
                    nome: 'F13 Tecnologia',
                    img:require('../imagemLinux/F13.jpg'),
                    desc: 'Somos a F13 TECNOLOGIA, uma empresa que \napresenta de forma dinâmica e criativa, \nsoluções em tecnologia da informação.',
                    bg: '#1dd1a1'

                },
                {key: 2, bg: '#1dd1a1'},
                {key: 3, bg: '#1dd1a1'},
                {key: 4, bg: '#1dd1a1'},
                {key: 5, bg: '#1dd1a1'},


            ]
        }
    }
    static navigationOptions = {
        drawerLabel: 'Empresa',
        drawerIcon: (
            <Image source={require('../imagemLinux/if_companies_45362.png')} style={{width: 30, height: 30}}/>
        ),
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
                    renderItem={({item}) => <ListaEmpresa data={item}/>}
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