import React,{Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native'

export default class TelaInicial extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../imagemLinux/281018125456_128.png')} style={{width: 150, height: 150}}/>
                    <Text style={styles.titulo}>LinuxEasy</Text>
                </View>
                <View style={styles.btn}>
                    <TextInput placeholder="LOGIN" style={styles.input} />
                    <TextInput placeholder="********" style={styles.input} secureTextEntry/>
                    <TouchableOpacity style={styles.btnLogar} onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.btnTexto}>LOGAR</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.gpBotoes}>
                    <TouchableOpacity style={styles.btnSub} onPress={() => this.props.navigation.navigate('Cadastra')}>
                        <Text style={styles.texto}>CADASTRAR</Text>
                    </TouchableOpacity>
                   
                    <TouchableOpacity style={styles.btnSub} onPress={()=> this.props.navigation.navigate('EsqueceuSenha')}>
                        <Text style={styles.texto}>ESQUECEU SENHA</Text>

                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7f8c8d',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    titulo: {
        fontSize: 35,
        fontWeight: 'bold',
        fontFamily: 'Open Sans'
    },
    header: {
        margin: 10,
        paddingBottom: 10
    },
    input: {
        width: 350,
        height: 40,
        backgroundColor: '#ecf0f1',
        margin: 8,
        borderRadius: 10
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnLogar: {
        backgroundColor: '#636e72',
        width: 250,
        height: 40,
        borderRadius: 15,
        margin: 15
    },
    btnTexto: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 5
    },
    gpBotoes:{
        flexDirection: 'row',
        margin: 15
    },
    btnSub: {
        marginLeft: 50,
        marginRight: 50
    },
    texto: {
        fontSize: 15,
        color: '#6c5ce7'
    }
})