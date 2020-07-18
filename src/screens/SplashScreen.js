import React, { Component } from 'react'
import { Text, SafeAreaView, Button } from 'react-native'

export default class SplashScreen extends Component {
    render() {
        return (
          <SafeAreaView>
            <Text> SplashScreen </Text>
            <Button
              title="Login"
              onPress={() => this.props.navigation.navigate('BottomNavigation')}
            />
          </SafeAreaView>
        );
    }
}
