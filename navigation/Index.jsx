import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../src/screen/HomeScreens";
import { SobreScreen } from "../src/screen/SobreScreen";

const Stack = createNativeStackNavigator();
export const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Sobre" component={SobreScreen} />
    </Stack.Navigator>
  );
};