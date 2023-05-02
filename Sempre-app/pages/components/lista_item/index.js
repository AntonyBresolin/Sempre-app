import React from "react";
import { Image, SafeAreaView, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import experiment from "../../../assets/images/icons/Experiment.png";


export default function Lista_Item(){
    return <>
     <TouchableOpacity style={styles.botao}>
        <Image source={experiment} style={styles.imagem} />
        <Text style={styles.nome_Elemento}>Experimento 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao}>
        <Image source={experiment} style={styles.imagem} />
        <Text style={styles.nome_Elemento}>Experimento 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao}>
        <Image source={experiment} style={styles.imagem} />
        <Text style={styles.nome_Elemento}>Experimento 3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao}>
        <Image source={experiment} style={styles.imagem} />
        <Text style={styles.nome_Elemento}>Experimento 4</Text>
      </TouchableOpacity>
    </>
}