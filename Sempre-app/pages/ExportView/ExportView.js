import React, { useCallback, useState, useEffect } from 'react';
import styles from "./styles";
import { Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { listAllFields } from '../../backend/listAllFields';
import { listItemsFromExperiment } from '../../backend/listItemsFromExperiment';
import { listExperimentsFromField } from '../../backend/listExperimentsFromField';
import experiment from "../../assets/images/icons/Experiment.png";
import Icon from 'react-native-vector-icons/Ionicons';
import exportToExcel from '../../backend/excel/exportToExcel';
import * as Sharing from 'expo-sharing';

const ExportView = () => {
  const [fields, setFields] = useState([]);

  const fetchFields = async () => {
    const allFields = await listAllFields();
    setFields(allFields);
  };

  useFocusEffect(
    useCallback(() => {
      fetchFields();
    }, [])
  );

  const handleExport = async (field) => {
    try {
      const fieldKeyAsString = String(field.key);
      const experiments = await listExperimentsFromField(fieldKeyAsString);

      const dataForExcel = await Promise.all(experiments.map(async (exp) => {
        const items = await listItemsFromExperiment(fieldKeyAsString, exp.id);
        return formatDataForExport(exp.nome, items, field.colunas);
      }));

      const flattenedData = dataForExcel.flat();
      const filePath = await exportToExcel(flattenedData, field.nome);

      if (!(await Sharing.isAvailableAsync())) {
        alert('A opção de compartilhamento não está disponível em seu dispositivo.');
        return;
      }
      await Sharing.shareAsync(filePath);

    } catch (error) {
      console.error("Erro ao exportar o arquivo Excel:", error);
      alert('Erro ao exportar o arquivo.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerTitle}>
        <Icon name='save-outline' size={26} color={"white"} />
        <Text style={styles.titulo}>Exportar</Text>
      </View>
      {fields.map((field) => (
        <TouchableOpacity
          key={field.key}
          style={styles.botao}
          onPress={() => handleExport(field)}
        >
          <View style={styles.opcao_botao}>
            <Image source={experiment} style={styles.imagem} />
            <Text style={styles.nome_Elemento}>{field.nome}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const formatDataForExport = (experimentName, items, numColumns) => {
  // Esta função deve transformar os itens em um formato que corresponda à exibição desejada
  const formattedData = [];
  formattedData.push([experimentName]);

  for (let i = 0; i < items.length; i += numColumns) {
    const rowItems = items.slice(i, i + numColumns);
    const row = ['Borda', ...rowItems.map(item => item.nome), 'Borda'];
    if ((i / numColumns) % 2 === 1) {
      row.reverse();
    }
    formattedData.push(row);
  }
  formattedData.push([]);
  return formattedData;
};

export default ExportView;
