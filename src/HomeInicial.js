import React,{ Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Image,
    Text,
    TouchableOpacity
} from 'react-native'
import ListaNome from './ListaNome'

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
                {key: '1', name: 'Thiago', img:require('../imagemLinux/281018125456_128.png')},
                {key: '2', name: 'if_home_126572if_home_126572if_home_126572Thiago', img:require('../imagemLinux/281018125456_128.png')},
                {key: '3', name: 'Thiago', img:require('../imagemLinux/281018125456_128.png')},
                {key: '4', name: 'Thiago', img:require('../imagemLinux/281018125456_128.png')},
                {key: '5', name: 'Thiago', img:require('../imagemLinux/281018125456_128.png')},
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
                    renderItem={(item) => <ListaNome data={item}/>}
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
        flex: 1,
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