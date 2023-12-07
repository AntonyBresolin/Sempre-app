import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { loadItemsOfExperiment } from '../../backend/loadItemsOfExperiment';
import { useRoute } from '@react-navigation/native';

const ItensView = (props) => {
    const [itens, setItens] = useState([]);
    const route = useRoute();

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
    }, [fieldKey, experimentId]);

    useEffect(() => {
        if (itens.length > 0) {
            const formattedData = formatDataForExcel();
            if (props.onDataReady) {
                props.onDataReady(formattedData);
            }
        }
    }, [itens]);

    const formatDataForExcel = () => {
        if (itens.length === 0) return [];

        let dataForExcel = [];
        dataForExcel = [experimentName]

        for (let i = 0; i < itens.length; i += fieldColumns) {
            let row = itens.slice(i, i + fieldColumns).map(item => item.nome);
            row.unshift('Borda');
            row.push('Borda');

            if ((i / fieldColumns) % 2 === 1) {
                row = ['Borda', ...row.slice(1, -1).reverse(), 'Borda'];
            }

            dataForExcel.push(row);
        }
        return dataForExcel;
    };

    const itemSize = Dimensions.get('window').width / 5;

    const renderRow = (items, rowIndex) => {
        let rowItems = ['Borda', ...items, 'Borda'];
        if (rowIndex % 2 === 1) {
            rowItems = rowItems.reverse();
        }
        return rowItems.map((item, idx) => (
            <View key={idx} style={getItemStyle(itemSize, item === 'Borda')}>
                <Text>{item !== 'Borda' ? item.nome : 'Borda'}</Text>
            </View>
        ));
    };

    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, textAlign: 'center', margin: 10 }}>{experimentName}</Text>
            <ScrollView vertical={true} showsVerticalScrollIndicator={true}>
                {itens.length > 0 && (
                    new Array(Math.ceil(itens.length / fieldColumns)).fill(null).map((_, rowIndex) => {
                        const startIdx = rowIndex * fieldColumns;
                        const endIdx = startIdx + fieldColumns;
                        const rowItems = itens.slice(startIdx, endIdx);
                        return (
                            <ScrollView key={rowIndex} horizontal={true} showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row' }}>
                                {renderRow(rowItems, rowIndex)}
                            </ScrollView>
                        );
                    })
                )}
            </ScrollView>
        </View>
    );
};

const getItemStyle = (itemSize, isBorder) => ({
    width: itemSize,
    height: itemSize,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
    backgroundColor: isBorder ? '#0F0' : '#ddd',
});

export default ItensView;
