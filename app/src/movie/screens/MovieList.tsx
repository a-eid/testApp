import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
// @ts-ignore
import {useKeyboard} from 'react-native-hooks';
import SafeAreaView from 'react-native-safe-area-view';

import {SearchInput, MovieItem} from '../components';
import {fetchMovies} from '../api';

function MovieListScreen() {
  const [term, setTerm] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const {Keyboard} = useKeyboard();

  async function search() {
    if (term.trim().length === 0) {
      return;
    }

    Keyboard.dismiss();
    setLoading(true);
    const {results} = await fetchMovies(term);
    setMovies(results);
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView
        style={styles.container}
        forceInset={{top: 'always', bottom: 'never'}}>
        <SearchInput value={term} onChangeText={setTerm} onPress={search} />
        {loading && <ActivityIndicator />}
        <KeyboardAwareFlatList
          data={movies}
          renderItem={({item}) => <MovieItem item={item} />}
          keyExtractor={(_, index) => `${index}`}
        />
      </SafeAreaView>
    </View>
  );
}

MovieListScreen.options = {
  title: 'Movies',
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#eee'},
});

export default MovieListScreen;
