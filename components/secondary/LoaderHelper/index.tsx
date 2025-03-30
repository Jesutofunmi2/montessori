import React, { useEffect, useRef } from "react";
import { View, Animated, Easing, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface LoaderProps {
    isLoading: boolean;
  }

const LoaderHelper = ({ isLoading }: LoaderProps) => {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isLoading) {
      Animated.loop(
        Animated.timing(rotation, {
          toValue: 1,
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: false,
        })
      ).start();
    } else {
      rotation.setValue(0);
    }
  }, [isLoading]);

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
    <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
      <Svg width="35" height="35" viewBox="0 0 100 100">
        <Circle cx="50" cy="50" r="25" fill="#77D472" />
        <Circle
          cx="50"
          cy="50"
          r="35"
          stroke="#A3A3A3"
          strokeWidth="8"
          fill="none"
          strokeDasharray="20,20"
          strokeLinecap="round"
        />
      </Svg>
    </Animated.View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoaderHelper;
