import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function createField(tamanhoColuna) {
    // Cria um novo array com base no tamanho da coluna fornecido
    const fieldArray = new Array(tamanhoColuna);

    // Converte o array para uma string JSON
    const jsonValue = JSON.stringify(fieldArray);

    try {
        // Salva a string JSON na memória local
        await AsyncStorage.setItem('@fieldData', jsonValue);
    } catch (e) {
        // Captura erros de gravação
        console.error("Erro ao salvar os dados", e);
    }

    return fieldArray;
}