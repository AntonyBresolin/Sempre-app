import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import { listExperimentsFromField } from '../../backend/listExperimentsFromField'; // Importe a função
import Add_Item from "../../assets/images/icons/New_List.png";
import experiment from "../../assets/images/icons/Experiment.png";
import Icon from 'react-native-vector-icons/Ionicons';
import { removeExperimentFromField } from '../../backend/removeExperiment';


export default function Listas() {
  const [experiments, setExperiments] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();
  const fieldKey = route.params.fieldKey;
  const fieldColumns = route.params.fieldColumns;


  const handleClickViewItens = (experimentId, experimentName) => {
    navigation.navigate('ItensView', { fieldKey: fieldKey, fieldColumns: fieldColumns, experimentId: experimentId, experimentName: experimentName });
  }

  const handleClickExcluir = (experimentName) => {
    return async () => {
      try {
        await removeExperimentFromField(fieldKey, experimentName);
        const updatedExperiments = await listExperimentsFromField(fieldKey);
        setExperiments(updatedExperiments);
      } catch (e) {
        alert('Erro ao remover experimento');
      }
    };
  };


  const handleClickEditExperiment = (experimentId, experimentName) => {
    navigation.navigate('Item', { fieldKey: fieldKey, experimentId: experimentId, experimentName: experimentName, fieldColumns: fieldColumns });
  }

  useFocusEffect(
    React.useCallback(() => {
      const fetchExperiments = async () => {
        const experiments = await listExperimentsFromField(fieldKey);
        setExperiments(experiments);
      };

      fetchExperiments();
    }, [fieldKey])
  );

  function handleAddExperiment() {
    navigation.navigate('Experimento', { fieldKey });
  }

  return (
    <>
      <TouchableOpacity onPress={handleAddExperiment}>
        <Image source={Add_Item} style={styles.imagem} />
        <Text style={styles.primeiro_item}>Criar um novo experimento</Text>
      </TouchableOpacity>
      <Text style={styles.borda} />
      <ScrollView>
        {experiments.map((experimento, index) => (
          <TouchableOpacity key={index} style={styles.botao} onPress={() => handleClickViewItens(experimento.id, experimento.nome)}>
            <View>
              <Image source={experiment} style={styles.imagem} />
              <Text style={styles.nome_Elemento}>{experimento.nome}</Text>
            </View>
            <View style={styles.opcao_botao}>
              <TouchableOpacity style={styles.botao_Editar} onPress={() => handleClickEditExperiment(experimento.id, experimento.nome)}>
                <Icon name="add-outline" size={26} color="green" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.botao_Excluir} onPress={handleClickExcluir(experimento.nome)}>
                <Icon name="trash-outline" size={26} color="red" />
              </TouchableOpacity>
            </View>

          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
}
