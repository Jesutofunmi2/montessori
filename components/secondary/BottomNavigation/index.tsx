import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { colors } from "@/constants";

type RootTabParamList = {
  Home: undefined;
  Learning: undefined;
  Quest: undefined;
  Profile: undefined;
};

const CustomBottomNav = () => {
  const navigation = useNavigation<BottomTabNavigationProp<RootTabParamList>>();

  const tabs: { name: keyof RootTabParamList; icon: string }[] = [
    { name: "Home", icon: "home" },
    { name: "Learning", icon: "book-open" },
    { name: "Quest", icon: "help-circle" },
    { name: "Profile", icon: "account" },
  ];

  return (
    <View style={styles.navContainer}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate(tab.name)}
          style={styles.navItem}
        >
          <Icon name={tab.icon} size={24} color="white" />
          <Text style={styles.navText}>{tab.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: colors.green500,
    borderRadius: 30,
    paddingVertical: 10,
    justifyContent: "space-around",
    alignItems: "center",
    elevation: 5,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    color: "white",
    fontSize: 12,
    marginTop: 3,
  },
});

export default CustomBottomNav;
