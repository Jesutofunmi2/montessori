import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import LearningCard from "../LearningHeader";
import { globalStyles } from "@/assets/globalStyles";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "?"];

const NumberGrid = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={[globalStyles.container, globalStyles.body]}>
      <LearningCard title={"Lets Learn Sandpaper Number"} enabled={true} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={numbers}
        numColumns={2}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("TracingScreen")}>
            <View style={styles.card}>
              <Text style={styles.numberText}>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    aspectRatio: 1,
    margin: 6,
    backgroundColor: "#F7F9FB",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
  },
});

export default NumberGrid;
