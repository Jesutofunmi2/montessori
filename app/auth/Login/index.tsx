import React from 'react';
import { Text, Input, ProgressiveBar } from '../../../components/primary';
import { colors } from '../../../constants';
import { View, Text as BaseText, SafeAreaView } from 'react-native';
import styles  from './style';
import { globalStyles } from '../../../assets/globalStyles';
import { usePlatform } from '../../../hooks';

 const Login = () => {
    const { isIOS } = usePlatform();
  return (
    <SafeAreaView style={[globalStyles.wrapper, styles.wrapper]}>
      <View style={[styles.body, globalStyles.body]}>
          <Input
            label="Email Address / Username"
            value={""}
            placeholder="Enter email or username"
            keyboardType="email-address"
          />

          <View style={styles.container}>
            <BaseText
              style={styles.footerText}
              onPress={() => {}}>
              <Text
                text="Don't have an account?"
                textAlign="center"
                color={colors.green500}
              />{' '}
              <Text text="Sign up" textAlign="center" color={colors.purple500} />
              <ProgressiveBar progress={50} />
            </BaseText>
          </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;