import React from 'react';
import { Text, Input, KeyboardAwareScrollView, Button, ProgressiveBar } from '../../../components/primary';
import { colors } from '../../../constants';
import { View, Text as BaseText, SafeAreaView } from 'react-native';
import { styles } from './style';
import { globalStyles } from '../../../assets/globalStyles';
import { usePlatform } from '../../../hooks';

export const Login = () => {
    const { isIOS } = usePlatform();
  return (
    <SafeAreaView style={[globalStyles.wrapper, styles.wrapper]}>
      <View style={[styles.body, globalStyles.body]}>
        <KeyboardAwareScrollView
          style={styles.form}
          enableOnAndroid
          enableAutomaticScroll={isIOS}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="interactive">
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
                color={colors.primaryColorLight}
              />{' '}
              <Text text="Sign up" textAlign="center" color={colors.secondaryBg} />
              <ProgressiveBar progress={50} />
            </BaseText>
          </View>
          <View style={styles.btnWrapper}>
                      {/* <Button
                        title="Continue"
                        //onPress={() => handleSubmit()}
                        //isLoading={isLoading}
                        //disabled={isLoading}
                        //loaderColor={colors.white}
                      /> */}
                     
                    </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Login;