import { StyleSheet } from 'react-native';
import { colors, layout} from '../../../constants';
import { globalStyles } from '../../../assets/globalStyles';

const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: colors.white,
    },
    header: {
        flex: 0.4,
        justifyContent: 'center',
        flexDirection: "row",
        marginBottom: layout.pixelSizeVertical(0),
        marginTop: layout.pixelSizeVertical(25),
        gap: layout.pixelSizeHorizontal(10),
        paddingHorizontal: globalStyles.container.paddingHorizontal,
      },
      progressBarContainer: {
        flex: 1,
        alignItems: "center",
      },
      textContainer: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 15,
      },
      container: {
        width: "91%", 
        alignSelf: "center",
        borderRadius: 16,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: colors.deepGray,
        marginTop: 35,
      },
      option: {
        paddingVertical: 15,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor:colors.gray300,
      },
      bottomOption: {
        borderTopWidth: 0,
      },
      selected: {
        backgroundColor: colors.green200,
      },

      selectedText: {
        fontWeight: "bold",
      },
      buttonContainer: {
        marginTop: 300,
        alignItems: "center",
      },
});

export default styles;