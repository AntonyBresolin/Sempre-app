import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import styles from "./styles";
import createField from "../../../backend/createField";

export default function Fields_add_field() {
  const [fieldColumn, setFieldColumn] = useState('');
  const [fieldKey, setFieldKey] = useState('');

  const handleCreateField = async () => {
    if (!fieldKey.trim() || !fieldColumn.trim()) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const columnCount = parseInt(fieldColumn, 10);
    if (isNaN(columnCount) || columnCount <= 0) {
      alert('Por favor, insira um número válido de colunas.');
      return;
    }

    await createField(fieldKey, columnCount);
    alert('Campo criado com sucesso!');
    setFieldKey('');
    setFieldColumn('');
  };

  return (
    <>
      <SafeAreaView style={styles.background}>
        <ScrollView>
          <Text style={styles.text}>Nome do Campo</Text>
          <TextInput
            placeholderTextColor={"#CECECE"}
            placeholder="CH04IY3PZ22TLD1N2"
            value={fieldKey}
            onChangeText={setFieldKey}
            style={styles.input}
          />
          <Text style={styles.text}>Número de colunas</Text>
          <TextInput
            placeholderTextColor={"#CECECE"}
            placeholder="10"
            style={styles.input}
            keyboardType="numeric"
            value={fieldColumn}
            onChangeText={setFieldColumn}
          />
          <TouchableOpacity style={styles.botao} onPress={handleCreateField}>
            <Text style={styles.text_botao}>Adicionar</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
