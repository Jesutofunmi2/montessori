import { colors, layout} from '../../../constants';
import { globalStyles } from '../../../assets/globalStyles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    topicItem: {
        padding: 13,
        backgroundColor: "#F8F8F8",
        borderRadius: 12,
        borderColor: "#CAD4E0",
        borderWidth: 1,
        marginTop: 10,
      },
      topicText: {
        fontSize: 14,
        flexShrink: 1,
        fontFamily: "Fredoka_500Medium",
      },
      disabled: {
        opacity: 0.5,
      },
      disabledText: {
        color: "#999",
      },
      subItem:{
        padding: 7,
        backgroundColor: "#F8F8F8",
        borderRadius: 8,
        borderColor: "#CAD4E0",
        borderWidth: 1,
        marginTop: 10,
      }
  });
  
  export default styles;