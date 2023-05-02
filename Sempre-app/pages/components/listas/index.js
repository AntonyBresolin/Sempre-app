import React, { Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Header from "../header";
import Item from "../lista_item";
import Add_Item from "../../../assets/images/icons/New_List.png";

export default function Listas() {
  return (
    <>
    <Header />
      <TouchableOpacity>
        <Image source={Add_Item} style={styles.imagem} />
        <Text style={styles.primeiro_item}>Criar uma nova lista</Text>
      </TouchableOpacity>
      <Text style={styles.borda} />
      <Item />
    </>
  );
}
