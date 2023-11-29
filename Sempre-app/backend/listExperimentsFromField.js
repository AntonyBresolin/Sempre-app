import AsyncStorage from '@react-native-async-storage/async-storage';

export async function listExperimentsFromField(fieldKey) {
    try {
        const jsonValue = await AsyncStorage.getItem(fieldKey);
        const fieldData = jsonValue != null ? JSON.parse(jsonValue) : null;

        if (fieldData && fieldData.experiments) {
            return fieldData.experiments;
        } else {
            console.error("Campo não encontrado ou sem experimentos");
            return [];
        }
    } catch (e) {
        console.error("Erro ao listar os experimentos", e);
        return []; 
    }
}
