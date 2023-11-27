import AsyncStorage from '@react-native-async-storage/async-storage';

export async function listAllFields() {
    try {
        const keys = await AsyncStorage.getAllKeys();
        const fieldKeys = keys.filter(key => key.startsWith('@fieldData:'));
        const fields = await Promise.all(
            fieldKeys.map(async (key) => {
                const jsonValue = await AsyncStorage.getItem(key);
                return jsonValue != null ? { key, ...JSON.parse(jsonValue) } : null;
            })
        );
        return fields;
    } catch (e) {
        console.error("Erro ao listar os campos", e);
        return [];
    }
}
