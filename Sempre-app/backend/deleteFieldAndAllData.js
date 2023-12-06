import AsyncStorage from '@react-native-async-storage/async-storage';

export async function deleteFieldAndAllData(fieldKey) {
    const storageKey = `@fieldData:${fieldKey}`; // A chave usada para armazenar o campo no AsyncStorage

    try {
        await AsyncStorage.removeItem(storageKey);
        console.log("Campo e todos os dados relacionados foram removidos com sucesso");
    } catch (e) {
        console.error("Erro ao remover o campo e seus dados", e);
    }
}
