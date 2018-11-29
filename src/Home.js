import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerNavigator, DrawerItems} from 'react-navigation';
import HomeInicial from './HomeInicial';
import Artigos from './Artigos';
import Tutoriais from './Tutoriais';
import Sistemas from './Sistemas';
import Empresa from './Empresa';
import Logout from './Logout';

import { Container, Content, Body, Header, Icon, Button } from 'native-base';

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
    Empresa: {
        screen: Empresa
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

export default Navegador;
