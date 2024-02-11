import AsyncStorage from '@react-native-async-storage/async-storage';

export async function listItemsFromExperiment(fieldKey, experimentId) {
  try {
    const storageKey = fieldKey;
    const jsonValue = await AsyncStorage.getItem(storageKey);

    if (!jsonValue) {
      console.error(`Dados não encontrados para a chave: ${storageKey}`);
      return [];
    }

    let fieldData = JSON.parse(jsonValue);
    const experiment = fieldData.experiments.find(exp => exp.id === experimentId);

    if (experiment && experiment.itens) {
      return experiment.itens;
    } else {
      console.error("Experimento não encontrado ou sem itens", `ID do experimento: ${experimentId}`);
      return [];
    }
  } catch (e) {
    console.error("Erro ao listar os itens do experimento", e);
    return [];
  }
}
