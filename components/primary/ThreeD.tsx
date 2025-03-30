import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For the arrow icon

const ThreeDCard = () => {
  return (
    <View style={styles.container}>
      {/* Background Layer for 3D Effect */}
      <View style={styles.shadowLayer} />

      {/* Main Card */}
      <TouchableOpacity style={styles.card}>
        <Text style={styles.text}>
          Hello Eniola! Are you ready for today’s learning? 🚀
        </Text>
        <Ionicons name="arrow-forward" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  shadowLayer: {
    position: "absolute",
    width: "90%",
    height: 70,
    backgroundColor: "#2d9640", // Darker green for shadow effect
    borderRadius: 15,
    bottom: -5, // Shift it slightly down for depth
    left: 5, // Shift slightly to the right
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    backgroundColor: "#58B368", // Green color
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10, // For Android shadow
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    flex: 1,
  },
});

export default ThreeDCard;
