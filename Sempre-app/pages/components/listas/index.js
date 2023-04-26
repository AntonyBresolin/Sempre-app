import React, { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Header from "../header";

export default function Listas() {
  return (
    <>
    <Header />
      <TouchableOpacity>
        <Text style={styles.primeiro_item}>Criar uma nova lista</Text>
      </TouchableOpacity>
      <Text style={styles.borda}> </Text>
    </>
  );
}
