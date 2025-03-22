import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@/components";
import { colors } from "@/constants";
import secondary from '../../../components/secondary/index';

const Home = () => (
  <View style={styles.container}>
    <secondary.HeaderPage />
    <secondary.Greeting />
    <Text style={styles.subjectsTitle} text="Subjects" />
    <secondary.SubjectsList />
    <secondary.CustomBottomNav />
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
