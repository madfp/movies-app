import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import React, { useEffect } from "react";
import { TamaguiProvider, Theme } from "tamagui";
import Provider from "@/components/provider";
import config from "@/tamagui.config";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider>
          <Theme name={"blue"}>
            <StatusBar style="auto" />
            <Slot />
          </Theme>
        </Provider>
      </GestureHandlerRootView>
    </TamaguiProvider>
  );
}
