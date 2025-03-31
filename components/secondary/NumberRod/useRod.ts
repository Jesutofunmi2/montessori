import { rodColors } from "@/constants/Slides";
import { playSound } from "@/hooks/sound";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
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
      // playSound(count + 1);
      Animated.timing(newAnimations[count], {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
    if (count === 10) return navigation.navigate("PointAndTell");
  };

  const resetRods = () => {
    setCount(0);
    setAnimations({});
    setTitle("Let’s Learn Number Rods")
  };

  useEffect(() => {
    playSound(11);
  },[])

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
