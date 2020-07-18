import React, { Component } from 'react'
import { Text, SafeAreaView,Button } from 'react-native'

export default class InforScreen extends Component {
    render() {
        return (
          <SafeAreaView>
            <Text> InforScreen </Text>
            <Button
              title="Go to change information"
              onPress={() => this.props.navigation.navigate('ChangeProfile')}
            />
          </SafeAreaView>
        );
    }
}
