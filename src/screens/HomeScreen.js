import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  Button,
  FlatList,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import {HeaderComponent} from '../components';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class HomeScreen extends Component {

  state = {
    upcoming: null,
    trending: null,
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData = async() =>{
    let response = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=0f5b3db603ad8df463592b0204632c4e',
    );
    let response2 = await fetch(
      'https://api.themoviedb.org/3/trending/all/day?api_key=0f5b3db603ad8df463592b0204632c4e',
    );
    let responseJSON = await response.json();
    let responseJSON2 = await response2.json();

    // đổ dữ liệu trả về
    this.setState({upcoming: responseJSON, trending: responseJSON2})

    // console.log(responseJSON);
  }

  render() {

    //console.log(this.state.data);
    if (!this.state.upcoming && !this.state.trending) {
      return (
        <ActivityIndicator
          size="large"
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        />
      );
    }

    return (
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <HeaderComponent title="Home" />
        <View style={{height: 270}}>
          <FlatList
            horizontal
            style={{marginLeft: 21}}
            data={this.state.upcoming.results}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('MainDetails', {item})
                  }
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
            data={this.state.trending.results}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={{marginBottom: 10}}
                  onPress={() =>
                    this.props.navigation.navigate('MainDetails', {item})
                  }>
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
