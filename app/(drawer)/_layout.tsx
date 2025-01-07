import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="(home)/index"
        options={{
          drawerLabel: "Home",
          title: "Home",
          headerTitleAlign: "center",
        }}
      />
      <Drawer.Screen
        name="(favorite)/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Favorite",
          title: "Favorite",
          headerTitleAlign: "center",
        }}
      />
    </Drawer>
  );
}
