import { NavigationContainer } from "@react-navigation/native";
import { RootNavigation } from "./navigation/Index";
export default function App() {
  return (

    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}