import { globalStyles } from "@/assets/globalStyles";
import NextIcon from "@/assets/svgs/NextIcon";
import ResetIcon from "@/assets/svgs/ResetIcon";
import { View, StyleSheet, Animated, TouchableOpacity } from "react-native";
import LearningCard from "../LearningHeader";
import useRod from "./useRod";
import React from "react";
import { playSound } from "@/hooks/sound";


const NumberRod = () => {
  const { addRod, resetRods, title, animations, count, rodColors } = useRod();

  return (
    <View style={[globalStyles.container, globalStyles.body]}>
      <LearningCard title={title} enabled={true} />
      <View style={styles.container}>
        {/* Rods arranged from the bottom upwards */}
        {Array.from({ length: count })
          .map((_, rowIndex) => count - rowIndex - 1)
          .map((rowIndex) => (
            <TouchableOpacity onPress={() => playSound(rowIndex + 1)}  key={rowIndex}>
            <Animated.View
              key={rowIndex}
              style={[
                styles.rodRow,
                {
                  opacity: animations[rowIndex] || 1,
                  transform: [
                    {
                      translateY:
                        animations[rowIndex]?.interpolate({
                          inputRange: [0, 1],
                          outputRange: [-1000, 0],
                        }) || 0,
                    },
                  ],
                },
              ]}
            >
              {Array.from({ length: rowIndex + 1 }).map((__, colIndex) => (
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

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={resetRods} style={styles.button}>
            <ResetIcon />
          </TouchableOpacity>

          <TouchableOpacity onPress={addRod} style={styles.button}>
            <NextIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 80,
  },
  rodRow: {
    flexDirection: "row",
    gap: 0.5,
    marginTop: 0.5,
  },
  rod: {
    width: 35,
    height: 35,
    marginRight: 0,
    borderRadius: 3,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 6,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NumberRod;
