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

export class LoginScreen extends Component {
  loginAccount = () => {
    this.props.setStatus(true);
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              paddingHorizontal:21,
            }}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../assets/images/j2team.png')}
                style={{width: 100, height: 100}}
                resizeMode="contain"
              />
              <Text style={[styles.textStyle, {fontSize: 26}]}>
                The Movie
              </Text>
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
              style={{flex:1,alignItems: 'center'}}
              onPress={() => this.loginAccount()}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#001F45', '#45003D']}
                  style={{
                    borderRadius: 27,
                    paddingVertical: 10,
                    paddingHorizontal: 30,
                    width:210,
                    height:46
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Regular',
                      color: 'white',
                      fontSize: 17,
                      textAlign:'center'
                    }}>
                    Login
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

const mapStateToProps = (state) => ({
  isLogged: state,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({setStatus}, dispatch);

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Roboto-Bold',
    color: '#001F45',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
