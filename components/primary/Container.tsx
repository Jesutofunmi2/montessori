import React, { memo } from 'react';
import { ScrollView, ViewStyle } from 'react-native';
import { globalStyles } from '../../assets/globalStyles';
import { StyleProp } from 'react-native';

type ContainerProps = ScrollView['props'] & {
  children: React.ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

export const Container = memo(({ children, contentContainerStyle, ...rest }: ContainerProps) => {
  return (
    <ScrollView
      contentContainerStyle={[globalStyles.container, contentContainerStyle]}
      showsVerticalScrollIndicator={false}
      {...rest}>
      {children}
    </ScrollView>
  );
});