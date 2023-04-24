import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import Repos from "../screens/Repos";
import { SearchUsers } from "../screens/SearchUsers";
export function Routes() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name="SearchUsers" component={SearchUsers} />
      <Stack.Screen name="Repos" component={Repos} /> */}
    </Stack.Navigator>
  );
}
