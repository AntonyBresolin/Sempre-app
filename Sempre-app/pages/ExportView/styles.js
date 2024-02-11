import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    color: "white",
  },
  containerTitle: {
    marginTop: 10,
    backgroundColor: '#00008B',
    padding: 10,
    borderRadius: 5,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  botao_Itens: {
    marginTop: 10,
    marginLeft: 10,
  },
  opcao_botao: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
  },
  itens: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
  },
});

export default styles;
