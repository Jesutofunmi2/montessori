import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Text } from './Text';
import { SVGIcon } from './SVGIcon';
import { colors } from '../../constants';

interface HeaderProps {
  title: string;
  topTitle?: string;
  bottomTitle?: string;
  onPress: () => void;
}

export const Header = ({ title, topTitle = '', bottomTitle = '', onPress }: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onPress}>
        <SVGIcon name="backBtn" />
      </TouchableOpacity>
      <View style={[styles.txtContainer]}>
        <Text text={topTitle} fontWeight="400" fontSize={16} color={colors.grey_100} />
        <Text text={title} fontWeight="500" fontSize={24} />
        <View style={{ width: 250 }}>
          <Text
            text={bottomTitle}
            fontWeight="400"
            fontSize={14}
            color={colors.primaryColorLight}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 8,
  },
  txtContainer: { marginLeft: 16 },
});