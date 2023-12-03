import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from "./styles";

const Item = ({ experimentName }) => {
    const [itemAmount, setItemAmount] = useState("");
    const [itemStart, setItemStart] = useState("");

    return (
        <>
            <View >
                <Text style={styles.textTitle}>Adicionar um novo item ao Experimento</Text>
                <Text style={styles.textName}>{"nome"}</Text>
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
                <TouchableOpacity style={styles.botao} title="Adicionar Experimento">
                    <Text style={styles.text_botao}>Adicionar</Text>
                </TouchableOpacity>
            </SafeAreaView>

        </>
    );
};

export default Item;
