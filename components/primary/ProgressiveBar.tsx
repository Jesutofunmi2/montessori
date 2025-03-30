import { colors, layout } from "../../constants";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
type ProgressiveBar = {
    progress: number
}
export const ProgressiveBar = memo(({ progress = 0 }: ProgressiveBar) => {
  return (
   
    <View style={styles.parentContainer}>
      <View style={[styles.childContainer, { width: `${progress}%` }]} />
    </View>
  );
});

const styles = StyleSheet.create({
  parentContainer: {
    borderRadius: layout.heightPixel(38),
    height: layout.heightPixel(25),
    width: layout.widthPixel(330),
    backgroundColor: colors.gray200,
    borderColor: colors.white,
    borderWidth: layout.heightPixel(1), 
    overflow: "hidden",
    borderStyle: "solid",
  },
  childContainer: {
    borderRadius: layout.heightPixel(37),
    height: layout.heightPixel(22),
    backgroundColor: colors.green500,
  },
});