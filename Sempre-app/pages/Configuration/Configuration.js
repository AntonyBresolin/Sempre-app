import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from "./styles";
import { useAppContext } from '../Contexts/AppContext';


const Configuration = ({ navigation }) => {
  const { setItemsPerRow } = useAppContext();
  const [inputValue, setInputValue] = useState('');


  const handleSave = () => {
    const itemCount = parseInt(inputValue, 10);
    if (!isNaN(itemCount) && itemCount > 0) {
      setItemsPerRow(itemCount);
      alert('Configuração salva com sucesso!');
    } else {
      alert('Por favor, insira um número válido.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Quantos itens exibir por vez:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Digite um número"
      />
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
};

export default Configuration;
