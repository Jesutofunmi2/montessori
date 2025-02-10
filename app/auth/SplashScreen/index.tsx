import React, { useState, useEffect } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProgressiveBar } from "@/components";

const SplashScreen = () => {
  const [progress, setProgress] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          //navigation.replace("Home");
          return 100;
        }
        return oldProgress + 10;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <ImageBackground
      source={require("../../../assets/images/icon.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <ProgressiveBar progress={progress} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
    container: {
        width: "80%",
        alignItems: "center",
      },
})

export default SplashScreen;