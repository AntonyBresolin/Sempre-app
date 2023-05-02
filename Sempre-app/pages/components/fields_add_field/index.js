import React, { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function Fields_add_field() {
  return (
    <>
      <SafeAreaView style={styles.background}>
        <ScrollView>

          <Text style={styles.text}>Nome do Campo</Text>
          <TextInput
            placeholderTextColor={"#CECECE"}
            placeholder="CH04IY3PZ22TLD1N2"
            style={styles.input}
          />
          <Text style={styles.text}>Número de linhas</Text>
          <TextInput
            placeholderTextColor={"#CECECE"}
            placeholder="10"
            style={styles.input}
          />
          <Text style={styles.text}>Número de colunas</Text>
          <TextInput
            placeholderTextColor={"#CECECE"}
            placeholder="10"
            style={styles.input}
          />
          <Text style={styles.bordadura}>Bordadura</Text>

          <Text style={styles.text}>Linha</Text>
          <TextInput
            placeholderTextColor={"#CECECE"}
            placeholder="1, 10"
            style={styles.input_Linha_Coluna}
          />
          <Text style={styles.text}>Coluna</Text>
          <TextInput
            placeholderTextColor={"#CECECE"}
            placeholder="1, 10"
            style={styles.input_Linha_Coluna}
          />
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.text_botao}>Adicionar</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
