import React, { Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Add_Item from "../../../assets/images/icons/New_List.png";

export default function Listas( {navigation}) {
  return (
    <>
      <TouchableOpacity onPress={() =>navigation.navigate('Fields_add_field')}>
        <Image source={Add_Item} style={styles.imagem} />
        <Text style={styles.primeiro_item}>Criar um novo campo</Text>
      </TouchableOpacity>
      <Text style={styles.borda} />

      
    </>
  );
}
