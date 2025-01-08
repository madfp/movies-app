import React from "react";
import { StyleSheet, View } from "react-native";
import { Title } from "@/tamagui.config";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "red" }}>
        <Title>Hello world</Title>
      </View>
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
