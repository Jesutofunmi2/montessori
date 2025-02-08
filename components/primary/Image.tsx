import React, { ComponentProps, memo } from 'react';

import FastImage from 'react-native-fast-image';

type ImageProps = ComponentProps<typeof FastImage> & {
  source?: object | number;
};

export const Image = memo(({ source, ...rest }: ImageProps) => {
  return <FastImage source={source} {...rest} />;
});