import { colors, layout} from '../../../constants';
import { globalStyles } from '../../../assets/globalStyles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
      flex: 0.3,
      alignItems: "center",
      paddingHorizontal: layout.pixelSizeHorizontal(20),
      marginTop: layout.pixelSizeVertical(20),
    },
    contentWrapper: {
      flex: 0.6,
      justifyContent: "flex-end",
    },
    header: {
      flex: 0.4,
      justifyContent: "center",
      flexDirection: "row",
      marginBottom: layout.pixelSizeVertical(0),
      marginTop: layout.pixelSizeVertical(25),
      gap: layout.pixelSizeHorizontal(10),
      paddingHorizontal: globalStyles.container.paddingHorizontal,
    },
    question: {
      textAlign: "center",
      color: colors.slate500,
      fontFamily: "Fredoka_500Medium",
      fontSize: layout.fontPixel(30),
      marginBottom: layout.pixelSizeVertical(50),
    },
    container: {
      width: "100%",
      alignSelf: "center",
      borderRadius: 16,
      overflow: "hidden",
      borderWidth: 1.2,
      borderColor: colors.deepGray,
    },
    option: {
      paddingVertical: layout.pixelSizeVertical(25),
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: colors.deepGray,
    },
    selected: {
      backgroundColor: colors.green200,
      borderColor: colors.green500,
    },
    selectedText: {
      fontWeight: "bold",
    },
    buttonContainer: {
      alignItems: "center",
    },
    input: {
      width: "100%",
    },
  });
  
  export default styles;