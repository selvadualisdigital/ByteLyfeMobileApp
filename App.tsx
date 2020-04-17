import React, {Component} from 'react';
import {Router} from 'react-native-router-flux';
import AppRoutes from './src/navigations';
import {YellowBox} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from "react-redux";
import { store } from "./src/store";

YellowBox.ignoreWarnings(['Remote debugger']);
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
class ByteLyfe extends Component {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    console.disableYellowBox = true;
    return <Provider store={store}><Router scenes={AppRoutes}></Router></Provider>;
  }
}

export default ByteLyfe;
