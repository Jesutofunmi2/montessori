import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Animated } from "react-native";

const useRod = () => {
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

  return {
    navigation,
    resetRods,
    title,
    animations,
    count,
    rodColors,
    addRod,
  };
};

export default useRod;
