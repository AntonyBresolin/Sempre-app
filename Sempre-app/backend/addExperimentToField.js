import AsyncStorage from '@react-native-async-storage/async-storage';

function generateUniqueId(){
    return Math.floor(Math.random() * 100000) + 1;    

}


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
            id: generateUniqueId(),
            nome: experimentName
        };

        fieldData.experiments.push(newExperiment);

        const updatedJsonValue = JSON.stringify(fieldData);
        await AsyncStorage.setItem(fieldKey, updatedJsonValue);
    } catch (e) {
        console.error("Erro ao adicionar experimento", e);
    }
}
