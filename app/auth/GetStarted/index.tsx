import { colors, layout } from "@/constants";
import React from "react";
import { Button, Text } from "@/components";
import { View, StyleSheet, Image } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const GetStarted = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
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
            fontSize={layout.fontPixel(28)}
            fontFamily="Fredoka_700Bold"
            textAlign="center"
          />
          <Text
            text="Learn to read for free"
            color={colors.gray500}
            fontSize={layout.fontPixel(20)}
            textAlign="center"
            fontFamily="Fredoka_400Regular"
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title={"SIGN IN WITH EMAIL"}
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
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
    paddingHorizontal: layout.pixelSizeHorizontal(20),
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: layout.pixelSizeVertical(150),
  },
  image: {
    width: layout.pixelSizeHorizontal(250),
    height: layout.pixelSizeVertical(300),
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
