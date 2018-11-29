import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';
import ListaArtigos from './ListaArtigos';

export default class Artigos extends Component{
    static navigationOptions = {
        drawerLabel: 'Artigos',
        drawerIcon:(
            <Image source={require('../imagemLinux/artigos.png')} style={{width: 30, height: 30}}/>
        )
        
    }
    constructor(props){
        super(props);
        this.state = {
            list: [
                {
                    key: 1,
                    titulo: 'Configurando o Apache para deixar dois servidores web no mesmo link',
                    url: 'https://www.vivaolinux.com.br/artigo/Configurando-o-Apache-para-deixar-dois-servidores-web-no-mesmo-link/?pagina=2',
                    bg: '#b8e994'
                },
                {
                    key: 2,
                    titulo: 'Qual o melhor sistema operacional, Windows, Linux ou Mac OS?',
                    url: 'https://www.oficinadanet.com.br/post/12792-descubra-qual-o-melhor-sistema-operacional',
                    bg: '#b8e994'
                },
                {
                    key: 3,
                    titulo: 'Kernel dos Sistemas Operacionais',
                    url: 'https://www.oficinadanet.com.br/post/10330-kernel-dos-sistemas-operacionais',
                    bg: '#b8e994'
                },
                {
                    key: 4,
                    titulo: 'Configurando a rede na linha de comando no ubuntu e no debian',
                    url: 'https://www.oficinadanet.com.br/artigo/linux/configurando_a_rede_na_linha_de_comando_no_ubuntu_e_no_debian',
                    bg: '#b8e994'
                },
                {
                    key: 5,
                    titulo: 'Configurando a rede na linha de comando no ubuntu e no debian',
                    url: 'https://www.edivaldobrito.com.br/vineyard-a-maneira-facil-de-configurar-wine-no-ubuntu/',
                    bg: '#b8e994'
                },

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
                    renderItem={({item}) => <ListaArtigos data={item}/>}
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