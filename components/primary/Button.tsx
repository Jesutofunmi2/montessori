import { colors, layout } from '../../constants';
import { globalStyles } from '../../assets/globalStyles';

import React, { memo } from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
  ColorValue,
  TextStyle,
} from 'react-native';
import { Text } from './Text';

type ButtonProps = React.ComponentProps<typeof TouchableOpacity> & {
  title: string;
  isLoading?: boolean;
  disabled?: boolean;
  loaderColor?: string;
  color?: ColorValue;
  isDanger?: boolean;
  outlined?: boolean;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  iconLeft?: React.ReactElement;
  iconLeftStyle?: StyleProp<ViewStyle>;
};

export const Button = memo(
  ({
    title,
    outlined,
    loaderColor = colors.green500,
    disabled,
    color,
    isLoading = false,
    isDanger,
    textStyle,
    style,
    containerStyle,
    iconLeft,
    iconLeftStyle,
    ...rest
  }: ButtonProps) => {
    return (
      <View style={containerStyle}>
        <TouchableOpacity
          activeOpacity={0.8}
          disabled={isLoading === true ? isLoading : disabled}
          style={[
            outlined ? styles.btnOutlined : styles.btn,
            globalStyles.rowCenter,
            { borderColor: isDanger ? 'red' : colors.gray300, opacity: disabled ? 0.5 : 1 },
            style,
          ]}
          {...rest}>
          <>
            {iconLeft ? <View style={[styles.iconLeft, iconLeftStyle]}>{iconLeft}</View> : null}
            <Text
              text={title}
              color={outlined ? colors.green500 : colors.white}
              fontFamily="Fredoka_500Medium"
              fontSize={18}
              style={[textStyle, isDanger && { color: 'red' }]}
            />
            {isLoading ? (
              <ActivityIndicator
                animating
                size="small"
                color={loaderColor}
                style={{ marginLeft: layout.pixelSizeHorizontal(10) }}
              />
            ) : (
              <View />
            )}
          </>
        </TouchableOpacity>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  btn: {
    borderRadius: layout.heightPixel(8),
    height: layout.heightPixel(60),
    width: layout.widthPixel(380),
    backgroundColor: colors.green500,

    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    borderBottomColor: colors.green500, 
  },
  btnOutlined: {
    borderRadius: layout.heightPixel(8),
    height: layout.heightPixel(60),
    width: layout.widthPixel(380),
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.gray300,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  iconLeft: {
    marginRight: layout.pixelSizeHorizontal(8),
  },
});