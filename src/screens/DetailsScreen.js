import React, {Component} from 'react';
import {Text, SafeAreaView, View, Image, StyleSheet, ScrollView} from 'react-native';
import {HeaderComponent} from '../components';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class DetailsScreen extends Component {
  render() {
    const {item} = this.props.route.params;

    return (
      <SafeAreaView style={{backgroundColor: '#060304', flex: 1}}>
        <ScrollView>
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
              style={{width: '100%', height: 300, borderRadius: 16}}
              resizeMode="cover"
            />
            <Text style={styles.nameMovie}>{item.title || item.name}</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto-Regular',
                  fontSize: 15,
                  marginRight: 5,
                  color: '#FF6200',
                }}>
                {item.vote_average}/10
              </Text>
              <FontAwesome5 name="star" size={10} color="#FF6200" />
            </View>
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
                color: '#707070',
                marginVertical: 10,
              }}>
              {item.release_date}
            </Text>
            <Text style={styles.contentMovie}>{item.overview}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  nameMovie: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: '#FFF',
    marginTop: 15,
  },
  contentMovie: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#FFF',
  },
});
