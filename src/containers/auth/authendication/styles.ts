import {StyleSheet, Dimensions} from 'react-native';
import {colorstyle} from '../../../constants';

const styles = StyleSheet.create({
  logoStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    height: 150,
    width: 150,
    marginTop: '10%',
  },
  btnStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 10,
    borderRadius: 6,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: '10%',
    marginLeft: '10%',
    marginRight: '10%',
  },
  googleBtn: {
    borderColor: colorstyle.blue,
    backgroundColor: colorstyle.blue,
  },
  appleBtn: {
    borderColor: colorstyle.black,
    backgroundColor: colorstyle.black,
  },
  btnTextColor: {
    color: colorstyle.white,
  },
  bottomTextStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: '10%',
  },

  modalView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    marginTop: '25%',
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 5,    
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default styles;
