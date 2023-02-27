import { Button, Image, Text, View } from "react-native";
import { styles } from "../lib/styles";

export const SobreScreen = ({ navigation }) => {
  return (
    <View>
      <Text> segunda tela</Text>

      <Image style={styles.Image}  source={{uri:"https://www.realmadrid.com/img/cc_160px/_2vc0339_20221005114036.jpg"}} />
      <Button
        title="Voltar "
        onPress={() => navigation.navigate("Home")}
      />
       
    </View>
  );
};