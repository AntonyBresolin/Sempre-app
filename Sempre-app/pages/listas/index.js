import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import { listExperimentsFromField } from '../../backend/listExperimentsFromField'; // Importe a função
import Add_Item from "../../assets/images/icons/New_List.png";
import experiment from "../../assets/images/icons/Experiment.png";
import Icon from 'react-native-vector-icons/Ionicons';


export default function Listas() {
  const [experiments, setExperiments] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();
  const fieldKey = route.params.fieldKey;

  const handleClickExcluir = () => {
    alert('Excluir');
  }

  const handleClickEditExperiment = () => {
    alert('Editar');
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
      {experiments.map((experimento, index) => (
        <TouchableOpacity key={index} style={styles.botao}>
          <View>
            <Image source={experiment} style={styles.imagem} />
            <Text style={styles.nome_Elemento}>{experimento.nome}</Text>
          </View>
          <View style={styles.opcao_botao}>
            <TouchableOpacity style={styles.botao_Editar} >
              <Icon name="brush-outline" size={26} color="gray" onPress={handleClickEditExperiment} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao_Excluir} onPress={handleClickExcluir}>
              <Icon name="trash-outline" size={26} color="red" />
            </TouchableOpacity>
          </View>

        </TouchableOpacity>
      ))}
    </>
  );
}
