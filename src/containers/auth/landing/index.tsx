/* eslint-disable react/self-closing-comp */
import React from 'react';
import {Actions} from 'react-native-router-flux';
import {CommonLoader} from '../../../components';
import AsyncStorage from '@react-native-community/async-storage';

class LandingPage extends React.Component<{}> {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    //check auth token exsits or not
    AsyncStorage.getItem('token').then(
      (token) => {
        //if toke does not exsists screen navigate to authendication page
        if (!token) setTimeout(() => {Actions.auth();}, 500); 
        //else screen naviate to dashboard page
        else console.log(token);
      },
      (error) => {
        // if throws error check log in console
        console.log(error);
      },
    );
  }

  render() {
    return <CommonLoader />;
  }
}

export default LandingPage;
