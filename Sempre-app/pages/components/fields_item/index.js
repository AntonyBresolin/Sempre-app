import React, { Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Circle_Not_Checked from "../../../assets/images/icons/circle.png";
import Circle_Checked from "../../../assets/images/icons/check.png";

import Add_Item from "../../../assets/images/icons/New_List.png";

export default function Listas() {
  return (
    <>
      <TouchableOpacity>
     <Image source={Add_Item} style={styles.imagem} />
        <Text style={styles.primeiro_item}>Criar um novo campo</Text>
      </TouchableOpacity>
      <Text style={styles.borda} />
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
