import React,{ Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    Linking
} from 'react-native'
import ListaNome from './ListaNome';

export default class HomeInicial extends Component{
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon:()=> (
            <Image source={require('../imagemLinux/if_home_126572.png')} style={{width: 30, height: 30}}/>
        )
    }
    
    constructor(props){
        super(props);
        this.state = {
            list: [
                {
                    key: '1',
                    name: 'IBM compra Red Hat por US$ 34 bilhões',
                    img:require('../imagemLinux/ibmRedHat.jpg'),
                    bg: '#e55039',
                    url: 'https://canaltech.com.br/negocios/ibm-compra-red-hat-em-maior-aquisicao-da-historia-da-industria-de-software-125781/'
            },
                {
                    key: '2',
                    name: 'Ex-astronauta fica rico com seu sistema operacional Ubuntu',
                    img:require('../imagemLinux/ubuntu.jpg'),
                    bg: '#6a89cc',
                    url: 'https://exame.abril.com.br/tecnologia/ex-astronauta-fica-rico-com-seu-sistema-operacional-ubuntu/'
                },
                {
                    key: '3',
                    bg: '#6a89cc'
                },
                {
                    key: '4',
                    bg: '#6a89cc'
                },
                {
                    key: '5',
                    bg: '#6a89cc'
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
                    renderItem={({item}) => <ListaNoticias data={item}/>}
                />
            </View>
        );
    }   
}

class ListaNoticias extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
        <TouchableHighlight style={[styles.containerEmpresa, {backgroundColor: this.props.data.bg}]} underlayColor="#ecf0f1" onPress={()=> Linking.openURL(this.props.data.url)}>
            <View style={styles.corpo}>
                <Image source={this.props.data.img} style={styles.imgTouch}/>
                    <Text style={styles.nome}>{this.props.data.name}</Text>
            </View>
        </TouchableHighlight>

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
    },
    containerEmpresa: {
        flex: 2,
        flexDirection: 'column',
        backgroundColor: '#FFF',
        height: 275,
        width: 390,
        margin: 8,
        borderRadius: 10
    },

    corpo: {
        flexDirection: 'column',
        margin: 5
    },

    imgTouch: {
        width: 355,
        height: 180,
        margin: 10,
        alignSelf: 'flex-start',
    },
    nome: {
        fontSize: 25,
        fontWeight: 'bold',
        alignItems: 'center',
    }
})