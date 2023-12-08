import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import styles from "./styles";
import { generateAndAddItems } from '../../backend/generateAndAddItems';
import { useRoute } from '@react-navigation/native';


const Item = () => {
    const [itemAmount, setItemAmount] = useState("");
    const [itemStart, setItemStart] = useState("");
    const route = useRoute();
    const fieldKey = route.params.fieldKey;
    const experimentId = route.params.experimentId;
    const experimentName = route.params.experimentName;
    const fieldColumns = route.params.fieldColumns;

    const handleAddItems = async () => {
        const startNumber = parseInt(itemStart, 10);
        const itemCount = parseInt(itemAmount, 10);

        if (isNaN(startNumber) || isNaN(itemCount)) {
            Alert.alert("Erro", "Por favor, insira números válidos.");
            return;
        }

        try {
            await generateAndAddItems(fieldKey, experimentId, startNumber, itemCount, fieldColumns);
            Alert.alert("Sucesso", `${itemCount} itens adicionados ao experimento.`);
            setItemAmount("");
            setItemStart("");
        } catch (e) {
            Alert.alert("Erro", "Não foi possível adicionar os itens ao experimento.");
        }
    };


    return (
        <>
            <View >
                <Text style={styles.textTitle}>Adicionar um novo item ao Experimento</Text>
                <Text style={styles.textName}>{experimentName}</Text>
            </View>
            <View style={styles.borda} />

            <SafeAreaView>
                <Text style={styles.text}>Insira a quantidade de itens</Text>
                <TextInput
                    placeholderTextColor={"#CECECE"}
                    placeholder="10"
                    style={styles.input}
                    keyboardType="numeric"
                    value={itemAmount}
                    onChangeText={setItemAmount}
                />
                <Text style={styles.text}>Insira o inicio</Text>
                <TextInput
                    placeholderTextColor={"#CECECE"}
                    placeholder="10100"
                    style={styles.input}
                    keyboardType="numeric"
                    value={itemStart}
                    onChangeText={setItemStart}
                />
                <TouchableOpacity style={styles.botao} onPress={handleAddItems}>
                    <Text style={styles.text_botao}>Adicionar</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    );
};

export default Item;
