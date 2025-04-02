import { TouchableOpacity, View, Text } from "react-native";
import styles from "./style";
import React from "react";
import LoaderHelper from "../LoaderHelper";
import { NavigationProp, useNavigation } from "@react-navigation/native";

interface TopicCardInterface {
  item: {
    id: string;
    name: string;
    questions: string[];
    active: boolean;
    link: string;
  };
}
const TopicCard = ({ item }: TopicCardInterface) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      style={[styles.topicItem, !item.active && styles.disabled]}
      disabled={!item.active}
      onPress={() => item.id === "1" ?  navigation.navigate("LearningRod") : navigation.navigate("SandPaper")}
    >
      <Text style={[styles.topicText, !item.active && styles.disabledText]}>
        {item.name}
      </Text>
      <LoaderHelper isLoading={!item.active} />
    </TouchableOpacity>
  );
};

export default TopicCard;
