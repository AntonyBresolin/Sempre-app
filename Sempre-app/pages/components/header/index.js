import React, { SafeAreaView, StatusBar, View } from 'react-native';
import estilos from './styles';

export default function Header(){
    return(
        <SafeAreaView style={estilos.fundo}>
            <StatusBar />
        </SafeAreaView>
    );
}