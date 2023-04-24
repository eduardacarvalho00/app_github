import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { Routes } from "./src/routes";
import Repos from "./src/screens/Repos";
import { SearchUsers } from "./src/screens/SearchUsers";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Routes />
    </NavigationContainer>
  );
}
