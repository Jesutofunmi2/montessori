import { Text } from "@/components/primary";
import { colors } from "@/constants";
import { RootState } from "@/store";
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";

const Greeting = () => {
  const { answers } = useSelector(
    (state: RootState) => state.bioDataAnswerReducer
  );
  return (
    <View style={styles.greeting}>
      <Text
        style={styles.greetingText}
        text={`Hello ${answers[2]}! Are you ready for today’s learning? 🚀`}
      />

      <TouchableOpacity>
        <MaterialCommunityIcons name="arrow-right" size={26} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  greeting: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    backgroundColor: colors.green500,
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,

    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.5)",
  },
  greetingText: {
    color: colors.white,
    fontSize: 20,
    flex: 1,
    fontFamily: "Fredoka_500Medium",
  },
});

export default Greeting;
