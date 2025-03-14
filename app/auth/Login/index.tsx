import React from "react";
import {
  Text,
  Input,
  ProgressiveBar,
  Button,
} from "../../../components/primary";
import {
  View,
  Text as BaseText,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./style";
import { globalStyles } from "../../../assets/globalStyles";
import { usePlatform } from "../../../hooks";
import { colors, layout } from "@/constants";
import { ArrowBackIcon } from "@/assets/svgs";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import GoogleIcon from "@/assets/svgs/GoogleIcon";
import FacebookIcon from "@/assets/svgs/FacebookIcon";
import AppleIcon from "@/assets/svgs/AppleIcon";

const Login = () => {
  const { isIOS } = usePlatform();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={[globalStyles.wrapper, styles.wrapper]}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowBackIcon size={20} />
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
          <View style={styles.form}>
            <Input
              label="Enter email or phone"
              placeholder="Enter email or phone"
              keyboardType="email-address"
              required
            />

            <Input
              label="Enter password"
              placeholder="Enter password"
              required
              isPassword={true}
            />

            <Input
              label="Confirm password"
              placeholder="Confirm password"
              required
              isPassword={true}
            />
          </View>
          <View style={styles.btnWrapper}>
            <Button
              title={"SIGN UP"}
              outlined={true}
              textStyle={{
                fontFamily: "Fredoka_400Regular",
                fontSize: 14,
                color: colors.deepGray,
              }}
              onPress={() => {
                navigation.navigate("BioData");
              }}
            />
          </View>

          <View style={styles.footerText}>
            <Button
              title={"SIGN UP WITH GOOGLE"}
              outlined={true}
              iconLeft={<GoogleIcon />}
              textStyle={{
                fontFamily: "Fredoka_400Regular",
                fontSize: 12,
                color: colors.slate500,
              }}
            />
            <Button
              title={"SIGN UP WITH FACEBOOK"}
              outlined={true}
              iconLeft={<FacebookIcon />}
              textStyle={{
                fontFamily: "Fredoka_400Regular",
                fontSize: 12,
                color: colors.slate500,
              }}
            />
            <Button
              title={"SIGN UP WITH APPLE"}
              outlined={true}
              iconLeft={<AppleIcon />}
              textStyle={{
                fontFamily: "Fredoka_400Regular",
                fontSize: 12,
                color: colors.slate500,
              }}
            />
            <Text
              text="By continuing, you agree to our Terms and Privacy Policy"
              textAlign="center"
              fontSize={14}
              fontFamily="Fredoka_400Regular"
              color={colors.slate500}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
