import { Image } from "@/components/primary";
import { colors } from "@/constants";
import { subjects } from "@/constants/Slides";
import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

type Subject = {
  name: string;
  icon: any;
};

const SubjectItem = ({ name, icon }: Subject) => (
  <TouchableOpacity>
    <View style={styles.subjectItem}>
      <Text style={styles.subjectText}>{name}</Text>
      <Image source={icon} alt={name} style={{ width: 40, height: 40 }} />
    </View>
  </TouchableOpacity>
);

const SubjectsList = () => {
  return (
    <FlatList
      data={subjects}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <SubjectItem name={item.name} icon={item.icon} />
      )}
      contentContainerStyle={styles.subjectsContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  subjectsTitle: {
    fontSize: 18,
    fontFamily: "Fredoka_500Medium",
    marginBottom: 10,
  },
  subjectsContainer: {
    paddingBottom: 20,
  },
  subjectItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: 10,
    borderColor: colors.gray300,
    borderWidth: 2,
  },
  subjectText: {
    fontSize: 18,
    fontFamily: "Fredoka_500Medium",
  },
});

export default SubjectsList;
