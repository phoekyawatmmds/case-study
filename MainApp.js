import React, {Component} from 'react';
 
import { Image } from 'react-native';
 
import { createStackNavigator, createBottomTabNavigator, createAppContainer, } from 'react-navigation';
 
import HomeActivity from './Activity/HomeActivity';
import SearchActivity from './Activity/SearchActivity';
import Icon from 'react-native-vector-icons/Entypo';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
 
const HomeTab = createStackNavigator(
  {
    Home: HomeActivity ,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#fff',
      title: 'Home Tab',
     
    },
  }
);
 
const SettingsTab = createStackNavigator(
  {
    Search: SearchActivity ,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings Tab',
     
    },
  }
);
 
const MainApp = createBottomTabNavigator(
  {
    Home: HomeTab ,
    Settings: SettingsTab ,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return (
            <Icon name="home" style={{fontSize:25}} />
          );
        } else {
          return (
            <Icon name="search" style={{fontSize:25}} />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
    },
  }
);
 
 
export default createAppContainer(MainApp);