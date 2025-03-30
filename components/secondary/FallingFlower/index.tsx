import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, Image, View } from "react-native";

const FallingFlower = ({ isVisible }: { isVisible: boolean }) => {
  const fallAnim = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    if (isVisible) {
      fallAnim.setValue(-100);
      Animated.timing(fallAnim, {
        toValue: 600,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible]);

  return (
    <Animated.View style={[styles.flower, { transform: [{ translateY: fallAnim }] }]}>
      <Image source={require("../../../assets/images/flower.png")} style={styles.image} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  flower: {
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -25 }],
  },
  image: {
    width: 50, 
    height: 50,
  },
});

export default FallingFlower;
