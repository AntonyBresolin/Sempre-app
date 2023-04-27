import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import styles from "./style";

export default function Lista_Item(){
    return <SafeAreaView>
     <TouchableOpacity>
        <Text style={styles.nome_Elemento}>Criar uma nova lista</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.nome_Elemento}>Criar uma nova lista</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.nome_Elemento}>Criar uma nova lista</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.nome_Elemento}>Criar uma nova lista</Text>
      </TouchableOpacity>

    </SafeAreaView>
}