import React, { useRef } from "react";
import { View, StyleSheet, Animated, PanResponder } from "react-native";

const DraggableRod = ({ rod }: any) => {
  const pan = useRef(new Animated.ValueXY({ x: rod.x, y: rod.y })).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, { dx: pan.x, dy: pan.y }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    })
  ).current;

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        styles.rod,
        {
          backgroundColor: rod.color,
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  rod: {
    width: 40,
    height: 40,
    position: "absolute",
    borderRadius: 4,
  },
});

export default DraggableRod;
