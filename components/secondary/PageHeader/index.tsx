import { Text, Image, SVGIcon } from "@/components/primary";
import { colors } from "@/constants";
import { RootState } from "@/store";
import React from "react";
import { View, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import HorizontalLineWithTriangle from "../HorizontalLine";
import AppleIcon from "@/assets/svgs/AppleIcon";
import NotificationIcon from "@/assets/svgs/NotificationIcon";
import FireIcon from "@/assets/svgs/FireIcon";
import SilverIcon from "@/assets/svgs/SilverIcon";

const HeaderPage = () => {
  const selectedImage = useSelector(
    (state: RootState) => state.avatarSlice.selectedAvatar
  );
  return (
    <View style={styles.header}>
      <NotificationIcon />
      <View style={styles.points}>
        <FireIcon />
        <Text style={styles.pointText} text={"0"} />
      </View>
      <View style={styles.points}>
        <SilverIcon />
        <Text style={styles.pointText} text="500" />
      </View>
      {selectedImage ? (
        <Image
          source={selectedImage.image}
          style={[styles.avatar, { backgroundColor: selectedImage.color }]}
        />
      ) : (
        <MaterialCommunityIcons name="account-circle" size={40} color="gray" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 3,
    borderBlockColor: "#F0F4F8",
  },
  points: { flexDirection: "row", alignItems: "center", gap: 5 },
  pointText: {
    fontSize: 16,
    color: colors.black,
    fontFamily: "Fredoka_400Regular",
    textAlign: "center",
  },
  avatar: { width: 40, height: 40, borderRadius: 20, marginBottom: 3 },
});

export default HeaderPage;
