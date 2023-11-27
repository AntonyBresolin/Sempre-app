import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function createField(fieldKey, tamanhoColuna) {
    const fieldData = {
        nome: fieldKey,
        colunas: new Array(tamanhoColuna).fill(null) // Inicializa o array com valores nulos
    };

    const jsonValue = JSON.stringify(fieldData);
    const storageKey = `@fieldData:${fieldKey}`; // Adiciona um prefixo para a chave

    try {
        await AsyncStorage.setItem(storageKey, jsonValue);
        console.log("Campo salvo com sucesso");
    } catch (e) {
        console.error("Erro ao salvar os dados", e);
    }

    return fieldData;
}
