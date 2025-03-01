import { StyleSheet } from 'react-native';
import { colors, layout } from '../../../constants';
import { globalStyles } from '../../../assets/globalStyles';

 const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.purple500,
  },
  container: {
    backgroundColor: colors.green500,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    alignItems: 'center',
    marginTop: layout.pixelSizeVertical(40),
  },
  header: {
    flex: 0.4,
    justifyContent: 'flex-end',
    marginBottom: layout.pixelSizeVertical(20),
    fontSize: 24,
  },
  headerContent: {
    paddingHorizontal: globalStyles.container.paddingHorizontal,
  },
  footerText: {
    textAlign: 'center',
    paddingTop: layout.pixelSizeVertical(16),
  },
  body: {
    flex: 0.6,
  },
  form: {
    marginTop: layout.pixelSizeVertical(24),
    flexGrow: 1,
  },
  btnWrapper: {
    width: 350,
  },
});

export default styles;