import { StyleSheet } from 'react-native';
import { colors, layout } from '../../../constants';
import { globalStyles } from '../../../assets/globalStyles';

 const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: layout.pixelSizeVertical(15),
    paddingHorizontal: globalStyles.container.paddingHorizontal,
  },
  footerText: {
    alignItems: "center", 
    gap:10,
    paddingTop: layout.pixelSizeVertical(86),
  },
  body: {
    flex: 0.6,
  },
  form: {
    marginTop: layout.pixelSizeVertical(20),
    flexGrow: 1,
  },
  btnWrapper: {
    alignItems: "center",  
    paddingTop: layout.pixelSizeVertical(10),
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default styles;