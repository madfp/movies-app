import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Title } from "../../../tamagui.config";
import { useTheme } from "tamagui";
import { Link } from "expo-router";

export default function App() {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Title color={theme.blue7.get()}>Hola mundo</Title>
      <Link href={"/(drawer)/home/movie/1"}>Go to details</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
