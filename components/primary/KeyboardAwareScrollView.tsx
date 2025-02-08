import React, { memo } from 'react';

import { KeyboardAwareScrollView as BaseKeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { globalStyles } from '../../assets/globalStyles';

type KeyboardAwareScrollViewProps = BaseKeyboardAwareScrollView['props'] & {
  children: React.ReactNode;
};

export const KeyboardAwareScrollView = memo(
  ({ children, ...rest }: KeyboardAwareScrollViewProps) => {
    return (
      <BaseKeyboardAwareScrollView
        contentContainerStyle={[globalStyles.container, { flexGrow: 1 }]}
        showsVerticalScrollIndicator={false}
        {...rest}>
        {children}
      </BaseKeyboardAwareScrollView>
    );
  },
);