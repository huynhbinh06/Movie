import React, {Component} from 'react';
import {Text, SafeAreaView, View, Image, StyleSheet} from 'react-native';
import {HeaderComponent} from '../components';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class DetailsScreen extends Component {
  render() {
    const {item} = this.props.route.params;

    return (
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <HeaderComponent
          backBtn
          title="Details"
          goBack={() => this.props.navigation.goBack()}
        />
        <View style={{paddingHorizontal: 21}}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w220_and_h330_face/${item.poster_path}`,
            }}
            style={{width: '100%', height: 220, borderRadius: 16}}
            resizeMode="cover"
          />
          <Text style={styles.nameMovie}>{item.title || item.name}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 15}}>
              {item.vote_average}/10
            </Text>
            <FontAwesome5 name="star" size={10} color="red" />
          </View>
          <Text style={styles.contentMovie}>{item.overview}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  nameMovie: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: '#001F45',
    marginTop: 15,
  },
  contentMovie: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#5A7B8D',
  },
});
