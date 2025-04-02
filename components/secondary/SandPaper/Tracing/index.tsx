import React, { useState, useRef } from "react";
import { View, PanResponder, StyleSheet, Vibration, Animated } from "react-native";
import Svg, { Path, Circle, Text as SvgText } from "react-native-svg";

const TracingScreen = () => {
  const correctPath = [
    { x: 100, y: 50 },
    { x: 100, y: 100 },
    { x: 100, y: 150 },
    { x: 100, y: 200 },
    { x: 100, y: 250 },
    { x: 100, y: 300 },
  ];

  const [progressIndex, setProgressIndex] = useState(0);
  const [dotPosition, setDotPosition] = useState<{ x: number; y: number } | null>(null);
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
        if (isDrawing.current) {
          const { moveX, moveY } = gestureState;
          if (moveX && moveY) {
            const nextPoint = correctPath[progressIndex];

            if (nextPoint) {
              const distance = Math.sqrt(
                Math.pow(moveX - nextPoint.x, 2) + Math.pow(moveY - nextPoint.y, 2)
              );

              if (distance < 20) {
                setDotPosition({ x: nextPoint.x, y: nextPoint.y });
                setProgressIndex((prev) => Math.min(prev + 1, correctPath.length - 1));

                // Haptic feedback
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
    <View style={styles.container}>
      <Svg style={styles.svg}>
        <SvgText x="80" y="40" fontSize="50" fill="gray">9</SvgText>
        <AnimatedPath
          d="M100 50 L100 300"
          stroke={strokeColor}
          strokeWidth={5}
          strokeLinecap="round"
        />
        {dotPosition && <Circle cx={dotPosition.x} cy={dotPosition.y} r={5} fill="red" />}
      </Svg>
      <View {...panResponder.panHandlers} style={styles.touchArea} />
    </View>
  );
};

const AnimatedPath = Animated.createAnimatedComponent(Path);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  svg: { width: 300, height: 400, backgroundColor: "#f8f8f8" },
  touchArea: { position: "absolute", width: 300, height: 400 },
});

export default TracingScreen;
