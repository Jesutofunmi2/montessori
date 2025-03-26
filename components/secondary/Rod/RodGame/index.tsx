import { globalStyles } from "@/assets/globalStyles";
import React, { useState, useEffect, useRef } from "react";
import { View, TouchableOpacity, StyleSheet, Animated } from "react-native";
import LearningCard from "../../LearningHeader";
import { Button, Text } from "@/components/primary";
import { colors, layout } from "@/constants";

const rods = [
  { id: 1, label: "Rod 1" },
  { id: 2, label: "Rod 2" },
  { id: 3, label: "Rod 3" },
  { id: 4, label: "Rod 4" },
  { id: 5, label: "Rod 5" },
  { id: 6, label: "Rod 6" },
  { id: 7, label: "Rod 7" },
  { id: 8, label: "Rod 8" },
  { id: 9, label: "Rod 9" },
  { id: 10, label: "Rod 10" },
];

const RodGame = () => {
    const [availableRods, setAvailableRods] = useState<{ id: number; label: string }[]>([]);
    const [targetRod, setTargetRod] = useState<number | null>(null);
    const [selectedRod, setSelectedRod] = useState<number | null>(null);
    const [message, setMessage] = useState("");
  const animations = useRef(rods.map(() => new Animated.Value(0))).current;

  useEffect(() => {
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
  }, []);

  const handleRodClick = (rod: number) => {
    setSelectedRod(rod);
    if (rod === targetRod) {
      setMessage("✅ Amazing");
    } else {
      setMessage("❌ Incorrect.");
    }
  };

  const generateNewQuestion = () => {
    // Pick 3 random rods
    const shuffledRods = [...rods].sort(() => Math.random() - 0.5);
    const selectedRods = shuffledRods.slice(0, 3);

    // Choose one as the correct answer
    const correctRod = selectedRods[Math.floor(Math.random() * selectedRods.length)];

    setAvailableRods(selectedRods);
    setTargetRod(correctRod.id);
    setMessage("");
    setSelectedRod(null);
  };

  const handleContinue = () => {
    const newTargetRod = Math.floor(Math.random() * rods.length) + 1;
    setTargetRod(newTargetRod);
    //setTitle(`Can you find ${newTargetRod}`);
    setSelectedRod(0);
    setMessage("");
  };

  const rodColors = [
    { main: "#FF5733", shadow: "#C0392B" },
    { main: "#3498DB", shadow: "#21618C" },
  ];

  useEffect(() => {
    generateNewQuestion();
  }, []);

  return (
    <View style={[globalStyles.container, globalStyles.body]}>
      <LearningCard title={`Can you find ${targetRod}`} enabled={true} />
      <View style={styles.container}>
        {/* Rods */}
        {Array.from({ length: availableRods.length }).map((_, rowIndex) => (
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
              <TouchableOpacity
                onPress={() => handleRodClick(colIndex + 1)}
                key={colIndex}
              >
                <View
                  key={colIndex}
                  style={[
                    styles.rod,
                    { backgroundColor: rodColors[colIndex % 2].main },
                  ]}
                />
              </TouchableOpacity>
            ))}
          </Animated.View>
        ))}
        {selectedRod ? (
          <View
            style={[
              styles.buttonContainer,
              selectedRod
                ? selectedRod === targetRod
                  ? styles.correctRod
                  : styles.wrongRod
                : "",
            ]}
          >
            <Text
              text={message}
              fontFamily="Fredoka_500Medium"
              color={
                selectedRod === targetRod ? colors.green500 : colors.red500
              }
            />

            <Button
              title={
                selectedRod === targetRod
                  ? "Let’s Continue!"
                  : "Almost! Try again"
              }
              outlined={false}
              style={{
                marginBottom: 30,
                backgroundColor:
                  selectedRod === targetRod ? colors.green500 : colors.red500,
              }}
              textStyle={{
                fontFamily: "Fredoka_500Medium",
                fontSize: layout.fontPixel(20),
                color: colors.white,
              }}
              onPress={selectedRod === targetRod ? handleContinue: ()=>{}}
            />
          </View>
        ) : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
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
    flex: 1,
    flexDirection: "column",
    gap: 20,
    position: "absolute",
    bottom: -30,
    left: -20,
    right: -20,
    alignItems: "center",
    padding: 10,
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
  correctRod: {
    backgroundColor: colors.green200,
  },
  wrongRod: {
    backgroundColor: "#FDE1E1",
  },
});
export default RodGame;
