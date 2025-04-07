import React, { useState, useRef, useEffect } from "react";
import {
  View,
  PanResponder,
  StyleSheet,
  Vibration,
  Animated,
  Text,
  TouchableOpacity,
} from "react-native";
import Svg, { Path, Circle } from "react-native-svg";
import LearningCard from "../../LearningHeader";
import { globalStyles } from "@/assets/globalStyles";
import ResetIcon from "@/assets/svgs/ResetIcon";
import NextIcon from "@/assets/svgs/NextIcon";
import { colors } from "@/constants";
import { numberPaths } from "@/constants/Slides";

const AnimatedPath = Animated.createAnimatedComponent(Path);

const TracingScreen = () => {
  const [currentNumber, setCurrentNumber] = useState(1);
  const [progressIndex, setProgressIndex] = useState(0);
  const [dotPosition, setDotPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const isDrawing = useRef(false);
  const pathColor = useRef(new Animated.Value(0)).current;
  const svgRef = useRef<View | null>(null);
  const [svgOffset, setSvgOffset] = useState({ x: 0, y: 0 });

  const { d, points: correctPath } = numberPaths[currentNumber];

  useEffect(() => {
    setTimeout(() => {
      if (svgRef.current) {
        svgRef.current.measure((fx, fy, width, height, px, py) => {
          setSvgOffset({ x: px, y: py });
        });
      }
    }, 100);
  }, [currentNumber]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        setProgressIndex(0);
        setDotPosition(null);
        isDrawing.current = true;
        pathColor.setValue(0);
      },
      onPanResponderMove: (evt, gestureState) => {
        if (!isDrawing.current) return;

        const { moveX, moveY } = gestureState;
        const relativeX = moveX - svgOffset.x;
        const relativeY = moveY - svgOffset.y;

        const nextPoint = correctPath[progressIndex];
        if (!nextPoint) return;

        const distance = Math.sqrt(
          Math.pow(relativeX - nextPoint.x, 2) +
            Math.pow(relativeY - nextPoint.y, 2)
        );

        if (distance < 30) {
          setDotPosition({ x: nextPoint.x, y: nextPoint.y });

          setProgressIndex((prev) => {
            const nextIndex = Math.min(prev + 1, correctPath.length - 1);

            if (nextIndex === correctPath.length - 1) {
              Vibration.vibrate(100);
              Animated.timing(pathColor, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false,
              }).start();
              alert("✅ Correct!");
              isDrawing.current = false;
            } else {
              Vibration.vibrate(30);
            }

            return nextIndex;
          });
        }
      },
      onPanResponderRelease: () => {
        isDrawing.current = false;
      },
    })
  ).current;

  const goToNext = () => {
    setCurrentNumber((prev) => (prev < 9 ? prev + 1 : 1));
    resetTrace();
  };

  const resetTrace = () => {
    setProgressIndex(0);
    setDotPosition(null);
    pathColor.setValue(0);
  };

  return (
    <View style={[globalStyles.container, globalStyles.body]}>
      <LearningCard title={`Number ${currentNumber}`} enabled={true} />
      <View style={[globalStyles.rowCenter]}>
        <View style={[styles.referenceSvg]}>
          <View style={[globalStyles.rowCenter]}>
            <Svg width={"57%"} height={200}>
              <Path
                d={d}
                stroke={"#000"}
                strokeWidth={20}
                strokeLinecap="round"
                fill="none"
              />
            </Svg>
          </View>
        </View>
      </View>
      <View style={[globalStyles.rowCenter]}>
        <View
          ref={svgRef}
          style={[styles.tracingWrapper]}
          {...panResponder.panHandlers}
        >
          <Svg width={300} height={300} style={[styles.tracingSvg]}>
            <AnimatedPath
              d={d}
              stroke={
                progressIndex === correctPath.length - 1 ? "green" : "white"
              }
              strokeWidth={20}
              strokeLinecap="round"
              fill="none"
            />
            {/* Red Start Dot */}
            {correctPath.length > 0 && (
              <Circle
                cx={correctPath[0].x}
                cy={correctPath[0].y}
                r={10}
                fill="red"
              />
            )}
            {/* Red progress dot */}
            {dotPosition && (
              <Circle cx={dotPosition.x} cy={dotPosition.y} r={8} fill="red" />
            )}
          </Svg>
        </View>
      </View>
      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={resetTrace} style={styles.button}>
          <ResetIcon />
        </TouchableOpacity>
        <TouchableOpacity onPress={goToNext} style={styles.button}>
          <NextIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  referenceSvg: {
    marginBottom: 5,
    width: 330,
    height: 200,
    borderRadius: 12,
    backgroundColor: "#F7F9FB",
  },
  tracingWrapper: {
    width: 320,
    height: 200,
    borderRadius: 12,
    backgroundColor: "#F7F9FB",
  },
  tracingSvg: {
    position: "absolute",
    top: 0,
    left: 60,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
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
