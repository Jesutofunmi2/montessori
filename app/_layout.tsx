import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "./auth/OnBoarding";
import Login from "./auth/Login";
import SplashScreen from "./auth/SplashScreen";
import GetStarted from "./auth/GetStarted";
import BioData from "./auth/BioData";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store";
import Home from "./main/Dashboard";
import Profile from "./main/Profile";
import Quest from "./main/Quest";
import Learning from "./main/Learning";
import SubjectDetail from "./main/SubjectDetail";

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function RootLayout() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Stack.Navigator initialRouteName="SplashScreen">
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
            name="GetStarted"
            options={{ headerShown: false, title: "GetStarted" }}
            component={GetStarted}
          />

          <Stack.Screen
            name="Login"
            options={{ headerShown: false, title: "Login" }}
            component={Login}
          />

          <Stack.Screen
            name="BioData"
            options={{ headerShown: false, title: "BioData" }}
            component={BioData}
          />

          <Stack.Screen
            name="Home"
            options={{ headerShown: false, title: "Home" }}
            component={Home}
          />

          <Stack.Screen
            name="Profile"
            options={{ headerShown: false, title: "Profile" }}
            component={Profile}
          />

          <Stack.Screen
            name="Quest"
            options={{ headerShown: false, title: "Quest" }}
            component={Quest}
          />

          <Stack.Screen
            name="Learning"
            options={{ headerShown: false, title: "Learning" }}
            component={Learning}
          />
          <Stack.Screen
            name="SubjectDetail"
            options={{ headerShown: false, title: "SubjectDetail" }}
            component={SubjectDetail}
          />
        </Stack.Navigator>
      </PersistGate>
    </Provider>
  );
}
