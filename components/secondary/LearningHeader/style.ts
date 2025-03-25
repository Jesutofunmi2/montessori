import { colors, layout} from '../../../constants';
import { globalStyles } from '../../../assets/globalStyles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    topicItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        gap: 10,
        backgroundColor: colors.white,
        borderRadius: 12,
        marginBottom: 10,
        borderColor: "#F0F4F8",
        borderWidth: 2,
        marginTop: 20,
      },
      topicText: {
        fontSize: 20,
        flexShrink: 1,
        fontFamily: "Fredoka_500Medium",
        textAlign: "center"
      },
  });
  
  export default styles;