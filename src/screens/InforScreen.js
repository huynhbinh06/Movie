import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from 'react-native';

export default class InforScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <View style={styles.container}>
          <Image
            source={require('../assets/images/avatar.jpg')}
            style={{width: 120, height: 120, borderRadius: 120 / 2}}
          />
          <Text style={styles.nameUser}>Huỳnh Bình</Text>
          <Text style={styles.addressUser}>huynhxuanbinh2000@gmail.com</Text>
          <TouchableOpacity
            style={{
              width: 192,
              height: 39,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#5A7B8D',
              borderRadius: 23,
              marginTop:31,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontFamily: 'Roboto-Regular',
              }}>
              Đăng xuất
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
    color: '#001F45',
    textAlign: 'center',
  },
  addressUser: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: '#001F45',
    textAlign: 'center',
  },
});
