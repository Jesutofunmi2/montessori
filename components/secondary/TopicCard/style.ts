import { colors, layout} from '../../../constants';
import { globalStyles } from '../../../assets/globalStyles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    topicItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: colors.white,
        borderRadius: 12,
        marginBottom: 10,
        borderColor: colors.gray300,
        borderWidth: 2,
        marginTop: 10,
      },
      topicText: {
        fontSize: 18,
        fontFamily: "Fredoka_500Medium",
      },
      disabled: {
        opacity: 0.5,
      },
      disabledText: {
        color: "#999",
      },
  });
  
  export default styles;