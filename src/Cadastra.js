import React,{Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    
} from 'react-native'

export default class Cadastra extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../imagemLinux/281018125456_128.png')} style={{width: 80, height: 80}}/>
                    <Text style={styles.titulo}>LinuxEasy</Text>
                </View>
                <View style={styles.cadastro}>
                    <Text style={styles.textoCadastro}>CADASTRO</Text>
                    <TextInput style={styles.input} placeholder="Nome"/>
                    <TextInput style={styles.input} placeholder="E-mail"/>
                    <TextInput style={styles.input}/>
                    <TextInput style={styles.input} secureTextEntry placeholder="********"/>
                    <TextInput style={styles.input} secureTextEntry placeholder="********"/>
                </View>
                <View >
                    <TouchableOpacity style={styles.botaoCadastro}>
                        <Text style={styles.botaoTexto}>CADASTRAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Text>VOLTAR</Text>
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
        paddingTop: 20
    },
    header: {
        flexDirection: 'row',
        margin: 8,
    },
    titulo: {
        fontSize: 35,
        fontWeight: 'bold',
        paddingTop: 10
    },
    input: {
        width: 350,
        height: 40,
        backgroundColor: '#ecf0f1',
        margin: 8,
        borderRadius: 10
    },
    cadastro: {
        justifyContent: 'center',
        paddingTop: 50,
        alignItems: 'center'
    },
    textoCadastro: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center',
        margin: 10
    },
    botaoCadastro: {
        backgroundColor: '#636e72',
        width: 250,
        height: 40,
        borderRadius: 15,
        margin: 15
    },
   
    botaoTexto: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 5
    }
})