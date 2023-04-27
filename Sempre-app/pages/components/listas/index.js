import React, { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Header from "../header";
import Item from "../lista_item";

export default function Listas() {
  return (
    <>
    <Header />
      <TouchableOpacity style={}>
        <Text style={styles.primeiro_item}>Criar uma nova lista</Text>
      </TouchableOpacity>
      <Text style={styles.borda} />
      <Item />
    </>
  );
}
