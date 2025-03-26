import { globalStyles } from "@/assets/globalStyles";
import NextIcon from "@/assets/svgs/NextIcon";
import ResetIcon from "@/assets/svgs/ResetIcon";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
import LearningCard from "../LearningHeader";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const RodScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Let’s Learn Number Rods");
  const [animations, setAnimations] = useState<{
    [key: number]: Animated.Value;
  }>({});

  const addRod = () => {
    if (count < 10) {
      const newAnimations = { ...animations, [count]: new Animated.Value(0) };
      setAnimations(newAnimations);
      setCount(count + 1);
      setTitle(`This is Rod ${count + 1}`);
      Animated.timing(newAnimations[count], {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
    if (count === 10) return navigation.navigate("RodGame");
  };

  const resetRods = () => {
    setCount(0);
    setAnimations({});
    setTimeout(addRod, 500);
  };
  const rodColors = [
    { main: "#FF5733", shadow: "#C0392B" },
    { main: "#3498DB", shadow: "#21618C" },
  ];

  return (
    <View style={[globalStyles.container, globalStyles.body]}>
      <LearningCard title={title} enabled={true} />
      <View style={styles.container}>
        {/* Rods */}
        {Array.from({ length: count }).map((_, rowIndex) => (
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
    marginRight: -0.5,
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
  buttonText: {
    fontSize: 20,
    color: "white",
  },
});

export default RodScreen;
