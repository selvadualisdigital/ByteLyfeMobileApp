import Colors from './colors';
import Fonts from './fonts';
import Sizes from './sizes';

import {StyleSheet} from 'react-native';

const AppStyle = StyleSheet.create({
  appContainer: {backgroundColor: '#fff'},
  // Default
  container: {
    position: 'relative',
    flex: 1,
    flexDirection: 'column'
  },
  containerCentered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  windowSize: {
    height: Sizes.screen.height,
    width: Sizes.screen.width,
  },

  // Aligning items
  leftAligned: {
    alignItems: 'flex-start',
  },
  centerAligned: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightAligned: {
    alignItems: 'flex-end',
  },

  // Text Styles
  baseText: {
    fontFamily: Fonts.base.family,
    fontSize: Fonts.base.size,
    lineHeight: Fonts.base.lineHeight,
    color: Colors.textPrimary,
    fontWeight: '300',
  },
  p: {
    fontFamily: Fonts.base.family,
    fontSize: Fonts.base.size,
    lineHeight: Fonts.base.lineHeight,
    color: Colors.textPrimary,
    fontWeight: '300',
    marginBottom: 8,
  },
  h1: {
    fontFamily: Fonts.h1.family,
    fontSize: Fonts.h1.size,
    lineHeight: Fonts.h1.lineHeight,
    color: Colors.fontPrimary,
    fontWeight: '100',
    margin: 0,
    marginBottom: 4,
    left: 0,
    right: 0,
    top: 5,
  },
  h2: {
    fontFamily: Fonts.h2.family,
    fontSize: Fonts.h2.size,
    lineHeight: Fonts.h2.lineHeight,
    color: Colors.fontPrimary,
    fontWeight: '100',
    margin: 0,
    marginBottom: 4,
    left: 0,
    right: 0,
  },
  h3: {
    fontFamily: Fonts.h3.family,
    fontSize: Fonts.h3.size,
    lineHeight: Fonts.h3.lineHeight,
    color: Colors.fontPrimary,
    fontWeight: '100',
    margin: 0,
    marginBottom: 4,
    left: 0,
    right: 0,
  },
  h4: {
    fontFamily: Fonts.h4.family,
    fontSize: Fonts.h4.size,
    lineHeight: Fonts.h4.lineHeight,
    color: Colors.fontPrimary,
    fontWeight: '100',
    margin: 0,
    marginBottom: 4,
    left: 0,
    right: 0,
  },
  h5: {
    fontFamily: Fonts.h5.family,
    fontSize: Fonts.h5.size,
    lineHeight: Fonts.h5.lineHeight,
    color: Colors.fontPrimary,
    fontWeight: '100',
    margin: 0,
    marginTop: 4,
    marginBottom: 4,
    left: 0,
    right: 0,
  },
  strong: {
    fontWeight: '900',
  },
  link: {
    textDecorationLine: 'underline',
    color: Colors.primary,
  },
  subtext: {
    fontFamily: Fonts.base.family,
    fontSize: Fonts.base.size * 0.8,
    // lineHeight: parseInt(Fonts.base.lineHeight * 0.8, 10),
    color: Colors.textSecondary,
    fontWeight: '500',
  },

  // Helper Text Styles
  textCenterAligned: {
    textAlign: 'center',
  },
  textRightAligned: {
    textAlign: 'right',
  },

  // Give me padding
  padding: {
    paddingVertical: Sizes.padding,
    paddingHorizontal: Sizes.padding,
  },
  paddingHorizontal: {
    paddingHorizontal: Sizes.padding,
  },
  paddingLeft: {
    paddingLeft: Sizes.padding,
  },
  paddingRight: {
    paddingRight: Sizes.padding,
  },
  paddingVertical: {
    paddingVertical: Sizes.padding,
  },
  paddingTop: {
    paddingTop: Sizes.padding,
  },
  paddingBottom: {
    paddingBottom: Sizes.padding,
  },
  paddingSml: {
    paddingVertical: Sizes.paddingSml,
    paddingHorizontal: Sizes.paddingSml,
  },
  paddingHorizontalSml: {
    paddingHorizontal: Sizes.paddingSml,
  },
  paddingLeftSml: {
    paddingLeft: Sizes.paddingSml,
  },
  paddingRightSml: {
    paddingRight: Sizes.paddingSml,
  },
  paddingVerticalSml: {
    paddingVertical: Sizes.paddingSml,
  },
  paddingTopSml: {
    paddingTop: Sizes.paddingSml,
  },
  paddingBottomSml: {
    paddingBottom: Sizes.paddingSml,
  },

  // General HTML-like Elements
  hr: {
    left: 0,
    right: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    height: 1,
    backgroundColor: 'transparent',
    marginTop: Sizes.padding,
    marginBottom: Sizes.padding,
  },

  // Grid
  row: {
    left: 0,
    right: 0,
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  flex5: {
    flex: 5,
  },
  flex6: {
    flex: 6,
  },

  flex_coloumn: {
    flexDirection: 'column',
  },

  // Navbar
  navbar: {
    backgroundColor: Colors.primary,
    borderBottomWidth: 4,
  },
  navbarTitle: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: Fonts.base.family,
    fontSize: Fonts.base.size,
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  headerTitleStyle: {textAlign: 'center', alignSelf: 'center'},
  navbarButton: {
    tintColor: '#ffffff',
  },

  // TabBar
  tabbar: {
    backgroundColor: Colors.primary,
    borderTopColor: Colors.border,
    borderTopWidth: 1,
  },

  //margin left

  marginLeft1: {
    marginLeft: '1%',
  },
  marginLeft2: {
    marginLeft: '2%',
  },
  marginLeft3: {
    marginLeft: '3%',
  },
  marginLeft4: {
    marginLeft: '4%',
  },
  marginLeft5: {
    marginLeft: '5%',
  },

  marginLeft25:{
    marginLeft: '25%',
  },

  //margin right

  marginRight1: {
    marginRight: '1%',
  },
  marginRight2: {
    marginRight: '2%',
  },
  marginRight3: {
    marginRight: '3%',
  },
  marginRight4: {
    marginRight: '4%',
  },
  marginRight5: {
    marginRight: '5%',
  },

  marginRight25:{
    marginRight: '25%',
  },

  //margint top

  marginTop5: {
    marginTop: '5%',
  },
  marginTop10: {
    marginTop: '10%',
  },
  marginTop15: {
    marginTop: '15%',
  },
  marginTop20: {
    marginTop: '20%',
  },
  marginTop25: {
    marginTop: '50%',
  },
  marginBottom25: {
    marginBottom: '25%',
  },
  marginBottom10: {
    marginBottom: '10%',
  },
  //common card view
  cardView: {
    marginLeft: '10%',
    marginRight: '10%',
  },
  CardRadius: {
    borderRadius: 10,
  },
  Row_space_between: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Row_space_arround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default AppStyle;
