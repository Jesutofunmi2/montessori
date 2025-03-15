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
              <Text text="* " fontFamily="Fredoka_400Regular" color={colors.red500} fontSize={16} />
            ) : null}
            <Text text={label} color={colors.gray500} fontSize={16} style={styles.label} fontFamily="Fredoka_400Regular"/>
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
                  ? '#F7F9FB'
                  : editableBackGroundColor
                  ? editableBackGroundColor
                  : '#D0D4DA',
            },
            containerStyle,
          ]}>
          {isPhoneNumber ? (
            <View style={globalStyles.rowCenter}>
              <Text
                text={countryCode || '+234  '}
                fontSize={16}
                textAlign="center"
                color={colors.black}
              />
              {iconLeft}
            </View>
          ) : null}
          <TextInput
            placeholderTextColor={colors.black}
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
                    : '#D0D4DA',
              },
              style,
            ]}
            {...rest}
          />
          {isLoading ? (
            <View style={{ marginLeft: layout.pixelSizeHorizontal(10) }}>
              <ActivityIndicator size="small" color={colors.green500} />
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
                color={colors.green500}
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
            color={colors.red500}
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
    margin: layout.fontPixel(15),
  },
  container: {
    borderRadius: 8,
    paddingHorizontal: layout.pixelSizeHorizontal(18),
    borderWidth: 0.75,
    borderColor: colors.deepGray,
    backgroundColor: colors.deepGray,
  },
  input: {
    flex: 1,
    borderRadius: 4,
    fontSize: layout.fontPixel(18),
    color: colors.green500,
    fontFamily: 'Fredoka_400Regular',
    borderColor: colors.deepGray,
    backgroundColor: colors.deepGray,
  },
  label: {
    paddingBottom: layout.pixelSizeVertical(10),
  },
  info: {
    paddingTop: layout.pixelSizeVertical(10),
  },
});