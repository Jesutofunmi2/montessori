import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { getMarkup } from '../../assets/svgs';

type Props = {
  name: string;
  color?: string;
};

const SvgImage = ({ color, name }: Props) => <SvgXml xml={getMarkup(color)[name]} />;

export const SVGIcon = ({ name, color }: Props) => {
  return (
    <View pointerEvents="none">
      <SvgImage color={color} name={name} />
    </View>
  );
};