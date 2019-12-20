import React from 'react';
import {FlatList, Text, SafeAreaView, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {MovieItem} from '../components';

function FavMovies() {
  const [movies, setMovies] = React.useState([]);
  // const [pagination, setPagination] = React.useState(0);

  React.useEffect(() => {
    async function getItems() {
      const keys = await AsyncStorage.getAllKeys();
      const items = [];
      for (const key of keys) {
        const item = JSON.parse(await AsyncStorage.getItem(key));
        items.push(item);
      }
      setMovies(items);
    }

    getItems();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Favorite Movies</Text>
      <FlatList
        contentContainerStyle={styles.list}
        data={movies}
        renderItem={({item}) => <MovieItem item={item} />}
        keyExtractor={(_, index) => `${index}`}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#eee'},
  title: {fontSize: 22, textAlign: 'center'},
  list: {flex: 1},
});
export default FavMovies;
