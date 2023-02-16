import { Button, Text, View } from "react-native";

export const SobreScreen = ({ navigation }) => {
  return (
    <View>
      <Text> segunda tela</Text>
      <Button
        title="Voltar "
        onPress={() => navigation.navigate("Home")}
      />
       
    </View>
  );
};