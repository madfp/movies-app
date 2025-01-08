import { DrawerToggleButton } from "@react-navigation/drawer";
import { Stack } from "expo-router";
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
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen
        name="index"
        options={{
          title: "My Favorite movies",
          headerTitleAlign: "center",
          headerLeft: () => <DrawerToggleButton tintColor="#fff" />,
        }}
      />
    </Stack>
  );
}
