import React, { memo, useMemo } from 'react';
import { ColorValue, StyleProp, Text as BaseText, TextStyle } from 'react-native';
import { colors, layout } from '../../constants';

type FontVariants = 'Fredoka-Bold' | 'Fredoka-Regular' | 'Fredoka-Medium';

type TextProps = BaseText['props'] & {
  text: string;
  color?: ColorValue;
  textAlign?: 'center' | 'left' | 'right' | 'justify' | 'auto';
  fontSize?: number;
  fontFamily?: FontVariants;
  style?: StyleProp<TextStyle>;
};

export const Text = memo(
  ({
    text,
    color = colors.white,
    textAlign = 'left',
    fontSize = 16,
    fontFamily = 'Fredoka-Bold',
    style,
    ...rest
  }: TextProps) => {
    const styles = useMemo(
      () => ({
        color,
        textAlign,
        fontSize: layout.fontPixel(fontSize),
        fontFamily,
      }),
      [color, textAlign, fontSize, fontFamily],
    );

    return (
      <BaseText style={[styles, style]} {...rest}>
        {text}
      </BaseText>
    );
  },
);
