import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

type Variant = 
  | "locked"
  | "default"
  | "primary"
  | "primaryOutline"
  | "secondary"
  | "secondaryOutline"
  | "danger"
  | "dangerOutline"
  | "super"
  | "superOutline"
  | "ghost"
  | "sidebar"
  | "sidebarOutline";

type Size = "default" | "sm" | "lg" | "icon" | "rounded";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  onPress?: () => void;
  children: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const ButtonV2: React.FC<ButtonProps> = ({
  variant = "default",
  size = "default",
  onPress,
  children,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, variantStyles[variant], sizeStyles[size], style]}
    >
      <Text style={[styles.text, textStyles[variant], textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

// Base button styles
const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 2,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

// Variant styles
const variantStyles: Record<Variant, ViewStyle> = {
  locked: { backgroundColor: "#e5e5e5", borderColor: "#a3a3a3" },
  default: { backgroundColor: "white", borderColor: "#94a3b8" },
  primary: { backgroundColor: "#38bdf8", borderColor: "#0284c7" },
  primaryOutline: { backgroundColor: "white", borderColor: "#38bdf8" },
  secondary: { backgroundColor: "#22C45E", borderColor: "#ffffff" },
  secondaryOutline: { backgroundColor: "white", borderColor: "#22c55e" },
  danger: { backgroundColor: "#ef4444", borderColor: "#dc2626" },
  dangerOutline: { backgroundColor: "white", borderColor: "#ef4444" },
  super: { backgroundColor: "#6366f1", borderColor: "#4f46e5" },
  superOutline: { backgroundColor: "white", borderColor: "#6366f1" },
  ghost: { backgroundColor: "transparent", borderColor: "transparent" },
  sidebar: { backgroundColor: "transparent", borderColor: "transparent" },
  sidebarOutline: { backgroundColor: "rgba(14,165,233,0.15)", borderColor: "#38bdf8" },
};

// Size styles
const sizeStyles: Record<Size, ViewStyle> = {
  default: { height: 44 },
  sm: { height: 36, paddingHorizontal: 12 },
  lg: { height: 48, paddingHorizontal: 24 },
  icon: { width: 40, height: 40, borderRadius: 20 },
  rounded: { borderRadius: 9999, paddingHorizontal: 16 },
};

// Text color styles
const textStyles: Record<Variant, TextStyle> = {
  locked: { color: "#374151" },
  default: { color: "#22C45E" },
  primary: { color: "white" },
  primaryOutline: { color: "#38bdf8" },
  secondary: { color: "white" },
  secondaryOutline: { color: "#22c55e" },
  danger: { color: "white" },
  dangerOutline: { color: "#ef4444" },
  super: { color: "white" },
  superOutline: { color: "#6366f1" },
  ghost: { color: "#6b7280" },
  sidebar: { color: "#6b7280" },
  sidebarOutline: { color: "#38bdf8" },
};

export default ButtonV2;
