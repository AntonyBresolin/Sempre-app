import AsyncStorage from '@react-native-async-storage/async-storage';

// Função para adicionar um item a um experimento específico em um campo
export async function addItemToExperiment(fieldKey, experimentId, itemName) {
    try {
        // Recupera o campo da memória local
        const jsonValue = await AsyncStorage.getItem(fieldKey);
        let fieldData = jsonValue != null ? JSON.parse(jsonValue) : null;

        // Verifica se o campo e o experimento existem
        if (!fieldData || !fieldData.experiments) {
            console.error("Campo ou experimento não encontrado");
            return;
        }

        // Encontra o experimento específico
        const experiment = fieldData.experiments.find(e => e.id === experimentId);
        if (!experiment) {
            console.error("Experimento não encontrado");
            return;
        }

        // Adiciona o item ao experimento
        if (!experiment.itens) {
            experiment.itens = []; // Inicializa o array de itens se não existir
        }
        experiment.itens.push({ nome: itemName });

        // Salva as alterações de volta à memória local
        const updatedJsonValue = JSON.stringify(fieldData);
        await AsyncStorage.setItem(fieldKey, updatedJsonValue);

        console.log("Item adicionado com sucesso ao experimento");
    } catch (e) {
        // Captura erros de gravação
        console.error("Erro ao adicionar item ao experimento", e);
    }
}
