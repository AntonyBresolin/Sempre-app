import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import ItensView from '../ItensView';
import { useRoute } from '@react-navigation/native';
import { listExperimentsFromField } from '../../backend/listExperimentsFromField';


const TodosItensView = () => {
    const route = useRoute();
    const [allExperiments, setAllExperiments] = useState([]);
    const { field } = route.params;

    useEffect(() => {
        
        const fetchAllExperiments = async () => {
            const experiments = await listExperimentsFromField(field.key);
            setAllExperiments(experiments);
        };

        fetchAllExperiments();
    }, []);

    return (
        
        <ScrollView>
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
