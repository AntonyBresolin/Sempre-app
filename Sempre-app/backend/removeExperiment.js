import AsyncStorage from '@react-native-async-storage/async-storage';

export async function removeExperimentFromField(fieldKey, experimentName) {
    try {
        const jsonValue = await AsyncStorage.getItem(fieldKey);
        let fieldData = jsonValue != null ? JSON.parse(jsonValue) : null;

        if (fieldData && fieldData.experiments) {
            fieldData.experiments = fieldData.experiments.filter(experiment => experiment.nome !== experimentName);
            const updatedJsonValue = JSON.stringify(fieldData);
            await AsyncStorage.setItem(fieldKey, updatedJsonValue);
        }
    } catch (e) {
        console.error("Erro ao remover experimento", e);
        throw e;
    }
}
