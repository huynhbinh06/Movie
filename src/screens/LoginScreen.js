import React, {Component} from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setStatus} from '../redux/userAction';

export class LoginScreen extends Component {

  loginAccount = () => {
    this.props.setStatus(true);
  }

  render() {
    return (
      <SafeAreaView>
        <Text> LoginScreen </Text>
        <Button title="Login" onPress={() => this.loginAccount()} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogged: state,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({setStatus}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
