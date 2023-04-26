import React, { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Header from "../header";

export default function Inicio() {
  return (
    <>
    <Header />
      <TouchableOpacity>
        <Text style={styles.item}> Listas de Entrada</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.item}> Campos</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.item}> Plantação</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.item}> Exportar</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.item}> Opções</Text>
      </TouchableOpacity>
    </>
  );
}
