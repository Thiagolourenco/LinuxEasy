import React, { Component} from 'react';
import {StackNavigator} from 'react-navigation';
import TelaInicial from './src/TelaInicial';
import EsqueceuSenha from './src/EsqueceuSenha';
import Cadastra from './src/Cadastra';
import Home from './src/Home'

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
  }
},{
  headerMode: "none"
});

export default Navegador;