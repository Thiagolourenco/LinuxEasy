import React,{Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native'

export default class EsqueceuSenha extends Component{
    
    static navigationOptions = ({navigation}) => ({
        title: 'Esqueceu Senha'
    })

    Enviar(){
        alert('Sua Nova Senha Foi Enviada Seu E-mail')
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../imagemLinux/281018125456_128.png')} style={{width: 80, height: 80}}/>
                    <Text style={styles.titulo}>LinuxEasy</Text>
                </View>
                <View style={styles.containerSenha}>
                    <Text style={styles.textoSenha}>ESQUECEU SENHA</Text>
                    <TextInput placeholder="EMAIL@COM.BR" style={styles.input}/>
                    <TouchableOpacity style={styles.btnEnviar} onPress={this.Enviar}>
                        <Text style={styles.textoEnviar}>ENVIAR</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7f8c8d',
        alignItems: 'center',
        paddingTop: 30
    },
    header: {
        flexDirection: 'row',
        margin: 10
    },
    titulo: {
        fontSize: 35,
        fontWeight: 'bold',
        paddingTop: 10
    },
    containerSenha: {
        justifyContent: 'center',
        paddingTop: 80,
        alignItems: 'center'
    },
    textoSenha: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center',
        margin: 10
    },
    input: {
        width: 350,
        height: 40,
        backgroundColor: '#ecf0f1',
        margin: 8,
        borderRadius: 10
    },
    btnEnviar: {
        backgroundColor: '#636e72',
        width: 250,
        height: 40,
        borderRadius: 15,
        margin: 15
    },
    textoEnviar: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 5
    }
})