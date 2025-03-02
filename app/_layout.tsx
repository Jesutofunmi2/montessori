import React from "react";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { SplashScreen } from "expo-router";

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);
  const router = useRouter();
  const segments = useSegments();
 
  useEffect(() => {
    if (segments[0] === undefined) {
      //router.replace("/auth/OnBoarding");
    }
  }, [segments]);
  return (
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false, title: "Auth" }}
        />

        <Stack.Screen
          name="auth/Login/index"
          options={{ headerShown: false }}
        />
      </Stack>
  );
}
