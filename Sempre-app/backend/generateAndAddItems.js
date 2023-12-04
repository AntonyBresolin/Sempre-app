import AsyncStorage from '@react-native-async-storage/async-storage';

export async function generateAndAddItems(fieldKey, experimentId, startNumber, itemCount) {
    try {
        const jsonValue = await AsyncStorage.getItem(fieldKey);
        let fieldData = jsonValue != null ? JSON.parse(jsonValue) : null;

        if (!fieldData || !fieldData.experiments) {
            console.error("Campo ou experimento não encontrado");
            return;
        }

        const experiment = fieldData.experiments.find(e => e.id === experimentId);
        if (!experiment) {
            console.error("Experimento não encontrado");
            return;
        }

        if (!experiment.itens) {
            experiment.itens = [];
        }

        for (let i = 1; i <= itemCount; i++) {
            experiment.itens.push({ nome: (startNumber + i).toString() });
        }

        const updatedJsonValue = JSON.stringify(fieldData);
        await AsyncStorage.setItem(fieldKey, updatedJsonValue);

        console.log(`${itemCount} itens adicionados ao experimento a partir do número ${startNumber}`);
    } catch (e) {
        console.error("Erro ao adicionar itens ao experimento", e);
    }
}
