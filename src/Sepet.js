import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button
} from 'react-native';
import {
  RkText,
  RkCard,
  RkButton,
  RkStyleSheet,
  RkTheme
} from 'react-native-ui-kitten';
import {kitapYurdu} from './sepetData';
import SepetUrun from './SepetUrun';



export default class SepetScreen extends React.Component {
  state = {
    popupIsOpen: false
  }

  openMovie = (movie) => {
    this.setState({
      popupIsOpen: true,
      movie,	
    });
  }

    render() {
        return (
        <View style={styles.sepetContainer}>
            <View style= {styles.col}>
                <View style={styles.kitapYurduStyle}>
                  {kitapYurdu.map((movie, index) => <SepetUrun
                    movie={movie}
                    onOpen={this.openMovie}
                    key={index}
                  />)}
                </View>

                <View style={styles.idefixStyle}>
                  <Text>Idefix</Text>
                </View>
            </View>

            <View style= {styles.col}>
                <View style={styles.drStyle}>
                  <Text>D&R</Text>
                </View>
                <View style={styles.pandoraStyle}>
                  <Text>Pandora</Text>
                </View>
            </View>
            <View style= {styles.copKutusu}>
            </View>
        </View>

        );
    }
}

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
    sepetContainer: {
      padding: 10,
      flex:1,
    },
    col: {
      flexDirection: 'row',
      flex: 3
    },
    copKutusu:{
      flex:1,
      backgroundColor: 'red',
      borderRadius:10
    },
    kitapYurduStyle:{
      borderRadius: 10,
      backgroundColor: 'powderblue',
      flex:1
    },
    idefixStyle:{
      borderRadius: 10,
      backgroundColor: 'skyblue',
      flex:1
    },
    drStyle:{
      borderRadius: 10,
      backgroundColor: 'skyblue',
      flex:1
    },
    pandoraStyle:{
      borderRadius: 10,
      backgroundColor: 'powderblue',
      flex:1
    },
  });