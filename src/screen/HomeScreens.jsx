import { useState } from "react";
import { Button, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { styles } from "../lib/styles";



export const HomeScreen = ({ navigation }) => {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [telefone, settelefone] = useState();
  return (
    <View
      style={styles.container}
    >

      <text> Formulario </text>

      <TextInput
        label="nome "
        value={nome}
        onChangeText={setNome}
        keyboardType="numeric"
      />
      <TextInput
        label="email "
        value={email}
        onChangeText={setEmail}
        keyboardType="numeric"
      />

      <TextInput
        label="telefone"
        value={telefone}
        onChangeText={settelefone}
        keyboardType="numeric"
      />

      <Button
        title="cadastrar"
        onPress={() => navigation.navigate("Sobre")}
      />
    </View>
  );
};