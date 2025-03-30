import { Image } from "@/components/primary";
import { colors } from "@/constants";
import { subjects } from "@/constants/Slides";
import { NavigationProp, useNavigation } from "@react-navigation/native";
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
    <View style={styles.subjectItem}>
      <Text style={styles.subjectText}>{name}</Text>
      <Image source={icon} alt={name} style={{ width: 35, height: 35 }} />
    </View>
);

const SubjectsList = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <FlatList
      data={subjects}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("SubjectDetail", { subject: item })}>
        <SubjectItem name={item.name} icon={item.icon} />
        </TouchableOpacity>
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
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: 10,
    borderColor: colors.gray300,
    borderWidth: 1,
    transform: [{ perspective: 1000 }, { rotateX: "0deg" }, { rotateY: "0deg" }],
  },
  subjectText: {
    fontSize: 16,
    fontFamily: "Fredoka_500Medium",
  },
});

export default SubjectsList;
