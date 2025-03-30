import { globalStyles } from "@/assets/globalStyles";
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import {
  PanGestureHandler,
  GestureHandlerRootView,
  State,
} from "react-native-gesture-handler";
import LearningCard from "../../LearningHeader";
import { colors, layout } from "@/constants";
import { Button, Text } from "@/components/primary";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { clamp } from "react-native-redash";
import NextIcon from "@/assets/svgs/NextIcon";
import { rodColors } from "@/constants/Slides";

const { width, height } = Dimensions.get("window");

const ROD_HEIGHT = 35;
const START_POSITION = height * 0.4;
const THRESHOLD = 20;
const SCATTER_RANGE = -0.5;

interface RodPosition {
  x: number;
  y: number;
}

const ranges = [
  [1, 3],
  [4, 6],
  [7, 10],
];

const RodPuzzle: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [rangeIndex, setRangeIndex] = useState<number>(0);
  const [showButtonContainer, setShowButtonContainer] = useState(false);
  const [count, setCount] = useState<number>(ranges[0][1]);
  const [positions, setPositions] = useState<RodPosition[]>([]);
  let rodCounts: number[] = [];
  const [animatedValues, setAnimatedValues] = useState<
    { x: Animated.Value; y: Animated.Value }[]
  >([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const correctOrder = Array.from({ length: count }).map((_, i) => i + 1);

  const correctPositions: RodPosition[] = Array.from({ length: count }).map(
    (_, rowIndex) => ({
      x: width * 0.5 - 20,
      y: START_POSITION - rowIndex * ROD_HEIGHT,
    })
  );

  // Handle Dragging
  const handleDrag = (rowIndex: number) => {
    if (!animatedValues[rowIndex]) return; // Prevent undefined access

    return Animated.event(
      [
        {
          nativeEvent: {
            translationX: animatedValues[rowIndex].x,
            translationY: animatedValues[rowIndex].y,
          },
        },
      ],
      {
        useNativeDriver: false,
        //listener: (event) => detectOverlap(rowIndex, event.nativeEvent),
      }
    );
  };

  const handleNext = () => {
    const nextIndex = (rangeIndex + 1) % ranges.length;
    setRangeIndex(nextIndex);
    console.log(ranges[nextIndex][0]);
    setIsCorrect(false);
    setShowButtonContainer(false);
    setCount(ranges[nextIndex][1]);
  };

  const handleDragEnd = (index: number) => (event: any) => {
    if (event.nativeEvent.state === State.END) {
      const finalX = event.nativeEvent.translationX;
      const finalY = event.nativeEvent.translationY;

      const correctX = correctPositions[index].x;
      const correctY = correctPositions[index].y;
      const distance = Math.sqrt(
        Math.pow(finalX - correctX, 2) + Math.pow(finalY - correctY, 2)
      );

      Animated.timing(animatedValues[index].x, {
        toValue: distance < THRESHOLD ? correctX : finalX,
        duration: 200,
        useNativeDriver: false,
      }).start();

      Animated.timing(animatedValues[index].y, {
        toValue: distance < THRESHOLD ? correctY : finalY,
        duration: 200,
        useNativeDriver: false,
      }).start();

      const rodCountInRow = index + 1;

      if (!rodCounts.includes(rodCountInRow)) {
        rodCounts.push(rodCountInRow);
      }

      if (rodCounts.length === count) {
        const isMatch = rodCounts.every(
          (value, i) => value === correctOrder[i]
        );
        setIsCorrect(isMatch);
        setShowButtonContainer(true);
        rodCounts = [];
      }
    }
  };

  const check = () => {
    navigation.navigate("RodGame");
  };

  const detectOverlap = (dragIndex: number, event: any) => {
    const dragX = event.translationX;
    const dragY = event.translationY;

    positions.forEach((pos, index) => {
      if (index !== dragIndex) {
        const distance = Math.sqrt(
          Math.pow(dragX - pos.x, 2) + Math.pow(dragY - pos.y, 2)
        );

        if (distance < 25 - 15) {
          // Adjust threshold to detect closer rods
          // Shift away by a larger amount
          Animated.spring(animatedValues[index].x, {
            toValue: pos.x + (Math.random() > 0.5 ? 15 : 15), // Random left/right shift
            stiffness: 150,
            damping: 10,
            useNativeDriver: false,
          }).start();

          Animated.spring(animatedValues[index].y, {
            toValue: pos.y + (Math.random() > -0.5 ? 15 : -15), // Random up/down shift
            stiffness: 150,
            damping: 110,
            useNativeDriver: false,
          }).start();
        }
      }
    });
  };

  useEffect(() => {
    const shuffledIndices = Array.from({ length: count }, (_, i) => i).sort(
      () => Math.random() - 0.5
    );
    const shuffledPositions = shuffledIndices.map((index) => ({
      x: width * 0.5 - 190,
      y: START_POSITION - index * ROD_HEIGHT - 180,
    }));

    setPositions(shuffledPositions);

    // Create animations for each rod
    const animations = shuffledPositions.map((pos, i) => ({
      x: new Animated.Value(pos.x),
      y: new Animated.Value(pos.y - 150), // Start higher
    }));

    setAnimatedValues(animations);

    shuffledIndices.forEach((shuffledIndex, i) => {
      Animated.timing(animations[i].y, {
        toValue: shuffledPositions[i].y,
        duration: 500,
        delay: Math.random() * 300,
        useNativeDriver: false,
      }).start();
    });
  }, [count]);

  return (
    <View style={[globalStyles.container, globalStyles.body]}>
      <LearningCard title={"Rearrange rods"} enabled={true} />
      <View style={styles.container}>
        <GestureHandlerRootView style={styles.container}>
          {Array.from({ length: count }).map((_, rowIndex: number) => (
            <PanGestureHandler
              key={rowIndex}
              onGestureEvent={handleDrag(rowIndex)}
              onHandlerStateChange={handleDragEnd(rowIndex)}
            >
              <Animated.View
                style={[
                  styles.rodRow,
                  {
                    transform: [
                      {
                        translateX:
                          animatedValues[rowIndex]?.x || new Animated.Value(0),
                      },
                      {
                        translateY:
                          animatedValues[rowIndex]?.y || new Animated.Value(0),
                      },
                    ],
                  },
                ]}
              >
                {Array.from({ length: rowIndex + 1 }).map(
                  (__, colIndex: number) => (
                    <View
                      key={colIndex}
                      style={[
                        styles.rod,
                        {
                          backgroundColor:
                            rodColors[(rowIndex + colIndex) % 2].main,
                        },
                      ]}
                    />
                  )
                )}
              </Animated.View>
            </PanGestureHandler>
          ))}
        </GestureHandlerRootView>
      </View>

      {showButtonContainer ? (
        <View
          style={[
            styles.buttonContainer,
            isCorrect ? styles.correctRod : styles.wrongRod,
          ]}
        >
          <Text
            text={isCorrect ? "✅ Amazing." : "❌ Incorrect."}
            fontFamily="Fredoka_500Medium"
            color={isCorrect ? colors.green500 : colors.red500}
          />

          <Button
            title={isCorrect ? "Let’s Continue!" : "Almost! Try again"}
            outlined={false}
            style={{
              marginBottom: 30,
              backgroundColor: isCorrect ? colors.green500 : colors.red500,
            }}
            textStyle={{
              fontFamily: "Fredoka_500Medium",
              fontSize: layout.fontPixel(20),
              color: colors.white,
            }}
            onPress={() => (isCorrect ? handleNext() : () => {})}
          />
        </View>
      ) : (
        <View style={styles.wrap}>
          <TouchableOpacity onPress={() => check()} style={styles.button}>
            <NextIcon />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  rodRow: {
    position: "absolute",
    flexDirection: "row",
    backgroundColor: colors.gray200
  },
  rod: {
    width: 35,
    height: ROD_HEIGHT,
    marginHorizontal: 0.3,
    borderRadius: 3,
   
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
  correctRod: {
    backgroundColor: colors.green200,
  },
  wrongRod: {
    backgroundColor: "#FDE1E1",
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RodPuzzle;
