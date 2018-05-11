import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  Platform,
} from 'react-native';
import { movies } from './data';
import MoviePoster from './MoviePoster';
import MoviePopup from './MoviePopup';
import SearchInput, { createFilter } from 'react-native-search-filter';
import {Header,Icon,Input, Item,Button,Text} from 'native-base';
import {TouchableHighlight} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import axios from 'axios';

const KEYS_TO_FILTERS = ['title', 'genre', 'ISBN'];

export default class Movies extends Component {
  state = {
    popupIsOpen: false,
    searchTerm: '',
    popularBooks: [],
    isLoading: true
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.fetchData();
  }

  fetchData = async () => {
    axios.get("http://localhost:8080/popular/:").then((res) => {   
      const books = res.results; 
      this.setState({
        popularBooks: books
      });
    });
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
  
  openMovie = (movie) => {
    this.setState({
      popupIsOpen: true,
      movie,	
    });
  }

  closeMovie = () => {
    this.setState({
      popupIsOpen: false,
    });
  }
  render() {
    const filteredMovies = movies.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <View>
      { this.state.popularBooks.map(book => <li>{book.title}</li>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,         // start below status bar
    justifyContent: 'flex-start',
    marginTop: Platform.OS === 'ios' ? 10 : 0,
  },
  scrollContent: {
    flexDirection: 'row',   // arrange posters in rows
    flexWrap: 'wrap',       // allow multiple rows
  },
  searchInput:{
    width: Dimensions.get('window').width
  }
});



// <ScrollView
//           contentContainerStyle={styles.scrollContent}
// 		  // Hide all scroll indicators
//           showsHorizontalScrollIndicator={false}
//           showsVerticalScrollIndicator={false}
//         >
//           {filteredMovies.map((movie, index) => <MoviePoster
//             movie={movie}
//             onOpen={this.openMovie}
//             key={index}
//           />)}
//         </ScrollView>