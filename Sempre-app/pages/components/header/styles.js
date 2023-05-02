import { StyleSheet } from "react-native";

export default StyleSheet.create({
    fundo: {
        backgroundColor: "#00b046",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 100,
        position: "relative",
    },
    imagem: {
        width: 80,
        height: 80,
        position: "absolute",
        left: 10,
    },
    botao: {
        position: "absolute",
        left: 5,
        top: 10,
    },
    titulo: {
        fontSize: 30,
        color: "#000",
        textAlign: "center",
    }
})