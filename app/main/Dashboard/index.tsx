import Header from "@/components/secondary/PageHeader";
import Greeting from "@/components/secondary/GreetingCard";
import SubjectsList from "@/components/secondary/SubjectCard";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@/components";
import { colors } from "@/constants";

const Home = () => (
  <View style={styles.container}>
    <Header />
    <Greeting />
    <Text style={styles.subjectsTitle} text="Subjects" />
    <SubjectsList />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 20 },
  subjectsTitle: {
    fontSize: 18,
    fontFamily:"Fredoka_500Medium",
    marginBottom: 10,
    color: colors.black,
  },
});

export default Home;
