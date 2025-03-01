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
    height: layout.heightPixel(30),
    width: layout.widthPixel(380),
    backgroundColor: colors.green500,
    borderColor: colors.white,
    borderWidth: layout.heightPixel(1), 
    overflow: "hidden",
    borderStyle: "solid",
  },
  childContainer: {
    borderRadius: layout.heightPixel(38),
    height: layout.heightPixel(30),
    backgroundColor: colors.green500,
  },
});