import { colors, layout} from '../../../constants';
import { globalStyles } from '../../../assets/globalStyles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    topicItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 8,
        backgroundColor: colors.white,
        borderRadius: 12,
        marginBottom: 8,
        borderColor: colors.gray300,
        borderWidth: 1,
        marginTop: 10,
      },
      topicText: {
        fontSize: 16,
        flexShrink: 1,
        fontFamily: "Fredoka_400Regular",
      },
      disabled: {
        opacity: 0.5,
      },
      disabledText: {
        color: "#999",
      },
  });
  
  export default styles;