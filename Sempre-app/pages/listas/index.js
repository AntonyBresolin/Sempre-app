import React, { Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Item from "../components/lista_item";
import Add_Item from "../../assets/images/icons/New_List.png";

export default function Listas() {
  return (
    <>
      <TouchableOpacity>
        <Image source={Add_Item} style={styles.imagem} />
        <Text style={styles.primeiro_item}>Criar uma nova lista</Text>
      </TouchableOpacity>
      <Text style={styles.borda} />
      <Item />
    </>
  );
}
