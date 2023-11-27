import React, { Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Circle_Not_Checked from "../../assets/images/icons/Circle_Not_Check.png";
import Circle_Checked from "../../assets/images/icons/Circle_Checked.png";
import { useState } from "react";



export default function Listas({ navigation }) {
  const [checked, setChecked] = useState('first');
  return (
    <>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Fields_item')}>
        <Image source={Circle_Not_Checked} style={styles.imagem} />
        <Text style={styles.primeiro_item}>Experimento 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao}>
        <Image source={Circle_Not_Checked} style={styles.imagem} />
        <Text style={styles.primeiro_item}>Experimento 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao}>
        <Image source={Circle_Not_Checked} style={styles.imagem} />
        <Text style={styles.primeiro_item}>Experimento 3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao}>
        <Image source={Circle_Not_Checked} style={styles.imagem} />
        <Text style={styles.primeiro_item}>Experimento 4</Text>
      </TouchableOpacity>
    </>
  );
}
