import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setStatus} from '../redux/userAction';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import database from '@react-native-firebase/database';

import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';

export class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
  };

  componentDidMount() {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId:
        '378543426457-hcid378kt7lv8i6uakvbhbq1sh2a4dqn.apps.googleusercontent.com',
    });
  }

  loginFacebook = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        throw new Error('User cancelled the login process');
      }

      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw 'Something went wrong obtaining access token';
      }

      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );
      await auth().signInWithCredential(facebookCredential);
    } catch (error) {
      console.log(error);
    }
  };

  loginGoogle = async () => {
    try {
      const {idToken} = await GoogleSignin.signIn();
      const credential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(credential);
    } catch (error) {
      console.log(error);
    }
  };

  loginAccount = async (e, p) => {
    try {
      if (!e || !p) {
        alert('Enter email or password, please!');
      } else if (!e && !p) {
        alert('Enter email and password, please!');
      }
      let user = await auth().signInWithEmailAndPassword(e, p);
      // console.log(user);

      // if(user.additionalUserInfo.isNewUser){
      //   this.addUserToDB(user.user.email);
      // }

      // const ref = database().ref(`/user/`);
      // let snapshot = await ref
      //   .orderByChild('email')
      //   .equalTo(user.user.email)
      //   .once('value');
      // // console.log(snapshot.val());
      // if (!snapshot.val()) {
      //   this.addUserToDB(user.user.email);
      // }
    } catch (error) {
      console.error(error.message);
    }

    // this.props.setStatus(true);
  };

  // addUserToDB = (email) => {
  //   const ref = database().ref(`/user/`);
  //   ref.push({
  //     name: 'Huynh Binh',
  //     email,
  //   });
  // };

  render() {
    const {email, password} = this.state;

    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              paddingHorizontal: 21,
            }}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../assets/images/j2team.png')}
                style={{width: 100, height: 100}}
                resizeMode="contain"
              />
              <Text style={[styles.textStyle, {fontSize: 26}]}>The Movie</Text>
            </View>
            <View style={{marginTop: 45}}>
              <Text
                style={[styles.textStyle, {fontSize: 26, textAlign: 'center'}]}>
                Login
              </Text>
              <View style={{marginBottom: 21, marginTop: 30}}>
                <Text>Email</Text>
                <TextInput
                  placeholder="Enter your email"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={(email) => this.setState({email})}
                  style={[
                    styles.textStyle,
                    {
                      borderBottomColor: 'gray',
                      borderBottomWidth: 2,
                      paddingHorizontal: 5,
                      paddingVertical: 10,
                      fontSize: 16,
                      fontFamily: 'Roboto-Regular',
                    },
                  ]}
                />
              </View>
              <View style={{marginBottom: 20, marginTop: 5}}>
                <Text>Password</Text>
                <TextInput
                  placeholder="Enter your Password"
                  value={password}
                  onChangeText={(password) => this.setState({password})}
                  secureTextEntry={true}
                  style={[
                    styles.textStyle,
                    {
                      borderBottomColor: 'gray',
                      borderBottomWidth: 2,
                      paddingHorizontal: 5,
                      paddingVertical: 10,
                      fontSize: 16,
                      fontFamily: 'Roboto-Regular',
                    },
                  ]}
                />
              </View>
              <TouchableOpacity
                style={{flex: 1, alignItems: 'center'}}
                onPress={() => this.loginAccount(email, password)}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#001F45', '#45003D']}
                  style={{
                    borderRadius: 27,
                    paddingVertical: 10,
                    paddingHorizontal: 30,
                    width: 210,
                    height: 46,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Regular',
                      color: 'white',
                      fontSize: 17,
                      textAlign: 'center',
                    }}>
                    Login
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={this.loginGoogle}
                  style={{
                    width: 200,
                    height: 40,
                    backgroundColor: 'red',
                    paddingHorizontal: 30,
                    marginVertical: 15,
                    paddingVertical: 10,
                    borderRadius: 27,
                  }}>
                  <Text
                    style={{color: '#FFF', fontSize: 15, textAlign: 'center',fontFamily:'Roboto-Medium'}}>
                    Sign In with Google
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.loginFacebook}
                  style={{
                    width: 200,
                    height: 40,
                    backgroundColor: 'blue',
                    paddingHorizontal: 30,
                    paddingVertical: 10,
                    borderRadius: 27,
                  }}>
                  <Text
                    style={{color: '#FFF', fontSize: 14, textAlign: 'center',fontFamily:'Roboto-Medium'}}>
                    Sign In with Facebook
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{alignItems: 'center', marginVertical: 10}}
                onPress={() => this.props.navigation.navigate('SignUp')}>
                <Text>Don't have an account?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

// const mapStateToProps = (state) => ({
//   isLogged: state,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({setStatus}, dispatch);

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Roboto-Bold',
    color: '#001F45',
  },
});

export default LoginScreen;
