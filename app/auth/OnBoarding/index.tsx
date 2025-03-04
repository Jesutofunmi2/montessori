import React, { useRef, useState } from "react";
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
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ViewToken } from "react-native";

const { width, height } = Dimensions.get("window");

const slides = [
  { id: "1", title: "Explore hands-on learning with fun activities!", color: colors.yellow500 },
  { id: "2", title: "Pick what you love to learn and go at your own pace!", color: colors.blue500 },
  { id: "3", title: "Complete challenges, earn badges, and grow with every step!", color: colors.red500 },
  { id: "4", title: "Parents track progress, set goals, and support learning!", color: colors.purple500 },
];

const OnBoarding = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<any> | null>(null);

  const onViewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      const index = viewableItems[0].index ?? 0;
      setCurrentIndex(index);

      if (index === slides.length) {
        handleSkip(); // Auto-move to Login when swiping past last slide
      }
    }
  };
  const handleSkip = () => {
    navigation.navigate("Login");
  };

  const renderItem: ListRenderItem<{ id: string; title: string; color: string }> = ({ item }) => (
    <View style={[styles.slide, { backgroundColor: item.color }]}>
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Tee style={[styles.skipText, {color: item.color}]}>Skip</Tee>
        <Ionicons name="arrow-forward" size={20} color={item.color} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text text={item.title} color={colors.white} fontSize={38} fontFamily="Fredoka-Medium" textAlign="center" />
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
    gap:30,
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
