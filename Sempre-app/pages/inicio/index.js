import React, { Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Entry from "../../assets/images/icons/Entry_List.png";
import Field from "../../assets/images/icons/Fields.png";
import Plant from "../../assets/images/icons/Planting.png";
import Export from "../../assets/images/icons/Export.png";
import Settings from "../../assets/images/icons/Settings.png";



export default function Inicio({ navigation }) {
  return (
    <>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Fields')}>
        <Image source={Field} style={styles.imagem} />
        <Text style={styles.item}> Campos</Text>
      </TouchableOpacity>
      {/*<TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Planting')}>
        <Image source={Plant} style={styles.imagem} />
        <Text style={styles.item}> Plantação</Text>
      </TouchableOpacity>*/}
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('ExportView')}>
        <Image source={Export} style={styles.imagem} />
        <Text style={styles.item}> Exportar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Configuration')}>
        <Image source={Settings} style={styles.imagem} />
        <Text style={styles.item}> Opções</Text>
      </TouchableOpacity>
    </>
  );
}
