import React from 'react';
import {View, Image, StyleSheet} from 'react-native';



class CommonLoader extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imgStyle}
          source={require('../images/loading-hand.gif')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  imgStyle: {flex: 1, resizeMode: 'cover'},
});
export default CommonLoader;
