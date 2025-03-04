import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "./auth/OnBoarding";
import Login from "./auth/Login";
import SplashScreen from "./auth/SplashScreen";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false}}>
        <Stack.Screen
          name="SplashScreen"
          options={{ headerShown: false, title: "SplashScreen" }}
          component={SplashScreen}
        />

        <Stack.Screen
          name="OnBoarding"
          options={{ headerShown: false, title: "OnBoarding" }}
          component={OnBoarding}
        />

        <Stack.Screen
          name="Login"
          options={{ headerShown: false, title: "Login" }}
          component={Login}
        />
      </Stack.Navigator>
  );
}
