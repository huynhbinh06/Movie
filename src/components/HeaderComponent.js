import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class HeaderComponent extends Component {
  render() {
    const {title, backBtn} = this.props;

    return (
      <View
        style={[
          {
            paddingVertical: 12,
            paddingHorizontal: 21,
            justifyContent: 'center',
          },
          backBtn && {
            alignItems: 'center',
          },
        ]}>
        {backBtn && (
          <TouchableOpacity
            style={{position: 'absolute', left: 21, top: 16}}
            onPress={() => this.props.goBack()}>
            <FontAwesome5 name="chevron-left" size={23} color="#001F45" />
          </TouchableOpacity>
        )}
        <Text
          style={{
            fontSize: 28,
            fontFamily: 'Roboto-Bold',
            color: '#001F45',
          }}>
          {title}
        </Text>
      </View>
    );
  }
}
