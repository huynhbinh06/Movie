import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  Button,
  FlatList,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {HeaderComponent} from '../components';
import moviesData from '../assets/data.json';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <HeaderComponent />

        <View style={{height: 270}}>
          <FlatList
            horizontal
            style={{marginLeft: 21}}
            data={moviesData.results}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('MainDetails')}
                  style={{flex: 1, marginRight: 18}}>
                  <View style={{flex: 1}}>
                    <Image
                      source={{
                        uri: `https://image.tmdb.org/t/p/w220_and_h330_face/${item.poster_path}`,
                      }}
                      style={{width: 150, height: 220, borderRadius: 16}}
                      resizeMode="cover"
                    />
                    <Text
                    numberOfLines={1}
                      style={{
                        fontSize: 12,
                        fontFamily: 'Roboto-Bold',
                        maxWidth: 150,
                        marginTop: 10,
                      }}>
                      {item.title || item.name}
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{fontFamily: 'Roboto-Regular', fontSize: 12}}>
                        {item.vote_average}/10
                      </Text>
                      <FontAwesome5 name="star" size={10} color="red" />
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={{flex: 1, marginHorizontal: 21}}>
          <Text
            style={{
              marginVertical: 15,
              fontFamily: 'Roboto-Bold',
              fontSize: 26,
              color: '#001F45',
            }}>
            Trending
          </Text>
          <FlatList
            data={moviesData.results}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={{marginBottom: 10}}
                  onPress={() => this.props.navigation.navigate('MainDetails')}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={{
                        uri: `https://image.tmdb.org/t/p/w220_and_h330_face/${item.poster_path}`,
                      }}
                      style={{
                        width: 74,
                        height: 90,
                        borderRadius: 8,
                        marginRight: 10,
                      }}
                      resizeMode="cover"
                    />
                    <View style={{flex: 1, flexDirection: 'column'}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: 'Roboto-Bold',
                        }}>
                        {item.title || item.name}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          fontFamily: 'Roboto-Bold',
                          marginVertical: 8,
                        }}>
                        Release: {item.release_date || item.first_air_date}
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: 'Roboto-Light',
                        }}
                        numberOfLines={2}>
                        {item.overview.substring(0, 70)}...
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
