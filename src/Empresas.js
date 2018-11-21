import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Empresas extends Component {
    static navigationOptions = {
        drawerLabel: 'Empresas',
        drawerIcon:()=> (
            <Image source={require('../imagemLinux/if_companies_45362.png')} style={{width: 30, height: 30}}/>
        )
    }
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            list: [
                {
                    key: 1, 
                    nome: 'F13 Tecnologia',
                    img:require('../imagemLinux/F13.jpg'),
                    desc: 'Uma empresa que apresenta de forma \n dinâmica e criativa, de trabalhar com \nGNU/Linux. ',
                    bg: '#1abc9c',
                    
                    
                },
                {key: 2, bg: '#1abc9c'},
                {key: 3, bg: '#1abc9c'},
                {key: 4, bg: '#1abc9c'},
                {key: 5, bg: '#1abc9c'},

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
                    renderItem={({item}) => <ListaEmpresa data={item}/>}
                />
            </View>
        );
    }
}

class ListaEmpresa extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    static navigationOptions = {
        title: 'Sobre'
    };

    render(){
        
        return(
        <TouchableHighlight style={[styles.containerEmpresa, {backgroundColor: this.props.data.bg}]} onPress={() => this.props.navigation.navigate('TelaInicial')} underlayColor="#ecf0f1">
            <View style={styles.corpo}>
                <Image source={this.props.data.img} style={styles.imgTouch}/>
                <View style={styles.coNome}>
                    <Text style={styles.nome}>{this.props.data.nome}</Text>
                    <Text numberOfLines={3}>{this.props.data.desc}</Text>
                </View>
            </View>
       </TouchableHighlight>
        );
    }
}


class SobreEmpresa extends Component{
    
    render(){
        return(
            <View>
                <Text>Ols</Text>
            </View>
        );
    }
}

const Empresa = StackNavigator({
    Empresas: {
        screen: Empresas
    },
    SobreEmpresa: {
        screen: SobreEmpresa
    }
},{
    headerMode: "none"
})
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
    },
    containerEmpresa: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        height: 100,
        width: 390,
        margin: 8,
        borderRadius: 10
    },
    imagems: {
        width: 70,
        height: 70,
        margin: 10,
        alignSelf: 'flex-start'

    },
    corpo: {
        flexDirection: 'row',
        margin: 5
    },
    coNome: {
        flexDirection: 'column',
        marginLeft: 5
    },
    imgTouch: {
        width: 70,
        height: 70,
        margin: 10,
        alignSelf: 'flex-start',
        borderRadius: 10
    },
    nome: {
        fontSize: 25,
        fontWeight: 'bold',
        alignItems: 'center'
    }
})
