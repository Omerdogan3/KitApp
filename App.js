import React, { Component } from 'react';
import {
  NavigatorIOS, View, Text, StyleSheet, Button, Image, Dimensions
} from 'react-native';
import {
  TabNavigator,
  DrawerNavigator,
} from 'react-navigation';
import Sepet from './src/Sepet';


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



const { width, height } = Dimensions.get('window');
const cols = 2, rows = 2;





// class MyHomeScreen extends React.Component {
//   static navigationOptions = {
//     drawerLabel: 'Home',
//     drawerIcon: ({ tintColor }) => (
//       <Image
//         // source={require('./chats-icon.png')}
//         style={[styles.icon, {tintColor: tintColor}]}
//       />
//     ),
//   };

//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     );
//   }
// }

// class MyNotificationsScreen extends React.Component {
//   static navigationOptions = {
//     drawerLabel: 'Notifications',
//     drawerIcon: ({ tintColor }) => (
//       <Image
//         // source={require('./notif-icon.png')}
//         style={[styles.icon, {tintColor: tintColor}]}
//       />
//     ),
//   };

//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.goBack()}
//         title="Go back home"
//       />
//     );
//   }
// }


export default App = DrawerNavigator({
  Anasayfa: {
    screen: HomeScreen, // eski haline getirmeyi unutma
  },
  Sepet: {
    screen: Sepet
  }
});
