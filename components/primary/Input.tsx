import React, { memo } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  Text as BaseText,
  ActivityIndicator,
  ColorValue,
} from 'react-native';

import { Text } from './Text';
import { useSecureTextEntry } from '../../hooks';
import { colors, layout } from '../../constants';
import { globalStyles } from '../../assets/globalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

type InputProps = TextInput['props'] & {
  label?: string;
  info?: string;
  error?: string;
  required?: boolean;
  height?: number;
  isPassword?: boolean;
  isLoading?: boolean;
  isPhoneNumber?: boolean;
  countryCode?: string;
  editable?: boolean;
  editableBackGroundColor?: ColorValue;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  infoStyle?: StyleProp<TextStyle>;
  iconRight?: React.ReactElement;
  iconLeft?: React.ReactElement;
};

export const Input = memo(
  ({
    label,
    info,
    error,
    required = true,
    isPassword = false,
    height = layout.heightPixel(60),
    isPhoneNumber,
    isLoading,
    editable = true,
    editableBackGroundColor,
    containerStyle,
    style,
    countryCode,
    labelStyle,
    infoStyle,
    iconRight,
    iconLeft,
    ...rest
  }: InputProps) => {
    const { secureTextEntry, toggleEntry } = useSecureTextEntry(isPassword);

    return (
      <View style={styles.wrapper}>
        {label ? (
          <BaseText style={[{ paddingBottom: layout.pixelSizeVertical(10) }, labelStyle]}>
            {required ? (
              <Text text="* " fontFamily="DMSans-Medium" color={colors.error} fontSize={16} />
            ) : null}
            <Text text={label} color={colors.primaryColorDark} fontSize={16} style={styles.label} />
          </BaseText>
        ) : null}
        <View
          style={[
            styles.container,
            globalStyles.rowBetween,
            {
              height,
              backgroundColor:
                editable === true
                  ? 'transparent'
                  : editableBackGroundColor
                  ? editableBackGroundColor
                  : '#eee',
            },
            containerStyle,
          ]}>
          {isPhoneNumber ? (
            <View style={globalStyles.rowCenter}>
              <Text
                text={countryCode || '+234  '}
                fontSize={16}
                textAlign="center"
                color={colors.secondaryBg}
              />
              {iconLeft}
            </View>
          ) : null}
          <TextInput
            placeholderTextColor={colors.grey_100}
            secureTextEntry={secureTextEntry}
            autoCapitalize="none"
            autoCorrect={false}
            editable={!isLoading && editable}
            style={[
              styles.input,
              {
                height,
                backgroundColor:
                  editable === true
                    ? 'transparent'
                    : editableBackGroundColor
                    ? editableBackGroundColor
                    : '#eee',
              },
              style,
            ]}
            {...rest}
          />
          {isLoading ? (
            <View style={{ marginLeft: layout.pixelSizeHorizontal(10) }}>
              <ActivityIndicator size="small" color={colors.secondaryBg} />
            </View>
          ) : null}
          {isPassword && !isLoading ? (
            <TouchableOpacity
              activeOpacity={0.6}
              style={{ marginLeft: layout.pixelSizeHorizontal(10) }}
              onPress={toggleEntry}>
              <Ionicons
                name={secureTextEntry ? 'eye-outline' : 'eye-off-outline'}
                size={20}
                color={colors.green_100}
              />
            </TouchableOpacity>
          ) : (
            <>{iconRight ? iconRight : null}</>
          )}
        </View>

        {error && (
          <Text
            text={error}
            color="tomato"
            fontSize={13}
            textAlign="right"
            style={globalStyles.error}
          />
        )}
        {!error && info && (
          <Text
            text={info}
            color={colors.primaryColorDark}
            fontWeight="500"
            fontSize={14}
            style={[styles.info, infoStyle]}
          />
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: layout.fontPixel(20),
  },
  container: {
    borderRadius: 4,
    paddingHorizontal: layout.pixelSizeHorizontal(20),
    borderWidth: 0.75,
    borderColor: 'rgba(151, 151, 151, 0.3)',
  },
  input: {
    flex: 1,
    borderRadius: 4,
    fontSize: layout.fontPixel(16),
    color: colors.primaryColorLight,
    fontWeight: '400',
    fontFamily: 'DMSans-Regular',
    borderColor: colors.grey_100,
  },
  label: {
    paddingBottom: layout.pixelSizeVertical(10),
  },
  info: {
    paddingTop: layout.pixelSizeVertical(10),
  },
});