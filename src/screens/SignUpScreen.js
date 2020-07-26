import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export default class SignUpScreen extends Component {
  state = {
    email: '',
    username: '',
    password: '',
  };

  signUpAccount = async (e, p) => {
    try {
      let user = await auth().createUserWithEmailAndPassword(e, p);
      // console.log(user);
      const {email, username, password} = this.state;

      const ref = database().ref(`/user/`);
      ref.push({
        email,
        username,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // addAccountToDB = () => {
  // const {email, username, password} = this.state;
  //   const ref = database().ref(`/user/`);
  //   ref.push({
  //     email,
  //     username,
  //     password,
  //   });
  // };

  render() {
    const {email, username, password} = this.state;

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
              <View style={{marginBottom: 21, marginTop: 5}}>
                <Text>Username</Text>
                <TextInput
                  placeholder="Enter your username"
                  keyboardType="email-address"
                  value={username}
                  onChangeText={(username) => this.setState({username})}
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
                onPress={() => this.signUpAccount(email, password)}>
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
                    Sign Up
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Roboto-Bold',
    color: '#001F45',
  },
});
