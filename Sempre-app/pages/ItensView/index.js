import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { loadItemsOfExperiment } from '../../backend/loadItemsOfExperiment';
import { useRoute, useIsFocused } from '@react-navigation/native';

const ItensView = (props) => {
    const [itens, setItens] = useState([]);
    const route = useRoute();
    const isFocused = useIsFocused();

    const fieldKey = props.fieldKey || route.params?.fieldKey;
    const fieldColumns = props.fieldColumns || route.params?.fieldColumns;
    const experimentId = props.experimentId || route.params?.experimentId;
    const experimentName = props.experimentName || route.params?.experimentName;

    useEffect(() => {
        if (fieldKey && experimentId) {
            const fetchItems = async () => {
                try {
                    const loadedItems = await loadItemsOfExperiment(fieldKey, experimentId);
                    setItens(loadedItems);
                } catch (error) {
                    console.error('Erro ao carregar itens do experimento:', error);
                }
            };
    
            fetchItems();
        }
    }, [fieldKey, experimentId, isFocused]);

    const invertOrderInOddRows = (group, rowIndex) => {
        return rowIndex % 2 === 0 ? group : [...group].reverse();
    };

    const itemGroups = [];
    for (let i = 0; i < itens.length; i += fieldColumns) {
        const group = itens.slice(i, i + fieldColumns);
        itemGroups.push(invertOrderInOddRows(group, itemGroups.length));
    }

    const itemSize = Dimensions.get('window').width / 5;

    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, textAlign: 'center', margin: 10 }}>{experimentName}</Text>
            <ScrollView vertical={true} showsVerticalScrollIndicator={true}>
                {itemGroups.map((group, index) => (
                    <ScrollView key={index} horizontal={true} showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row' }}>
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
                
            </ScrollView>
        </View>
    );
};

export default ItensView;
