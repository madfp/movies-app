import { Stack } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { useTheme } from "tamagui";

export default function Layout() {
  const theme = useTheme();
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: theme.blue7.get(),
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Favorites",
          headerTitleAlign: "center",
          headerLeft: () => <DrawerToggleButton tintColor="#fff" />,
        }}
      />

      <Stack.Screen
        name="movie/[id]"
        options={{
          title: "Details of the movie",
          headerTitleAlign: "center",
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="tv/[id]"
        options={{
          title: "Details of the TV show",
          headerTitleAlign: "center",
          headerBackTitle: "Back",
        }}
      />
    </Stack>
  );
}
