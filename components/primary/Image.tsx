import React, { ComponentProps, memo } from 'react';
import { Image as RNImage } from 'react-native';

type ImageProps = ComponentProps<typeof RNImage> & {
  source?: object | number;
};

export const Image = memo(({ source, ...rest }: ImageProps) => {
  return <RNImage source={source} {...rest} />;
});
