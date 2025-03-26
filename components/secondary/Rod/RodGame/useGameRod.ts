import { rods } from "@/constants/Slides";
import React, { useState, useEffect, useRef } from "react";
import { Animated } from "react-native";

const useGameRod = () => {
  const [availableRods, setAvailableRods] = useState<{ id: number; label: string }[]>([]);
  const [targetRod, setTargetRod] = useState<number | null>(null);
  const [selectedRod, setSelectedRod] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const animations = useRef(rods.map(() => new Animated.Value(0))).current;

  const generateNewQuestion = () => {
    let shuffledRods = [...rods].sort(() => 0.5 - Math.random());
    let newTargetRod = shuffledRods[Math.floor(Math.random() * shuffledRods.length)].id;

    let selectedRods = shuffledRods.slice(0, newTargetRod);

    if (!selectedRods.some((rod) => rod.id === newTargetRod)) {
      selectedRods.pop();
      selectedRods.push(rods.find((rod) => rod.id === newTargetRod)!);
    }

    setTargetRod(newTargetRod);
    setAvailableRods(selectedRods.sort(() => 0.5 - Math.random()));
    setSelectedRod(null);
    setMessage("");

    animations.forEach((anim) => anim.setValue(0));
    Animated.stagger(
      200,
      animations.map((anim) =>
        Animated.timing(anim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        })
      )
    ).start();
  };

  useEffect(() => {
    generateNewQuestion();
  }, []);

  const handleRodClick = (rod: number) => {
    setSelectedRod(rod);
    setMessage(rod === targetRod ? "✅ Amazing" : "❌ Incorrect.");
  };

  const rodColors = [
    { main: "#FF5733", shadow: "#C0392B" },
    { main: "#3498DB", shadow: "#21618C" },
  ];

  return {
    handleRodClick,
    targetRod,
    selectedRod,
    message,
    availableRods,
    animations,
    rodColors,
    generateNewQuestion,
  };
};

export default useGameRod;
