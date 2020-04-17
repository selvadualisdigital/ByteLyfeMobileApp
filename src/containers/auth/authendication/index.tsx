/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {Component} from 'react';
import {
  Platform,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from '../authendication/styles';
import {Card} from 'native-base';
import {AppStyles} from '../../../themes';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Actions} from 'react-native-router-flux';
import {colorstyle} from '../../../constants';

//store implementation
import {
  signInUsingProvider,
  signOutUsingProvider,
} from '../../../store/actions/authActions';
import {AuthModel} from '../../../store/types/Auth';
import {AppActions} from '../../../store/types/actions';
import {AppState} from '../../../store/';
import {Dispatch, bindActionCreators} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {connect} from 'react-redux';

interface AuthPageState {
  signInSelected: boolean;
  signUpSelected: boolean;
}

interface AuthPageProbs {}

type Props = AuthPageProbs & LinkStateProps & LinkDispatchProps;

class AuthendicationPage extends Component<Props, AuthPageState> {
  constructor(props: Props) {
    super(props);
    this.state = {signInSelected: true, signUpSelected: false};
  }
  componentDidMount() {}
  _setSelected(type: string) {
    type == 'signIn'
      ? this.setState({signInSelected: true, signUpSelected: false})
      : this.setState({signInSelected: false, signUpSelected: true});
  }
  _signInBy(buttonType: any) {
    this.props.signInUsingProvider(buttonType);
    return buttonType;
  }
  _signUpBy(buttonType: any) {
    this.props.signInUsingProvider(buttonType);
    return buttonType;
  }
  _signOut() {
    this.props.signOutUsingProvider();
  }
  render() {
    console.log(this.props.auth);
    return (
      <View style={AppStyles.container}>
        <Image
          style={[styles.logoStyle]}
          source={require('../../../images/appLogo.jpg')}
        />
        <Text
          style={[
            AppStyles.h3,
            AppStyles.textCenterAligned,
            AppStyles.marginBottom10,
          ]}>
          Nice to meet you
        </Text>
        <Card style={[AppStyles.CardRadius, AppStyles.cardView]}>
          <View style={AppStyles.Row_space_between}>
            <TouchableOpacity
              onPress={() => this._setSelected('signIn')}
              style={[AppStyles.marginLeft25, AppStyles.marginTop10]}>
              <Text
                style={
                  this.state.signInSelected
                    ? {color: colorstyle.selectedText}
                    : {color: colorstyle.disabledText}
                }>
                Sign In
              </Text>
            </TouchableOpacity>
            <TouchableOpacity // onPress={() => this._setSelected('signUp')}
              onPress={() => this._signOut()}
              style={[AppStyles.marginRight25, AppStyles.marginTop10]}>
              <Text
                style={
                  this.state.signUpSelected
                    ? {color: colorstyle.selectedText}
                    : {color: colorstyle.disabledText}
                }>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            {Platform.OS === 'ios' ? (
              <TouchableOpacity
                onPress={() =>
                  this.state.signInSelected
                    ? this._signInBy('apple')
                    : this._signUpBy('apple')
                }
                style={[styles.btnStyle, styles.appleBtn]}>
                <Icon
                  name={Platform.OS === 'ios' ? 'apple' : 'apple'}
                  color="white"
                  size={25}
                />
                <Text style={styles.btnTextColor}>
                  {this.state.signInSelected
                    ? 'apple Sign in'
                    : 'apple Sign Up'}
                </Text>
              </TouchableOpacity>
            ) : null}
            <TouchableOpacity
              onPress={() =>
                this.state.signInSelected
                  ? this._signInBy('google')
                  : this._signUpBy('google')
              }
              style={[styles.btnStyle, styles.googleBtn]}>
              <Icon
                name={Platform.OS === 'ios' ? 'google' : 'google'}
                color="white"
                size={25}
              />
              <Text style={styles.btnTextColor}>
                {this.state.signInSelected
                  ? 'Google Sign in'
                  : 'Google Sign Up'}
              </Text>
            </TouchableOpacity>
          </View>
          {this.state.signInSelected ? (
            <View style={[styles.bottomTextStyle]}>
              <Text>Forgot Password ?</Text>
            </View>
          ) : (
            <View style={[styles.bottomTextStyle]}>
              <Text>By signing up you agree to our</Text>
              <TouchableOpacity
                onPress={() => {
                  Actions.terms();
                }}>
                <Text style={AppStyles.link}>Terms & conditions</Text>
              </TouchableOpacity>
            </View>
          )}
        </Card>
      </View>
    );
  }
}

interface LinkStateProps {
  auth: AuthModel[];
}

interface LinkDispatchProps {
  signInUsingProvider: (auth: AuthModel) => void;
  signOutUsingProvider: () => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: AuthPageProbs,
): LinkStateProps => ({auth: state.auth});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: AuthPageProbs,
): LinkDispatchProps => ({
  signInUsingProvider: bindActionCreators(signInUsingProvider, dispatch),
  signOutUsingProvider: bindActionCreators(signOutUsingProvider, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthendicationPage);
