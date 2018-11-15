import React, { Component } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import {DrawerNavigator, DrawerItems} from 'react-navigation';
import HomeInicial from './HomeInicial';
import Artigos from './Artigos';
import Tutoriais from './Tutoriais';
import Sistemas from './Sistemas';
import Empresas from './Empresas';

import { Container, Content, Body, Header, Icon } from 'native-base'

const UserLogo = (props) => (
    <Container style={{backgroundColor: '#bdc3c7'}}>
        <Header style={{height: 200, backgroundColor: '#7f8c8d'}}>
            <Body>
                <Image source={require('../imagemLinux/user.png')} style={styles.headerImagem}/>
                <Text style={styles.headerTitulo}>Nome do Usuário</Text>
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props}/>
        </Content>
    </Container>
)

class Logout extends Component {
    static navigationOptions = {
        drawerLabel: 'Logout',
        drawerIcon: (
            <Image source={require('../imagemLinux/logout.png')} style={{width: 30, height: 30}}/>
        )
    }
    render(){
        return(
            <View style={styles.container}>
                 <Text style={styles.concluindo}>Concluindo...</Text>
            </View>
        );
    }
}

const Navegador = DrawerNavigator({
    Home:{
        screen: HomeInicial
    },
    Artigos: {
        screen: Artigos
    },
    Tutoriais: {
        screen: Tutoriais
    },
    Sistemas: {
        screen: Sistemas
    },
    Empresas: {
        screen: Empresas
    },
    Logout: {
        screen: Logout
    }
},{
    initialRouteName: 'Home',
    contentComponent: UserLogo,
    drawerPosition: 'center',
    drawerOpenRoute: 'DrawerOpen',
    draweCloseRoute: 'DraweClose',
    drawerToggleRoute: 'DrawerToggle',
    contentOptions:{
        activeTintColor: '#57606f',
        
    },
    
})

export default Navegador;

const styles = StyleSheet.create({
    headerImagem: {
        width: 150,
        height: 150,  
        borderRadius: 85, 
        marginLeft:40
    },
    headerTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 40
    },
    concluindo: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})