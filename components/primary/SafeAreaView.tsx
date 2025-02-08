import React, { ComponentProps, memo } from 'react';

import { SafeAreaView as BaseSafeAreaView, Edge } from 'react-native-safe-area-context';
import { globalStyles } from '../../assets/globalStyles';
import { StyleProp, ViewStyle } from 'react-native';

type SafeAreaViewProps = ComponentProps<typeof BaseSafeAreaView> & {
  children: React.ReactNode;
  edges?: readonly Edge[];
  style?: StyleProp<ViewStyle>;
};

export const SafeAreaView = memo(({ children, edges, style, ...props }: SafeAreaViewProps) => {
  return (
    <BaseSafeAreaView
      edges={edges ? edges : ['left', 'right']}
      style={[globalStyles.wrapper, style]}
      {...props}>
      {children}
    </BaseSafeAreaView>
  );
});