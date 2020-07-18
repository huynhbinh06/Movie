import React, {Component} from 'react';
import {Text, SafeAreaView, Button} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text> HomeScreen </Text>
        <Button
          title="Go to main details"
          onPress={() => this.props.navigation.navigate('MainDetails')}
        />
      </SafeAreaView>
    );
  }
}
