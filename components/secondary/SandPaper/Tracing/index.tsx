import React, { useState, useRef } from "react";
import { View, PanResponder, StyleSheet } from "react-native";
import Svg, { Path, Circle } from "react-native-svg";

const TracingScreen = () => {
  const [path, setPath] = useState("");
  const [dotPosition, setDotPosition] = useState<{ x: number; y: number } | null>(null);
  const isDrawing = useRef(false);

//   const panResponder = useRef(
//     PanResponder.create({
//       onStartShouldSetPanResponder: () => true,
//       onPanResponderGrant: () => {
//         setPath("");
//         isDrawing.current = true;
//       },
//       onPanResponderMove: (evt, gestureState) => {
//         if (isDrawing.current) {
//           const newPath = `${path} L${gestureState.moveX},${gestureState.moveY}`;
//           setPath(newPath);
//           setDotPosition({ x: gestureState.moveX, y: gestureState.moveY });
//         }
//       },
//       onPanResponderRelease: () => {
//         isDrawing.current = false;
//       },
//     })
//   ).current;

  return (
    <View style={styles.container}>
      <Svg style={styles.svg}>
        {/* Reference Stroke (Example Path for Number 1) */}
        <Path
          d="M100 50 L100 300"
          stroke="black"
          strokeWidth={5}
          strokeLinecap="round"
        />

        {/* User Drawn Stroke */}
        <Path d={`M${path}`} stroke="black" strokeWidth={5} fill="none" />

        {/* Moving Red Dot */}
        {dotPosition && (
          <Circle cx={dotPosition.x} cy={dotPosition.y} r={5} fill="red" />
        )}
      </Svg>
      {/* <View {...panResponder.panHandlers} style={styles.touchArea} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  svg: { width: 300, height: 400, backgroundColor: "#f8f8f8" },
  touchArea: { position: "absolute", width: 300, height: 400 },
});

export default TracingScreen;
