import React, { Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Circle_Not_Checked from "../../../assets/images/icons/circle.png";
import Circle_Checked from "../../../assets/images/icons/check.png";

export default function Listas() {
  return (
    <>
      <TouchableOpacity style={styles.botao}>
        <Image source={Circle_Not_Checked} style={styles.imagem} />
        <Text style={styles.primeiro_item}>CH04IY3PZ22TLD1N2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao}>
        <Image source={Circle_Checked} style={styles.imagem} />
        <Text style={styles.primeiro_item}>CH04IY3PZ22TLD1N1</Text>
      </TouchableOpacity>
    </>
  );
}
