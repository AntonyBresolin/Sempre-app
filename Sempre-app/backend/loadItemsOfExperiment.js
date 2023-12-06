import AsyncStorage from '@react-native-async-storage/async-storage';

export async function loadItemsOfExperiment(fieldKey, experimentId) {
    try {
        const jsonValue = await AsyncStorage.getItem(fieldKey);
        const fieldData = jsonValue != null ? JSON.parse(jsonValue) : null;

        if (!fieldData || !fieldData.experiments) {
            console.error("Campo ou experimentos não encontrados");
            return [];
        }

        const experiment = fieldData.experiments.find(exp => exp.id === experimentId);

        if (!experiment) {
            console.error("Experimento não encontrado");
            return [];
        }
        return experiment.itens || [];
    } catch (e) {
        console.error("Erro ao carregar itens do experimento EM LoadITEMS", e);
        return [];
    }
}
