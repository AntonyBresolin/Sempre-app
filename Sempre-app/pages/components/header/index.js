import React, { Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import estilos from './styles';
import Return from '../../../assets/images/icons/return.png';

export default function Header(){
    return(
        <SafeAreaView style={estilos.fundo}>
            <TouchableOpacity style={estilos.botao}>
                <Image source={Return} style={estilos.imagem} />
            </TouchableOpacity>
            <Text style={estilos.titulo}>Titulo</Text>
            <StatusBar />
        </SafeAreaView>
    );
}