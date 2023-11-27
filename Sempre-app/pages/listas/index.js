import React, { Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Item from "../components/lista_item";
import Add_Item from "../../assets/images/icons/New_List.png";
import { useNavigation } from '@react-navigation/native'

export default function Listas() {
  const navigation = useNavigation();

  function handleClick() {
    //TODO - Criar um novo experimento em um campo
    { navigation.navigate("newExperiment")}
  }
  return (
    <>
      <TouchableOpacity onPress={handleClick}>
        <Image source={Add_Item} style={styles.imagem} />
        <Text style={styles.primeiro_item}>Criar uma nova lista</Text>
      </TouchableOpacity>
      <Text style={styles.borda} />
      <Item />
    </>
  );
}
