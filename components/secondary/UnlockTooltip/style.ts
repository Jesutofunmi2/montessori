import { colors, layout} from '../../../constants';
import { globalStyles } from '../../../assets/globalStyles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    tooltipContainer: {
      position: "absolute",
      bottom: 30,
      width: 244,
      backgroundColor: colors.white,
      padding: 12,
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 5,
      alignSelf: "center",
    },
    message: {
      fontSize: 14,
      color: "#000",
      marginBottom: 10,
    },
    highlight: {
      fontWeight: "600",
    },
    button: {
      backgroundColor: "#2D9C5F",
      paddingVertical: 8,
      borderRadius: 4,
      alignItems: "center",
    },
    buttonText: {
      color: "white",
      fontWeight: "500",
    },
    arrowDown: {
      position: "absolute",
      bottom: -10,
      left: "50%",
      marginLeft: 90,
      width: 0,
      height: 0,
      borderLeftWidth: 10,
      borderRightWidth: 10,
      borderTopWidth: 10,
      borderLeftColor: "transparent",
      borderRightColor: "transparent",
      borderTopColor: "white",
    },
  });
  
  export default styles;