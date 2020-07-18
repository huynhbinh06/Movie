import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import InforScreen from './screens/InforScreen';
import DetailsScreen from './screens/DetailsScreen';
import SignUpScreen from './screens/SignUpScreen';
import SplashScreen from './screens/SplashScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ChangeInfor from './screens/ChangeInfor';
import {connect} from 'react-redux';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

class InforStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={InforScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="ChangeProfile" component={ChangeInfor} />
      </Stack.Navigator>
    );
  }
}

class HomeStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="MainDetails" component={DetailsScreen} />
      </Stack.Navigator>
    );
  }
}

class BottomNavigation extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Infor') {
              iconName = 'user';
            }

            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#0AB134',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Infor" component={InforStack} />
      </Tab.Navigator>
    );
  }
}

export class MainNavigation extends Component {

  render() {
    return (
      <NavigationContainer>
        {this.props.isLogged ? (
          <BottomNavigation />
        ) : (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogged: state,
});

export default connect(mapStateToProps)(MainNavigation);

