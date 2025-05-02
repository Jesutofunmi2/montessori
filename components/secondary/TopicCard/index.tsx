import { TouchableOpacity, View, Text } from "react-native";
import styles from "./style";
import React, { useState } from "react";
import LoaderHelper from "../LoaderHelper";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import LockIcon from "@/assets/svgs/LockIcon";
import PlusIcon from "@/assets/svgs/PlusIcon";
import MinusIcon from "@/assets/svgs/MinusIcon";
import { colors } from "@/constants";

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
  const [isExpanded, setIsExpanded] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleNavigate = () => {
    if (item.id === "1") {
      navigation.navigate("LearningRod");
    } else {
      navigation.navigate("SandPaper");
    }
  };

  const handlePress = () => {
    if (item.active) {
      setIsExpanded(!isExpanded);
    }
  };
  return (
    <TouchableOpacity
      style={[styles.topicItem, !item.active && styles.disabled]}
      disabled={!item.active}
      onPress={handlePress}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LoaderHelper isLoading={false} />
          <Text style={[styles.topicText, !item.active && styles.disabledText]}>
            {item.name}
          </Text>
        </View>
        {!item.active ? (
          <LockIcon />
        ) : isExpanded ? (
          <MinusIcon />
        ) : (
          <PlusIcon />
        )}
      </View>
      {isExpanded && item.active && (
        <>
          <TouchableOpacity onPress={handleNavigate} style={styles.subItem}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flexShrink: 1,
              }}
            >
              <Text style={{ fontSize: 11, fontFamily: "Fredoka_400Regular" }}>
                Activity 1 : Longest to Shortest
              </Text>
              <Text
                style={{
                  backgroundColor: "#F3E7A5",
                  borderRadius: 8,
                  padding: 5,
                  fontSize: 11,
                  fontFamily: "Fredoka_400Regular",
                }}
              >
                Review
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNavigate} style={styles.subItem}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flexShrink: 1,
              }}
            >
              <Text style={{ fontSize: 11, fontFamily: "Fredoka_400Regular" }}>
                Activity 2 : Shortest to Longest
              </Text>
              <Text
                style={{
                  backgroundColor: "#159D47",
                  borderRadius: 8,
                  color: colors.white,
                  padding: 5,
                  fontSize: 11,
                  fontFamily: "Fredoka_400Regular",
                }}
              >
                Start
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNavigate} style={styles.subItem}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 1,
            }}
          >
            <Text style={{ fontSize: 11, fontFamily: "Fredoka_400Regular" }}>
              Learn 1, 2, 3
            </Text>
            <Text
              style={{
                backgroundColor: "#F3E7A5",
                borderRadius: 8,
                padding: 5,
                fontSize: 11,
                fontFamily: "Fredoka_400Regular",
              }}
            >
              Review
            </Text>
          </View>
        </TouchableOpacity>
        </>
      )}
    </TouchableOpacity>
  );
};

export default TopicCard;
