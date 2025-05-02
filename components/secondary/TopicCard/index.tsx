import {
  TouchableOpacity,
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import styles from "./style";
import React, { useState } from "react";
import LoaderHelper from "../LoaderHelper";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import LockIcon from "@/assets/svgs/LockIcon";
import PlusIcon from "@/assets/svgs/PlusIcon";
import MinusIcon from "@/assets/svgs/MinusIcon";
import { colors } from "@/constants";
import UnlockTooltip from "../UnlockTooltip";

interface TopicCardInterface {
  item: {
    id: string;
    name: string;
    questions: string[];
    active: boolean;
    link: string;
  };
  activeTooltipId: string | null;
  setActiveTooltipId: (id: string | null) => void;
}
const TopicCard = ({ item, activeTooltipId, setActiveTooltipId }: TopicCardInterface) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const showLockTooltip = activeTooltipId === item.id;
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
    <>
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
              gap: 4,
            }}
          >
            <LoaderHelper isLoading={false} />
            <Text
              style={[styles.topicText, !item.active && styles.disabledText]}
            >
              {item.name}
            </Text>
          </View>
          {!item.active ? (
            <TouchableOpacity onPress={() => setActiveTooltipId(item?.id)}>
              <LockIcon />
            </TouchableOpacity>
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
                <Text
                  style={{ fontSize: 11, fontFamily: "Fredoka_400Regular" }}
                >
                  Activity 1 : Longest to Shortest
                </Text>
                <Text
                  style={{
                    backgroundColor: "#F3E7A5",
                    borderRadius: 6,
                    padding: 4,
                    width: 45,
                    textAlign: "center",
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
                <Text
                  style={{ fontSize: 11, fontFamily: "Fredoka_400Regular" }}
                >
                  Activity 2 : Shortest to Longest
                </Text>
                <Text
                  style={{
                    backgroundColor: "#159D47",
                    borderRadius: 6,
                    color: colors.white,
                    padding: 4,
                    width: 45,
                    textAlign: "center",
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
                <Text
                  style={{ fontSize: 11, fontFamily: "Fredoka_400Regular" }}
                >
                  Learn 1, 2, 3
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
                <Text
                  style={{ fontSize: 11, fontFamily: "Fredoka_400Regular" }}
                >
                  Learn 4, 5, 6
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
                <Text
                  style={{ fontSize: 11, fontFamily: "Fredoka_400Regular" }}
                >
                  Learn 7,8
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
                <Text
                  style={{ fontSize: 11, fontFamily: "Fredoka_400Regular" }}
                >
                  Learn 9, 10
                </Text>
              </View>
            </TouchableOpacity>
          </>
        )}
      </TouchableOpacity>
      {activeTooltipId === item.id && (
        <TouchableOpacity onPress={() => setActiveTooltipId(null)}>
          <View style={StyleSheet.absoluteFillObject}>
            <UnlockTooltip
              message={item?.name}
              onPress={() => {
                setActiveTooltipId(null);
                navigation.navigate("LearningRod");
              }}
            />
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default TopicCard;
