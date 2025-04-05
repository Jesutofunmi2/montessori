import React, { useState, useRef } from "react";
import {
  View,
  PanResponder,
  StyleSheet,
  Vibration,
  Animated,
  TouchableOpacity,
} from "react-native";
import Svg, { Path, Circle } from "react-native-svg";
import LearningCard from "../../LearningHeader";
import { globalStyles } from "@/assets/globalStyles";
import ResetIcon from "@/assets/svgs/ResetIcon";
import NextIcon from "@/assets/svgs/NextIcon";

const TracingScreen = () => {
  const correctPath = [
    { x: 150, y: 100 },
    { x: 150, y: 200 },
    { x: 150, y: 300 },
    { x: 150, y: 400 },
  ];

  const [progressIndex, setProgressIndex] = useState(0);
  const [dotPosition, setDotPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const isDrawing = useRef(false);
  const pathColor = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        setProgressIndex(0);
        isDrawing.current = true;
      },
      onPanResponderMove: (evt, gestureState) => {
        console.log("Touch detected!");
        if (isDrawing.current) {
          const { moveX, moveY } = gestureState;
          if (moveX && moveY) {
            const nextPoint = correctPath[progressIndex];
            if (nextPoint) {
              const distance = Math.sqrt(
                Math.pow(moveX - nextPoint.x, 2) +
                  Math.pow(moveY - nextPoint.y, 2)
              );
              if (distance < 30) {
                setDotPosition({ x: nextPoint.x, y: nextPoint.y });
                setProgressIndex((prev) =>
                  Math.min(prev + 1, correctPath.length - 1)
                );
                Vibration.vibrate(50);
              }
            }
          }
        }
      },
      onPanResponderRelease: () => {
        isDrawing.current = false;
        if (progressIndex === correctPath.length - 1) {
          Animated.timing(pathColor, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  const strokeColor = pathColor.interpolate({
    inputRange: [0, 1],
    outputRange: ["black", "green"],
  });

  return (
    <View style={[globalStyles.container, globalStyles.body]}>
      <LearningCard title={"Number 1"} enabled={true} />
      <Svg style={styles.svg} pointerEvents="none">
        <AnimatedPath
          d="M150 20 L150 180"
          stroke={strokeColor}
          strokeWidth={16}
          strokeLinecap="round"
        />
        {dotPosition && (
          <Circle cx={dotPosition.x} cy={dotPosition.y} r={8} fill="red" />
        )}
      </Svg>
      <View style={{ flex: 1 }} {...panResponder.panHandlers}>
       <View style={styles.touchArea} />
     </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <ResetIcon />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <NextIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const AnimatedPath = Animated.createAnimatedComponent(Path);

const styles = StyleSheet.create({
    svg: { width: 300, height: 200, backgroundColor: "#f8f8f8" },
    touchArea: { 
      position: "absolute",
      top: 10,
      left: 0,
      width: 300, 
      height: 200, 
      backgroundColor: "#f8f8f8"
    },
  touchAreaContainer: {
    width: "99%",
    height: 200,
    backgroundColor: "#f8f8f8",
    marginTop: 20,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  eraseButton: {
    backgroundColor: "#d4f8d4",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  eraseText: { color: "green", fontWeight: "bold" },
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

export default TracingScreen;
