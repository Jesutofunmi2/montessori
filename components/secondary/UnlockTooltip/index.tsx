import React from "react";
import styles from './style';
import { View, Text, TouchableOpacity } from "react-native";

interface TooltipProps {
  message: string;
  onPress: () => void;
}

const UnlockTooltip = ({ message, onPress }: TooltipProps) => {
  return (
    <View style={styles.tooltipContainer}>
      <Text style={styles.message}>
        This lesson is locked. Pass a test to unlock <Text style={styles.highlight}>‘{message}’</Text>
      </Text>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Take test now</Text>
      </TouchableOpacity>
      <View style={styles.arrowDown} />
    </View>
  );
};

export default UnlockTooltip;
