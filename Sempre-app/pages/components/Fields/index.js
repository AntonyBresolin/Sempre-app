import React, { useState, useCallback } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { listAllFields } from '../../../backend/listAllFields';
import styles from "./styles";
import Add_Item from "../../../assets/images/icons/New_List.png";
import experiment from "../../../assets/images/icons/Experiment.png";
import Icon from 'react-native-vector-icons/Ionicons';
import { deleteFieldAndAllData } from '../../../backend/deleteFieldAndAllData';


export default function Listas({ navigation }) {
  const [fields, setFields] = useState([]);

  const fetchFields = async () => {
    const allFields = await listAllFields();
    setFields(allFields);
  };

  useFocusEffect(
    useCallback(() => {
      fetchFields();
      return () => { };
    }, [])
  );

  const handleClickExcluir = async (fieldName) => {
    try {
      await deleteFieldAndAllData(fieldName);
      Alert.alert('Campo removido com sucesso!');
      fetchFields(); 
    } catch (e) {
      Alert.alert('Erro', 'Erro ao remover campo');
    }
  };

  const onSelectField = (field) => {
    navigation.navigate('Listas', { fieldKey: field.key, fieldColumns: field.colunas });
  };

  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('Fields_add_field')}>
        <Image source={Add_Item} style={styles.imagem} />
        <Text style={styles.primeiro_item}>Criar um novo campo</Text>
      </TouchableOpacity>
      <Text style={styles.borda} />

      <View>
        {fields.map(field => (
          <TouchableOpacity
            key={field.key}
            style={styles.botao}
            onPress={() => onSelectField(field)
            }
          >
            <View style={styles.opcao_botao}>
              <View>
                <Image source={experiment} style={styles.imagem} />
                <Text style={styles.nome_Elemento}>{field.nome}</Text>
              </View>
              <TouchableOpacity style={styles.botao_Excluir} onPress={() => handleClickExcluir(field.nome)}>
                <Icon name="trash-outline" size={26} color="red" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
}
