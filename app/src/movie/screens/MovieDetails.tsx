import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {getPosterUri} from '../util';

function MovieDetails({route}) {
  const {
    title,
    vote_average,
    release_date,
    poster_path,
    overview,
    id,
  } = route.params;

  const [saved, setSaved] = React.useState(false);

  function handleSave() {
    AsyncStorage.setItem(`${id}`, JSON.stringify(route.params));
    setSaved(true);
  }

  function handleShare() {}

  React.useEffect(() => {
    AsyncStorage.getItem(`${id}`)
      .then(item => {
        item && setSaved(true);
      })
      .catch(() => {});
  }, [id]);

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.poster} source={{uri: getPosterUri(poster_path)}} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.rating}>{vote_average} / 10</Text>
      <Text style={styles.rating}>{release_date}</Text>
      <View style={styles.buttonsContainer}>
        <Button title="Save" onPress={handleSave} disabled={saved} />
        <Button title="Share" onPress={handleShare} />
      </View>
      <Text style={styles.overview}>{overview}</Text>
    </ScrollView>
  );
}

function Button({title, disabled, onPress}) {
  const style = disabled
    ? [styles.buttonContainer, styles.buttonDisabledContainer]
    : styles.buttonContainer;

  return (
    <TouchableOpacity
      disabled={disabled}
      style={style}
      onPress={disabled ? onPress : undefined}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  title: {
    color: '#388e3c',
    fontSize: 27,
    padding: 8,
  },
  rating: {
    fontSize: 20,
    padding: 8,
  },
  poster: {
    height: 300,
  },
  overview: {
    fontSize: 20,
    padding: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: '#388e3c',
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 8,
    borderRadius: 4,
  },
  buttonDisabledContainer: {
    opacity: 0.4,
  },
  buttonText: {fontSize: 22, color: '#fff'},
});

export default MovieDetails;
