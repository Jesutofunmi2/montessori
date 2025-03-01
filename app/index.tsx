import React, { useState, useEffect } from "react";
import { colors } from "@/constants";
import { View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text } from "@/components";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/book.gif")}
        style={{ width: 250, height: 250 }}
      />
      <Text
        text={"Nurture House Montessori"}
        color={colors.white}
        fontSize={52}
        fontFamily="Fredoka-Bold"
        textAlign="center"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 150,
    backgroundColor: colors.green500,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreen;
