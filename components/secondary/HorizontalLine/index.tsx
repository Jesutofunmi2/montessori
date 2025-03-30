import { colors } from "@/constants";
import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Polygon } from "react-native-svg";

const HorizontalLineWithTriangle = () => {
  return (
    <View style={styles.container}>
      {/* Horizontal Line */}
      <View style={styles.line} />

      {/* Triangle */}
      <Svg height="10" width="20" style={styles.triangle}>
        <Polygon points="10,10 0,10 20,10" fill="#F0F4F8" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  line: {
    width: "100%",
    height: 2,
    backgroundColor: "#F0F4F8",
    position: "absolute",
    top: 5,
  },
  triangle: {
    position: "absolute",
    top: 50,
  },
});

export default HorizontalLineWithTriangle;
