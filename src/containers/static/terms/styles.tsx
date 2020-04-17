import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modalView: {
    marginTop: '25%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin:50
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTitleTxt: {
    margin: 15,
    textAlign: 'center',
    fontSize:30,
    color: "blue"
  },
});

export default styles;
