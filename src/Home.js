import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
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
                <Image source={require('../imagemLinux/user.png')} style={{width: 150, height: 150,  borderRadius: 85}}/>
                <Text style={{textAlign: 'center'}}>Nome do Usuário</Text>
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
    Empresas: {
        screen: Empresas
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