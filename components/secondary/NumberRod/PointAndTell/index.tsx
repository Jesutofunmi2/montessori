import { globalStyles } from "@/assets/globalStyles";
import React from "react";
import { View, TouchableOpacity, StyleSheet, Animated } from "react-native";
import LearningCard from "../../LearningHeader";
import { colors, layout } from "@/constants";
import usePointAndTell from "./usePointAndTell";
import { Button, Text } from "@/components/primary";
import { rodColors, rodPoint } from "@/constants/Slides";
import NextIcon from "@/assets/svgs/NextIcon";
import ResetIcon from "@/assets/svgs/ResetIcon";

const PointAndTell = () => {
  const {
    targetRodIndex,
    message,
    handleTap,
    animations,
    showAll,
    resetRods,
    next,
  } = usePointAndTell();
  const isLastRod = targetRodIndex === rodPoint.length;

  return (
    <View style={[globalStyles.container, globalStyles.body]}>
      <LearningCard
        title={`This is ${rodPoint[targetRodIndex].label}. Touch it and say ${rodPoint[targetRodIndex].label}`}
        enabled={true}
      />

      {/* Rod Display */}
      <View style={styles.rodContainer}>
        {[...(targetRodIndex === 3 ? Array(3).keys() : [targetRodIndex])].map(
          (rowIndex) => (
            <TouchableOpacity
              key={rowIndex}
              onPress={() => handleTap(rowIndex)}
            >
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
          )
        )}
      </View>

      {/* Feedback Message */}
      {showAll ? (
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={resetRods} style={styles.button}>
            <ResetIcon />
          </TouchableOpacity>

          <TouchableOpacity onPress={next} style={styles.button}>
            <NextIcon />
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={[
            styles.message,
            showAll ? styles.non : message === "❌ Try again!" ? styles.wrongRod : message === "✅ Amazing!" ? styles.correctRod : styles.non,
          ]}
        >
          <Text
            text={message}
            fontFamily="Fredoka_500Medium"
            color={
              message === "❌ Try again!" ? colors.red500 : colors.green500
            }
          />
        </View>
      )}
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
    bottom: -10,
    left: 0,
    right: 0,
    alignItems: "center",
    padding: 10,
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  message: {
    position: "absolute",
    bottom: -10,
    left: 0,
    right: 0,
    alignItems: "center",
    padding: 10,
    height: 60,
  },
  correctRod: {
    backgroundColor: colors.green200,
  },
  wrongRod: {
    backgroundColor: "#FDE1E1",
  },
  non: {
    backgroundColor: colors.white,
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
