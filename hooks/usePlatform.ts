import { Platform } from 'react-native';

export const usePlatform = (): {
  isAndroid: boolean;
  isIOS: boolean;
} => {
  return {
    isAndroid: Platform.OS === 'android',
    isIOS: Platform.OS === 'ios',
  };
};