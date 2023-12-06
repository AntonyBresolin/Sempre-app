import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { loadItemsOfExperiment } from '../../backend/loadItemsOfExperiment';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';


const ItensView = () => {
    const [itens, setItens] = useState([]);
    const route = useRoute();

    const { fieldKey, fieldColumns, experimentId, experimentName } = route.params;

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const loadedItems = await loadItemsOfExperiment(fieldKey, experimentId);
                setItens(loadedItems);
            } catch (error) {
                console.error('Erro ao carregar itens do experimento:', error);
            }
        };

        fetchItems();
    }, [fieldKey, experimentId]);

    // Dividir os itens em grupos
    const itemGroups = [];
    for (let i = 0; i < itens.length; i += fieldColumns) {
        itemGroups.push(itens.slice(i, i + fieldColumns));
    }

    const itemSize = Dimensions.get('window').width / 5;

    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, textAlign: 'center', margin: 10 }}>{experimentName}</Text>
            <ScrollView vertical={true} showsVerticalScrollIndicator={true}>
                {itemGroups.map((group, index) => (
                    <ScrollView key={index} horizontal={true} style={{ flexDirection: 'row' }}>
                        <View style={{
                            width: itemSize, height: itemSize, justifyContent: 'center', alignItems: 'center', margin: 1, backgroundColor: '#0F0'
                        }}>
                            <Text>Borda</Text>
                        </View>
                        {group.map((item, idx) => (
                            <View key={idx} style={{
                                width: itemSize,
                                height: itemSize,
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: 1,
                                backgroundColor: '#ddd'
                            }}>
                                <Text>{item.nome}</Text>
                            </View>
                        ))}
                        <View style={{
                            width: itemSize, height: itemSize, justifyContent: 'center', alignItems: 'center', margin: 1, backgroundColor: '#0F0'
                        }}>
                            <Text>Borda</Text>
                        </View>
                    </ScrollView>
                ))}
                <TouchableOpacity style={styles.botao} onPress={() => alert("Ainda não adicionado")}>
                    <Icon name='save-outline' size={26} color={"blue"} />
                    <Text style={styles.exportar}>Exportar</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default ItensView;
