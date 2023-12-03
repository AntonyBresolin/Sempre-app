import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: 'black',
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    backgroundColor: '#E5E5E5',
    paddingTop: 5,
    paddingBottom: 5,
  },
    textName: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 10,
        backgroundColor: '#000',
    },
    input: {
        textAlign: "center",
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 20,
        marginRight: 20,
        height: 50,
        borderColor: "#000",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 30,
        backgroundColor: "#fff",
      },
        botao: {
            marginTop: 35,
            alignSelf: "center",
            borderColor: "#000",
            borderStyle: "solid",
            borderWidth: 2,
            borderRadius: 30,
            backgroundColor: "#32CD32",
            height: 50,
            width: 200,
            display: "flex",
            justifyContent: "center",
        },
        text_botao: {
            textAlign: "center",
            fontSize: 20,
            color: 'white',
            
        },
});

export default styles;
