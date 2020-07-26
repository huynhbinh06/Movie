import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import auth from '@react-native-firebase/auth';

export default class InforScreen extends Component {
  state = {
    userInfor: null,
  };

  componentDidMount() {
    this.getUserInfor();
  }

  getUserInfor = () => {
    let userInfor = auth().currentUser;
    this.setState({userInfor});
  };

  logOutUser = async () => {
    await auth().signOut();
  };

  render() {
    const {userInfor} = this.state;

    return (
      <SafeAreaView style={{backgroundColor: '#060304', flex: 1}}>
        <View style={styles.container}>
          <Image
            source={require('../assets/images/avatar.jpg')}
            style={{width: 120, height: 120, borderRadius: 120 / 2}}
          />
          <Text style={styles.nameUser}>Huỳnh Bình</Text>
          <Text style={styles.addressUser}>{userInfor && userInfor.email}</Text>
          <TouchableOpacity
            onPress={this.logOutUser}
            style={{
              width: 192,
              height: 39,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#FFF',
              borderRadius: 23,
              marginTop: 31,
            }}>
            <Text
              style={{
                color: '#060304',
                fontSize: 16,
                fontFamily: 'Roboto-Regular',
              }}>
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameUser: {
    marginTop: 15,
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: '#FFF',
    textAlign: 'center',
  },
  addressUser: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: '#FFF',
    textAlign: 'center',
  },
});
