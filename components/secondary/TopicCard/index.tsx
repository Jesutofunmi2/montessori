import { TouchableOpacity, View, Text } from "react-native";
import styles from "./style";
import React from "react";
import LoaderHelper from "../LoaderHelper";

interface TopicCardInterface {
  item: {
    id: string;
    name: string;
    questions: string[];
  };
  enabled: boolean; 
}
const TopicCard = ({ item, enabled }: TopicCardInterface) => {
  return (
    <TouchableOpacity
      style={[styles.topicItem, !enabled && styles.disabled]}
      disabled={!enabled}
    >
      <Text style={[styles.topicText, !enabled && styles.disabledText]}>
        {item.name}
      </Text>
      <LoaderHelper isLoading={!enabled} />
    </TouchableOpacity>
  );
};

export default TopicCard;
