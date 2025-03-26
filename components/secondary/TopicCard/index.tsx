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
  };
  enabled: boolean; 
}
const TopicCard = ({ item, enabled }: TopicCardInterface) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      style={[styles.topicItem, !enabled && styles.disabled]}
      disabled={!enabled}
      onPress={() => navigation.navigate("LearningRod")}
    >
      <Text style={[styles.topicText, !enabled && styles.disabledText]}>
        {item.name}
      </Text>
      <LoaderHelper isLoading={!enabled} />
    </TouchableOpacity>
  );
};

export default TopicCard;
