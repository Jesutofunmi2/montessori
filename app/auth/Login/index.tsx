import React from "react";
import { Text, Input, ProgressiveBar } from "../../../components/primary";
import {
  View,
  Text as BaseText,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import styles from "./style";
import { globalStyles } from "../../../assets/globalStyles";
import { usePlatform } from "../../../hooks";
import { colors } from "@/constants";
import { ArrowBackIcon } from "@/assets/svgs";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const { isIOS } = usePlatform();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[globalStyles.wrapper, styles.wrapper]}>
      <View style={styles.headerContent}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowBackIcon size={30} />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text
            text={"Enter your details"}
            fontSize={20}
            textAlign="center"
            color={colors.deepBlack}
            fontFamily="Fredoka_500Medium"
          />
        </View>
      </View>
      <View style={[styles.body, globalStyles.body]}>
        <Input
          label="Email Address / Username"
          value={""}
          placeholder="Enter email or username"
          keyboardType="email-address"
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
