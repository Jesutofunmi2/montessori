import { useRef, useState, useEffect } from "react";
import { Animated } from "react-native";
import { rodPoint } from "@/constants/Slides";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { playSound } from "@/hooks/sound";

const usePointAndTell = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [targetRodIndex, setTargetRodIndex] = useState(0);
  const [message, setMessage] = useState("");
  const [showAll, setShowAll] = useState(false);
  const animations = useRef(rodPoint.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    Animated.timing(animations[targetRodIndex], {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [targetRodIndex]);

  const handleTap = (selectedIndex: number) => {
    if (showAll) return;
    const correctRod = rodPoint[targetRodIndex];

    if (selectedIndex === targetRodIndex) {
      playSound(targetRodIndex + 1);
      setMessage("✅ Amazing!");
      setTimeout(() => {
        if (targetRodIndex < rodPoint.length - 1) {
          setTargetRodIndex(targetRodIndex + 1);
          setMessage("✅ Well done! You completed the exercise.");
        } else {
          setShowAll(true);
        }
      }, 4000);
    } else {
      setMessage("❌ Try again!");
    }
  };

  const resetRods = () => {
    setTargetRodIndex(0);
    setShowAll(false);
    setMessage("");
  };

  const next = () => {
    navigation.navigate("RodGame");
  };
  return {
    targetRodIndex,
    message,
    handleTap,
    animations,
    showAll,
    availableRods: [rodPoint[targetRodIndex]],
    resetRods,
    next,
  };
};

export default usePointAndTell;
