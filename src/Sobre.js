import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Sobre extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../imagemLinux/F13.jpg')} style={styles.headerImagem} />
                    <Text style={styles.titulof}>F13 Tecnolgia</Text>
                </View>
               <View style={styles.body}>
                    <Text style={styles.subtitulo}>Quem somos ?</Text>
                    <Text style={styles.corpo}>Somos a F13 TECNOLOGIA, uma empresa que apresenta de forma dinâmica e criativa, soluções em tecnologia da informação envolvendo o ambiente GNU/Linux. </Text>
                    <Text style={styles.corpo}>Nosso principal objetivo é fazer a entrega de serviços com foco no atendimento personalizado com qualidade, eficiência, segurança e sempre embasados nas melhores práticas dos principais frameworks de gestão de T.I. </Text>
                    <Text style={styles.corpo}>Nossa equipe detém uma grande experiência em tecnologia GNU/Linux, o que representa para o nosso cliente, dentre outras vantagens, a redução de custos, ambientes computacionais mais seguros e amplas possibilidades de customização e adequação de softwares para a sua realidade. Tudo isto administrado por uma equipe de profissionais certificados LPI (Linux Professional Institute) contando com o reforço de especialistas certificados Zimbra, PostgreSQL, Red Hat, ITIL, Zabbix, dentre outras certificações reconhecidas no mercado.</Text>
               </View>
               <Text> Aqui Vai ficar a Localização</Text>
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
    header:{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    headerImagem: {
        alignItems: 'center',
        height: 80,
        width: 100,
        justifyContent: 'center'
    },
    titulof: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    subtitulo:{
        fontSize: 15,
        fontWeight: 'bold',
        margin: 8
    },
    corpo: {
        textAlign: 'justify',
        fontSize: 15,
        margin: 8
    }
})