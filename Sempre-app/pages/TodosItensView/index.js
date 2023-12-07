import React, { useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import ItensView from '../ItensView';
import { useRoute } from '@react-navigation/native';
import { listExperimentsFromField } from '../../backend/listExperimentsFromField';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import exportToExcel from '../../backend/excel/exportToExcel';
import * as Sharing from 'expo-sharing';


const TodosItensView = () => {
    const route = useRoute();
    const [allExperiments, setAllExperiments] = useState([]);
    const { field } = route.params;

    const data = [
        ['Nome', 'Idade', 'Sexo'],
        ['João', 14, 'Masculino'],
        ['Maria', 12, 'Feminino'],
        ['José', 13, 'Masculino']
    ];      


    useEffect(() => {

        const fetchAllExperiments = async () => {
            const experiments = await listExperimentsFromField(field.key);
            setAllExperiments(experiments);
        };

        fetchAllExperiments();
    }, []);


    const handleClickExportExcel = async () => {
        try {
            const filePath = await exportToExcel(data, field.name);
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

        <ScrollView>
            <TouchableOpacity style={styles.botao} onPress={() => handleClickExportExcel()}>
                <Icon name='save-outline' size={26} color={"white"} />
                <Text style={styles.exportar}>Exportar excel</Text>
            </TouchableOpacity>
            {allExperiments.map((exp, index) => (
                <ItensView
                    key={index}
                    fieldKey={field.key}
                    fieldColumns={field.colunas}
                    experimentId={exp.id}
                    experimentName={exp.nome}
                />
            ))}
        </ScrollView>
    );
};

export default TodosItensView;
