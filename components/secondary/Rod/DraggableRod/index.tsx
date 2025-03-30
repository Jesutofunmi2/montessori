import { globalStyles } from "@/assets/globalStyles";
import { View, StyleSheet, Animated, TouchableOpacity } from "react-native";
import {
  PanGestureHandler,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import React from "react";
import LearningCard from "../../LearningHeader";
import { colors, layout } from "@/constants";
import { Button, Text } from "@/components/primary";
import NextIcon from "@/assets/svgs/NextIcon";
import { rodColors } from "@/constants/Slides";
import useDraggableRod from "./useDraggableRod";

const RodPuzzle = () => {
  const {
    handleDragEnd,
    check,
    handleNext,
    showButtonContainer,
    animatedValues,
    count,
    isCorrect,
    handleDrag,
  } = useDraggableRod();

  return (
    <View style={[globalStyles.container, globalStyles.body]}>
      <LearningCard title={"Rearrange rods"} enabled={true} />
      <View style={styles.container}>
        <GestureHandlerRootView style={styles.container}>
          {Array.from({ length: count }).map((_, rowIndex: number) => (
            <PanGestureHandler
              key={rowIndex}
              onGestureEvent={handleDrag(rowIndex)}
              onHandlerStateChange={handleDragEnd(rowIndex)}
            >
              <Animated.View
                style={[
                  styles.rodRow,
                  {
                    transform: [
                      {
                        translateX:
                          animatedValues[rowIndex]?.x || new Animated.Value(0),
                      },
                      {
                        translateY:
                          animatedValues[rowIndex]?.y || new Animated.Value(0),
                      },
                    ],
                  },
                ]}
              >
                {Array.from({ length: rowIndex + 1 }).map(
                  (__, colIndex: number) => (
                    <View
                      key={colIndex}
                      style={[
                        styles.rod,
                        {
                          backgroundColor:
                            rodColors[(rowIndex + colIndex) % 2].main,
                        },
                      ]}
                    />
                  )
                )}
              </Animated.View>
            </PanGestureHandler>
          ))}
        </GestureHandlerRootView>
      </View>

      {showButtonContainer ? (
        <View
          style={[
            styles.buttonContainer,
            isCorrect ? styles.correctRod : styles.wrongRod,
          ]}
        >
          <Text
            text={isCorrect ? "✅ Amazing." : "❌ Incorrect."}
            fontFamily="Fredoka_500Medium"
            color={isCorrect ? colors.green500 : colors.red500}
          />

          <Button
            title={isCorrect ? "Let’s Continue!" : "Almost! Try again"}
            outlined={false}
            style={{
              marginBottom: 30,
              backgroundColor: isCorrect ? colors.green500 : colors.red500,
            }}
            textStyle={{
              fontFamily: "Fredoka_500Medium",
              fontSize: layout.fontPixel(20),
              color: colors.white,
            }}
            onPress={() => (isCorrect ? handleNext() : () => {})}
          />
        </View>
      ) : (
        <View style={styles.wrap}>
          <TouchableOpacity onPress={() => check()} style={styles.button}>
            <NextIcon />
          </TouchableOpacity>
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
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  rodRow: {
    position: "absolute",
    flexDirection: "row",
    backgroundColor: colors.gray200,
  },
  rod: {
    width: 35,
    height: 35,
    marginHorizontal: 0.3,
    borderRadius: 3,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    gap: 20,
    position: "absolute",
    bottom: -30,
    left: -20,
    right: -20,
    alignItems: "center",
    padding: 10,
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

export default RodPuzzle;
