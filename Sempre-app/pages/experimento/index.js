import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from "./styles";
import { useRoute } from '@react-navigation/native';
import { addExperimentToField } from '../../backend/addExperimentToField';


const Experimento = () => {
    const [nomeExperimento, setNomeExperimento] = useState('');
    const route = useRoute();
    const fieldKey = route.params.fieldKey;


    const handleCreateField = async () => {
        if (!nomeExperimento.trim()) {
            alert('Por favor, insira um nome para o experimento.');
            return;
        }
        await addExperimentToField(fieldKey, nomeExperimento);
        alert('Experimento adicionado com sucesso!');

        setNomeExperimento(''); 
    };

    return (
        <View>
            <Text style={styles.text_header}>Adicionar novo Experimento</Text>
            <Text style={styles.text}>Nome do Experimento</Text>
            <TextInput
                placeholderTextColor={"#CECECE"}
                placeholder="YSE"
                value={nomeExperimento}
                onChangeText={setNomeExperimento}
                style={styles.input}
            />
            <TouchableOpacity style={styles.botao} title="Adicionar Experimento" onPress={handleCreateField}>
                <Text style={styles.text_botao}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Experimento;
