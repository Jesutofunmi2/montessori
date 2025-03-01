import React from 'react';

import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native';
import { colors, layout } from '../../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type CheckBoxProps = {
  selected: boolean;
  error?: boolean;
  style?: StyleProp<ViewStyle>;
  onChangeValue: () => void;
  roundBorder?: boolean;
};

export const CheckBox = ({
  selected,
  error,
  onChangeValue,
  style,
  roundBorder = false,
}: CheckBoxProps) => {
  return (
    <View style={[styles.checkBox, style]}>
      <TouchableOpacity activeOpacity={0.8} onPress={onChangeValue}>
        {!roundBorder ? (
          <MaterialIcons
            size={20}
            color={error && !selected ? 'tomato' : colors.green500}
            name={selected ? 'check-box' : 'check-box-outline-blank'}
          />
        ) : (
          <View style={[styles.roundCheckBody, selected && styles.roundCheckBodyBackground]}>
            {selected ? (
              <MaterialIcons
                size={20}
                color={error && !selected ? 'tomato' : colors.white}
                name="check"
              />
            ) : null}
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  checkBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  contentBox: {
    flex: 1,
    paddingLeft: layout.pixelSizeHorizontal(10),
  },
  roundCheckBody: {
    width: 25,
    height: 25,
    flexShrink: 0,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#ddd',
    borderRadius: 25,
  },
  roundCheckBodyBackground: {
    backgroundColor: colors.purple500,
    borderColor: colors.green500,
  },
});