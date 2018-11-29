import React,{Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    
} from 'react-native';
import firebase from './FirebaseConexao';

export default class Cadastra extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: '',
            email: '',
            idade: '',
            senha: '',
            senhas: ''
        };

        this.cadastrar = this.cadastrar.bind(this);

        firebase.auth().signOut();
    }

    cadastrar(){
        if(this.state.nome != '' && 
        this.state.email != '' &&
        this.state.idade != '' &&
        this.state.senha != '' &&
        this.state.senhas != ''
        ){
            firebase.auth().onAuthStateChanged((user) => {
                if(user){
                    firebase.database().ref('usuarios').child(user.uid).set({
                        nome: this.state.nome,
                        idade: this.state.idade,
                        senhas: this.state.senhas
                    });

                    alert('Usuário Cadastrado Com Sucesso')
                }
            })
            firebase.auth().createUserWithEmailAndPassword(
                this.state.email,
                this.state.senha
            ).catch((error) => {
                alert(error.code)
            })
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../imagemLinux/281018125456_128.png')} style={{width: 80, height: 80}}/>
                    <Text style={styles.titulo}>LinuxEasy</Text>
                </View>
                <View style={styles.cadastro}>
                    <Text style={styles.textoCadastro}>CADASTRO</Text>
                    <TextInput style={styles.input} placeholder="Nome" onChangeText={(nome) => this.setState({nome})}/>
                    <TextInput style={styles.input} placeholder="E-mail" onChangeText={(email) => this.setState({email})}/>
                    <TextInput style={styles.input} placeholder="idade" onChangeText={(idade) => this.setState({idade})}/>
                    <TextInput style={styles.input} secureTextEntry placeholder="********" onChangeText={(senha) => this.setState({senha})}/>
                    <TextInput style={styles.input} secureTextEntry placeholder="********" onChangeText={(senhas) => this.setState({senhas})}/>
                </View>
                <View >
                    <TouchableOpacity style={styles.botaoCadastro} onPress={this.cadastrar}>
                        <Text style={styles.botaoTexto}>CADASTRAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={require('../imagemLinux/voltar.png')} style={{width: 26, height: 26}} />
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