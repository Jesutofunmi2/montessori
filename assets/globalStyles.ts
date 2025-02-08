import { StyleSheet, Platform, Dimensions } from 'react-native';
import { colors, layout } from '../constants';

export const OPTION_HEIGHT = layout.heightPixel(230);

const isAndroid = Platform.OS === 'android';
const HORIZONTAL_PADDING = layout.pixelSizeHorizontal(16);
export const searchHeight = layout.heightPixel(50);
const width = Dimensions.get('screen').width;

export const globalStyles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: colors.primaryBg },
  container: {
    paddingHorizontal: HORIZONTAL_PADDING,
    flexGrow: 1,
  },
  containerWithoutFlex: {
    paddingHorizontal: HORIZONTAL_PADDING,
  },
  body: {
    backgroundColor: colors.white,
    borderTopRightRadius: layout.fontPixel(30),
    borderTopLeftRadius: layout.fontPixel(30),
    paddingVertical: layout.pixelSizeVertical(30),
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rowStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rowEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  error: {
    paddingTop: layout.pixelSizeVertical(5),
  },
  actionBtn: {
    borderRadius: 8,
    marginBottom: 4,
    borderWidth: 0.8,
    padding: 16,
    paddingVertical: 12,
    borderColor: colors.grey_100,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#999',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.22,
    elevation: 3,
    width: '48%',
  },
  footerBtn: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: layout.pixelSizeVertical(30),
    paddingHorizontal: HORIZONTAL_PADDING,
    zIndex: 1000,
  },
  footerFlexBtn: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 24,
  },
  footerBtnLoyalty: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: layout.pixelSizeVertical(100),
    paddingHorizontal: HORIZONTAL_PADDING,
    zIndex: 1000,
  },
  pipe: {
    height: layout.heightPixel(20),
    width: 1,
    backgroundColor: 'black',
    marginHorizontal: layout.pixelSizeHorizontal(5),
  },
  footerBtnMerchant: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: layout.pixelSizeVertical(170),
    paddingHorizontal: HORIZONTAL_PADDING,
    zIndex: 1000,
  },
  input: {
    fontSize: layout.fontPixel(16),
    fontWeight: '400',
  },
  dropdownExtra: {
    backgroundColor: colors.secondaryBgLight,
    borderWidth: 0,
  },
  footerBox: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  refresh: {
    transform: [
      {
        rotate: '90deg',
      },
    ],
  },
  providers: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    height: layout.heightPixel(70),
    marginBottom: layout.fontPixel(10),
  },
  providerImg: {
    width: layout.widthPixel(50),
    height: layout.widthPixel(50),
    marginRight: layout.pixelSizeHorizontal(20),
  },
  disableTabShadow: {
    shadowColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  actionBtnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 0.03 * width,
    marginTop: 8,
  },
  tabShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  scrollImages: {
    maxHeight: layout.heightPixel(150),
    marginLeft: layout.pixelSizeHorizontal(20),
  },
  timesIcon: {
    position: 'absolute',
    top: 0,
    right: layout.pixelSizeVertical(20),
    zIndex: 100,
  },
  active: {
    width: layout.fontPixel(18),
    height: layout.heightPixel(6),
    borderRadius: layout.fontPixel(4),
    backgroundColor: colors.secondaryBg,
    marginRight: 4,
  },
  inActive: {
    width: layout.fontPixel(6),
    height: layout.fontPixel(6),
    borderRadius: layout.fontPixel(6),
    backgroundColor: '#E2D6F0',
    marginRight: 4,
  },
  loadMoreLoaderContainer: {
    marginVertical: layout.pixelSizeVertical(20),
  },
  surveyBtn: {
    marginBottom: layout.pixelSizeVertical(15),
    borderWidth: 0.5,
    borderColor: colors.primaryColorLight,
    paddingHorizontal: layout.pixelSizeHorizontal(10),
    borderRadius: 3,
    height: layout.heightPixel(55),
    justifyContent: 'center',
  },
  surveyBtnActive: {
    backgroundColor: colors.secondaryBg,
  },
  optionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: layout.pixelSizeVertical(10),
  },
  option: {
    flexBasis: '46%',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: colors.primaryColorLight,
    height: OPTION_HEIGHT,
    marginBottom: layout.pixelSizeVertical(30),
  },
  optionActive: {
    backgroundColor: '#E8F2FF',
  },
  optionImgBox: {
    // marginVertical: layout.pixelSizeVertical(10),
  },
  optionImg: {
    // width: layout.widthPixel(100),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: '100%',
    height: OPTION_HEIGHT / 1.8,
    marginBottom: layout.pixelSizeVertical(20),
  },
  ticket: {
    width: layout.widthPixel(30),
    height: layout.widthPixel(30),
    borderRadius: layout.widthPixel(30) / 2,
    backgroundColor: 'white',
  },
  underline: {
    textDecorationLine: 'underline',
    paddingBottom: isAndroid ? 2 : 0,
  },
  titles: {
    marginTop: layout.pixelSizeVertical(20),
  },
  title: {
    paddingBottom: layout.pixelSizeVertical(8),
  },
  subTitle: {
    lineHeight: 25,
  },
  celebration: {
    width: '100%',
    height: '50%',
    position: 'absolute',
    top: layout.pixelSizeVertical(50),
    left: 0,
    right: 0,
    zIndex: 10,
  },
  codeBox: {
    flexBasis: '10%',
    alignItems: 'center',
  },
  code: {
    width: layout.widthPixel(15),
    height: layout.widthPixel(15),
    borderRadius: layout.widthPixel(15) / 2,
    backgroundColor: '#E5E1F6',
  },
  codeActive: {
    backgroundColor: colors.secondaryBg,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: colors.secondaryBgGreen,
    marginRight: layout.pixelSizeHorizontal(4),
  },
  logo: {
    flex: 1,
    width: layout.widthPixel(200),
    height: layout.heightPixel(200),
    position: 'absolute',
    top: layout.pixelSizeVertical(50),
    right: 0,
    zIndex: 100,
  },
  sellCancelBtn: {
    height: layout.widthPixel(35),
    width: layout.widthPixel(35),
    borderRadius: layout.widthPixel(35) / 2,
    marginLeft: HORIZONTAL_PADDING,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});