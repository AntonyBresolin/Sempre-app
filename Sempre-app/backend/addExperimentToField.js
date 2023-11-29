import AsyncStorage from '@react-native-async-storage/async-storage';

export async function addExperimentToField(fieldKey, experimentName) {
    try {
        const jsonValue = await AsyncStorage.getItem(fieldKey);
        let fieldData = jsonValue != null ? JSON.parse(jsonValue) : null;


        if (!fieldData) {
            console.error("Campo não encontrado");
            return;
        }

        if (!fieldData.experiments) {
            fieldData.experiments = []; 
        }

        const newExperiment = {
            nome: experimentName
        };

        fieldData.experiments.push(newExperiment);

        const updatedJsonValue = JSON.stringify(fieldData);
        await AsyncStorage.setItem(fieldKey, updatedJsonValue);

        console.log("Experimento adicionado com sucesso");
    } catch (e) {
        console.error("Erro ao adicionar experimento", e);
    }
}
