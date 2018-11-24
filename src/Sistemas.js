import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
    Linking
} from 'react-native';
import ListaNome from './ListaNome'

export default class Sistemas extends Component {
    static navigationOptions = {
        drawerLabel: 'Sistemas Operacionais',
        drawerIcon:() => (
            <Image source={require('../imagemLinux/sos.png')} style={{width: 30, height: 30}}/>
        )
    }
    constructor(props){
        super(props);
        this.state = {
            list: [
                {
                    key: 1,
                    nome: 'Ubuntu',
                    img:require('../imagemLinux/ubuntu.png'),
                    descri: 'Ubuntu é um sistema operacional ou sistema \noperativo de código aberto, construído a partir \ndo núcleo Linux, baseado no Debian e  utiliza \nGNOME como ambiente de desktop de sua mais \nrecente versão com suporte de longo prazo.',
                    url: 'https://www.ubuntu.com/',
                    bg: '#fd9644',
                },
                {
                    key: 2,
                    nome: 'Debian',
                    img:require('../imagemLinux/debian.png'),
                    descri:'Debian anteriormente chamado de Debian GNU\n/Linux e hoje apenas de Debian, é um sistema\n operacional composto inteiramente de softw-\nare livre. É mantido oficialmente pelo Projeto \nDebian. O projeto recebe ainda apoio de outros \nindivíduos e organizações em todo mundo. O \ngrupo distribui ainda núcleos Unix-like, como \no Debian GNU/kFreeBSD e o Debian GNU/Hurd.',
                    url: 'https://www.debian.org/index.pt.html',
                    bg: '#ff6b6b'
                },
                {
                    key: 3,
                    nome: 'Mint',
                    img:require('../imagemLinux/mint.png'),
                    descri:'Linux Mint é uma distribuição Linux irlandesa. \nPossui duas versões: uma baseada em Ubuntu \n(com o qual é totalmente compatível e partilha \nos mesmos repositórios) e outra versão base-\nada em Debian. Suporta muitos idiomas, inclui-\nndo a língua portuguesa, e utiliza o Cinnamon \ncomo seu principal ambiente de desktop.',
                    url: 'https://linuxmint.com/',
                    bg: '#55efc4'
                },
                {
                    key: 4,
                    nome: 'Fedora',
                    img:require('../imagemLinux/fedora.png'),
                    descri:' Fedora é um sistema operacional ou sistema \noperativo Linux. O sistema operacional Fedora \nLinux é software livre e de código aberto, e os\n programas disponíveis dentro de seu repositó-\nrio de programas também são programas livres \nque aderem a uma licença livre',
                    url: 'https://getfedora.org/pt_BR/',
                    bg: '#74b9ff'
                },
                {
                    key: 5,
                    nome: 'OpenSuse',
                    img:require('../imagemLinux/OpenSource.png'),
                    descri:'openSUSE é um sistema operacional baseado \nno núcleo Linux, desenvolvido pela comunidade openSUSE de forma gratuita.',
                    url: 'https://www.opensuse.org/',
                    bg: '#1dd1a1'
                
                },
                {
                    key: 6,
                    nome: 'RedHat',
                    img:require('../imagemLinux/redHat.png'),
                    descri:'O Red Hat Enterprise Linux é um sistema oper-\nacional ou sistema operativo Linux com foco \npara o mercado corporativo. É desenvolvido \npela empresa Red Hat.',
                    url: 'hhttps://www.redhat.com/pt-br',
                    bg: '#e84118'
                },
                {
                    key: 7,
                    nome: 'CentOs',
                    img:require('../imagemLinux/centos.png'),
                    descri:'O CentOS, abreviação de Community ENTerpri-\nse Operating System, é uma distribuição Linux \nde classe corporativa derivada de códigos fon-\nte gratuitamente distribuídos pela Red Hat Ent-\nerprise Linux e mantida pelo CentOS Project. \nA numeração das versões é baseada na numer-\nação do Red Hat Enterprise ',
                    url: 'https://www.centos.org/',
                    bg: '#a29bfe'
                },
                {
                    key: 8,
                    nome: 'Arch Linux',
                    img:require('../imagemLinux/arch.png'),
                    descri:'Arch Linux (ou Arch) é uma distribuição Linux \npara computadores com arquitetura x86-64.\n Desenvolvido inicalmente pelo canadense Judd\n Vinet, esse sistema operacional se apresenta\n de maneira diferente de outros, como Windows\n e MacOS.',
                    url: 'https://www.archlinux.org/',
                    bg: '#74b9ff'
                },
                {
                    key: 9,
                    nome: 'Kali Linux',
                    img:require('../imagemLinux/kali.png'),
                    descri:' É voltado principalmente para auditoria e segu-\nrança de computadores em geral. É desenvolvi-\ndo e mantido pela Offensive Security Ltd. Desde 21 de janeiro de 2016, é uma distribuição "rolling-release".',
                    url: 'https://www.kali.org/',
                    bg: '#54a0ff'
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
                    renderItem={({item}) => <ListaSistema data={item} />}
                />
            </View>
        );
    }
}

class ListaSistema extends Component {
    render(){
        return(
            <View style={[styles.containerSistema, {backgroundColor: this.props.data.bg}]}>
                <Image source={this.props.data.img} style={styles.image}/>
                <View style={styles.containerDesc}>
                    <Text style={styles.tituloSistema}>{this.props.data.nome}</Text>
                    <Text style={styles.desc}>{this.props.data.descri}</Text>
                    <TouchableOpacity onPress={() => Linking.openURL(this.props.data.url)} style={styles.btnLi}><Text style={styles.btnText}>Mais Informações</Text></TouchableOpacity>

                </View>
            
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
    },
    containerSistema:{
        flex: 1,
        flexDirection: 'row',
        paddingTop: 15,
        borderRadius: 5,
        margin: 10
    },
    image: {
        width: 80,
        height: 80,
        margin: 8,
        borderRadius: 40
    },
    containerDesc:{
        flexDirection: 'column',
        marginLeft: 5
    },
    tituloSistema: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 80
    },
    desc: {
        fontWeight: '400',
        textAlign: 'justify'
    },
    btnLi:{
        alignSelf: 'flex-start',
        paddingTop: 20,
    },
    btnText: {
        backgroundColor: '#576574',
        color: '#c8d6e5',
        marginBottom: 15,
        height: 25,
        borderRadius: 10,
        width: 125,
        alignItems: 'center',
        textAlign: 'center'
    }
})