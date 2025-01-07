import { Drawer } from "expo-router/drawer";
import { colorTokens } from "@tamagui/themes";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
        },
        drawerActiveBackgroundColor: colorTokens.dark.blue.blue7,
        drawerActiveTintColor: "#fff",
        drawerStatusBarAnimation: "slide",
        drawerLabelStyle: { marginLeft: -5 },
      }}
    >
      <Drawer.Screen
        name="home"
        options={{
          title: "Moviestar",
          headerTitleAlign: "center",
          drawerIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="favorites"
        options={{
          title: "My Favorites",
          headerTitleAlign: "center",
          drawerIcon: ({ color, size }) => (
            <AntDesign name="heart" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
