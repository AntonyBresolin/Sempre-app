import AsyncStorage from '@react-native-async-storage/async-storage';

// Função para gerar e adicionar vários itens a um experimento
export async function generateAndAddItems(fieldKey, experimentId, startNumber, itemCount) {
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

        // Inicializa o array de itens se não existir
        if (!experiment.itens) {
            experiment.itens = [];
        }

        // Gera e adiciona os itens
        for (let i = 1; i <= itemCount; i++) {
            experiment.itens.push({ nome: (startNumber + i).toString() });
        }

        // Salva as alterações de volta à memória local
        const updatedJsonValue = JSON.stringify(fieldData);
        await AsyncStorage.setItem(fieldKey, updatedJsonValue);

        console.log(`${itemCount} itens adicionados ao experimento a partir do número ${startNumber}`);
    } catch (e) {
        // Captura erros de gravação
        console.error("Erro ao adicionar itens ao experimento", e);
    }
}
