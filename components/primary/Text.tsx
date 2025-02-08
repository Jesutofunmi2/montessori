import React, { memo, useMemo } from 'react';
import { ColorValue, StyleProp, Text as BaseText, TextStyle } from 'react-native';
import { colors, layout } from '../../constants';

type TextProps = BaseText['props'] & {
  text: string;
  color?: ColorValue;
  textAlign?: 'center' | 'left' | 'right' | 'justify' | 'auto';
  fontSize?: number;
  fontFamily?: 'DMSans-Bold' | 'DMSans-Regular' | 'DMSans-Medium';
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  style?: StyleProp<TextStyle>;
};

export const Text = memo(
  ({
    text,
    color = colors.primaryColorDark,
    textAlign = 'left',
    fontSize = 16,
    fontWeight = '400',
    fontFamily = 'DMSans-Regular',
    style,
    ...rest
  }: TextProps) => {
    const styles = useMemo(
      () => ({
        color,
        textAlign,
        fontSize: layout.fontPixel(fontSize),
        fontWeight,
        fontFamily,
      }),
      [color, textAlign, fontSize, fontWeight, fontFamily],
    );

    return (
      <BaseText style={[styles, style]} {...rest}>
        {text}
      </BaseText>
    );
  },
);