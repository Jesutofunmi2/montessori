import React from "react";
import { colors } from "@/constants";
import {
  View,
  StyleSheet,
  Text as Tee,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
  Dimensions,
} from "react-native";
import { Text } from "@/components";
import OnBoardingCard from "@/components/primary/OnBoardingCard";
import Ionicons from "react-native-vector-icons/Ionicons";
import useOnBoardingLogic from "./useOnBoardingLogic";
import { slides } from "@/constants/Slides";

const { width, height } = Dimensions.get("window");

const OnBoarding = () => {
  const {
    setCurrentIndex,
    handleSkip,
    flatListRef,
  } = useOnBoardingLogic();
  const renderItem: ListRenderItem<{
    id: string;
    title: string;
    color: string;
  }> = ({ item }) => (
    <View style={[styles.slide, { backgroundColor: item.color }]}>
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Tee style={[styles.skipText, { color: item.color }]}>Skip</Tee>
        <Ionicons name="arrow-forward" size={20} color={item.color} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text
          text={item.title}
          color={colors.white}
          fontSize={38}
          fontFamily="Fredoka_500Medium"
          textAlign="center"
        />
      </View>
      <OnBoardingCard>
        <Text text="" color={colors.purple500} fontSize={18} />
      </OnBoardingCard>
    </View>
  );

  return (
    <FlatList
      ref={flatListRef}
      data={slides}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ width: width * slides.length }}
      onMomentumScrollEnd={(event) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / width);
        setCurrentIndex(index);
        if (index === slides.length - 1) {
          handleSkip();
        }
      }}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    width,
    height,
    justifyContent: "center",
    gap: 30,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  textContainer: {
    maxWidth: "95%",
    alignItems: "center",
    marginTop: 110,
  },
  skipButton: {
    position: "absolute",
    top: 40,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  skipText: {
    color: colors.white,
    fontSize: 14,
    marginRight: 5,
  },
});

export default OnBoarding;
