import React, { Component } from 'react';
import {
  NavigatorIOS, View, Text
} from 'react-native';
import {
  TabNavigator
} from 'react-navigation';

import Movies from './src/Movies';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Movies/>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

export default App = TabNavigator ({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen }
});



