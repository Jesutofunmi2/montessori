import React from "react";
import Page from "./page";
import { useFonts, Fredoka_400Regular, Fredoka_500Medium, Fredoka_700Bold } from "@expo-google-fonts/fredoka";
import { ActivityIndicator, View } from "react-native";

export default function App() {
   const [fontsLoaded] = useFonts({
      Fredoka_400Regular,
      Fredoka_500Medium,
      Fredoka_700Bold,
    });
    if (!fontsLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      );
    }
  return <Page />;
}
