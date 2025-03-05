import { colors } from "@/constants";
import React from "react";
import { Button, Text } from "@/components";
import { View, StyleSheet, Image } from "react-native";

const GetStarted = () => {
  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/images/block.png")}
          style={styles.image}
        />
        <View style={styles.titleContainer}>
          <Text
            text={"Nurture House Montessori"}
            color={colors.black}
            fontSize={30}
            fontFamily="Fredoka_700Bold"
            textAlign="center"
          />
          <Text
            text="Learn to read for free"
            color={colors.gray500}
            fontSize={20}
            textAlign="center"
            fontFamily="Fredoka_400Regular"
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button title={"SIGN IN WITH EMAIL"} />
        <Button title={"GET STARTED"} outlined={true} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 150,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  buttonContainer: {
    gap: 20,
  },
  titleContainer: {
    gap: 12,
  },
});

export default GetStarted;
