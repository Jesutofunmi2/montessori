import { globalStyles } from "@/assets/globalStyles";
import React from "react";
import { View, TouchableOpacity, StyleSheet, Animated } from "react-native";
import LearningCard from "../../LearningHeader";
import { colors, layout } from "@/constants";
import usePointAndTell from "./usePointAndTell";
import { Button, Text } from "@/components/primary";
import { rodColors, rodPoint } from "@/constants/Slides";
import NextIcon from "@/assets/svgs/NextIcon";

const PointAndTell = () => {
  const { targetRodIndex, message, handleTap, animations, showAll } =
    usePointAndTell();
    const isLastRod = targetRodIndex === rodPoint.length;
  console.log(targetRodIndex);

  return (
    <View style={[globalStyles.container, globalStyles.body]}>
      <LearningCard
        title={`This is ${rodPoint[targetRodIndex].label}. Touch it and say ${rodPoint[targetRodIndex].label}`}
        enabled={true}
      />

      {/* Rod Display */}
      <View style={styles.rodContainer}>
        {[...(targetRodIndex === 3 ? Array(3).keys() : [targetRodIndex])].map((rowIndex) => (
          <TouchableOpacity key={rowIndex} onPress={() => handleTap(rowIndex)}>
            <Animated.View
              style={[
                styles.rodRow,
                {
                  opacity: animations[rowIndex] || 1,
                  transform: [{ translateY: rowIndex * 1 }],
                },
              ]}
            >
              {[...Array(rowIndex + 1)].map((__, colIndex) => (
                <View
                  key={colIndex}
                  style={[
                    styles.rod,
                    { backgroundColor: rodColors[colIndex % 2].main },
                  ]}
                />
              ))}
            </Animated.View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Feedback Message */}
      {message && !isLastRod ? (
        <View
          style={[
            styles.buttonContainer,
            message === "❌ Try again!" ? styles.wrongRod : styles.correctRod,
          ]}
        >
          <Text
            text={message}
            fontFamily="Fredoka_500Medium"
            color={message === "❌ Try again!" ? colors.red500 : colors.green500}
          />
        </View>
      ) : targetRodIndex === 3 ? (
        <View style={styles.wrap}>
          <TouchableOpacity onPress={() => {}} style={styles.button}>
            <NextIcon />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
  },
  rodContainer: {
    alignItems: "center",
    paddingTop: 150,
  },
  rodRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 0.1,
  },
  rod: {
    width: 35,
    height: 35,
    marginHorizontal: 0.2,
    borderRadius: 3,
  },
  buttonContainer: {
    position: "absolute",
    bottom: -30,
    left: -20,
    right: -20,
    alignItems: "center",
    padding: 10,
    height: 80,
  },
  correctRod: {
    backgroundColor: colors.green200,
  },
  wrongRod: {
    backgroundColor: "#FDE1E1",
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PointAndTell;
