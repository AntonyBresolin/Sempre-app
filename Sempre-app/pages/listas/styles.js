import { StyleSheet } from "react-native";

export default StyleSheet.create({
  botao: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  opcao_botao: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
  },
  primeiro_item: {
    width: "100%",
    textAlign: "justify",
    margin: 10,
    fontSize: 26,
    marginLeft: 70,
    marginBottom: 0,
  },
  borda: {
    borderColor: "gray",
    borderStyle: "solid",
    borderBottomWidth: 1,
  },
  imagem: {
    margin: 2,
    marginLeft: 10,
    width: 50,
    height: 50,
    position: "absolute",
  },
  nome_Elemento: {
    width: "100%",
    textAlign: "justify",
    margin: 10,
    fontSize: 26,
    marginLeft: 70,
    marginBottom: 0
  },
  botao_Editar: {
    marginRight: 10,
  },
});
