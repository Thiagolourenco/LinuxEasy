import React, { Component} from 'react';
import {StackNavigator} from 'react-navigation';
import TelaInicial from './src/TelaInicial';
import EsqueceuSenha from './src/EsqueceuSenha';
import Cadastra from './src/Cadastra';
import Home from './src/Home';
import Sobre from './src/Sobre';

const Navegador = StackNavigator({
  TelaInicial:{
    screen: TelaInicial
  },
  EsqueceuSenha: {
    screen: EsqueceuSenha
  },
  Cadastra: {
    screen: Cadastra
  },
  Home: {
    screen: Home
  },
  Sobre: {
    screen: Sobre
  }
},{
  headerMode: "none"
});

export default Navegador;