import React from 'react';
import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {getPosterUri} from '../util';
import {routes as movie} from '../const';

function MovieItem({item}) {
  const {navigate} = useNavigation();
  const {overview, poster_path} = item;

  function navigateToDetails() {
    navigate(movie.details, item);
  }

  return (
    <TouchableOpacity style={styles.container} onPress={navigateToDetails}>
      <Image
        resizeMode="cover"
        source={{uri: getPosterUri(poster_path)}}
        style={styles.image}
        fadeDuration={100}
      />
      <Text style={styles.text}>{overview.slice(0, 150)}...</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    overflow: 'hidden',
    borderRadius: 7,
    backgroundColor: '#fff',
  },
  image: {
    height: 200,
  },
  text: {
    padding: 15,
  },
});

export default MovieItem;
