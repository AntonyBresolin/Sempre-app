import AsyncStorage from '@react-native-async-storage/async-storage';

// Função para adicionar experimentos a um campo específico
export async function addExperimentToField(fieldKey, experiment) {
    try {
        // Recupera o campo atual da memória local
        const jsonValue = await AsyncStorage.getItem(fieldKey);
        let fieldData = jsonValue != null ? JSON.parse(jsonValue) : null;

        // Verifica se o campo existe
        if (!fieldData) {
            console.error("Campo não encontrado");
            return;
        }

        // Adiciona o experimento ao campo
        if (!fieldData.experiments) {
            fieldData.experiments = []; // Inicializa o array de experimentos se não existir
        }
        fieldData.experiments.push(experiment);

        // Salva as alterações de volta à memória local
        const updatedJsonValue = JSON.stringify(fieldData);
        await AsyncStorage.setItem(fieldKey, updatedJsonValue);

        console.log("Experimento adicionado com sucesso");
    } catch (e) {
        // Captura erros de gravação
        console.error("Erro ao adicionar experimento", e);
    }
}
