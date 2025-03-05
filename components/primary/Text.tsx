import React, { memo, useMemo } from "react";
import { ColorValue, StyleProp, Text as BaseText, TextStyle, TextProps } from "react-native";
import { colors, layout } from "../../constants";
import { useFonts, Fredoka_400Regular, Fredoka_500Medium, Fredoka_700Bold } from "@expo-google-fonts/fredoka";

type FontVariants = "Fredoka_700Bold" | "Fredoka_400Regular" | "Fredoka_500Medium";

interface CustomTextProps extends TextProps {
  text: string;
  color?: ColorValue;
  textAlign?: "center" | "left" | "right" | "justify" | "auto";
  fontSize?: number;
  fontFamily?: FontVariants;
  style?: StyleProp<TextStyle>;
}

export const Text = memo(
  ({
    text,
    color = colors.white,
    textAlign = "left",
    fontSize = 16,
    fontFamily = "Fredoka_700Bold",
    style,
    ...rest
  }: CustomTextProps) => {
    const [fontsLoaded] = useFonts({
      Fredoka_400Regular,
      Fredoka_500Medium,
      Fredoka_700Bold,
    });
    const textStyles = useMemo(
      () => ({
        color,
        textAlign,
        fontSize: layout.fontPixel(fontSize),
        fontFamily,
      }),
      [color, textAlign, fontSize, fontFamily]
    );

    return (
      <BaseText style={[textStyles, style]} {...rest}>
        {text}
      </BaseText>
    );
  }
);
