import { useRef, useState, useEffect } from "react";
import { Animated } from "react-native";
import { rodPoint } from "@/constants/Slides";

const usePointAndTell = () => {
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
    if (showAll) return; // Prevent interaction when all rods are shown

    const correctRod = rodPoint[targetRodIndex]; // Correct rod at current step

    if (selectedIndex === targetRodIndex) {
      setMessage("✅ Amazing!");
      setTimeout(() => {
        if (targetRodIndex < rodPoint.length - 1) {
          setTargetRodIndex(targetRodIndex + 1);
          setMessage("");
        } else {
          setShowAll(true);
          setMessage("✅ Well done! You completed the exercise.");
        }
      }, 1500);
    } else {
      setMessage("❌ Try again!");
    }
  };

  return {
    targetRodIndex,
    message,
    handleTap,
    animations,
    showAll,
    availableRods: [rodPoint[targetRodIndex]], // FIXED: Only show one rod at a time!
  };
};

export default usePointAndTell;
