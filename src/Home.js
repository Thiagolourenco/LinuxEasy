import React, { Component } from 'react';
import {DrawerNavigator} from 'react-navigation';
import HomeInicial from './HomeInicial';
import Artigos from './Artigos';
import Tutoriais from './Tutoriais';
import Sistemas from './Sistemas';
import Empresas from './Empresas'

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
    contentOptions:{
        activeTintColor: '#57606f',
        itemsContainerStyle:{
            marginTop: 180
        }
    },
    
})

export default Navegador;