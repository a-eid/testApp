import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

function SearchInput({value, onChangeText, onPress}) {
  return (
    <View style={styles.searchInputContainer}>
      <TextInput
        style={styles.searchInput}
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchInputContainer: {
    flexDirection: 'row',
    margin: 15,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
  },
  buttonContainer: {
    paddingHorizontal: 15,
    backgroundColor: '#388e3c',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    borderRadius: 5,
  },
});

export default SearchInput;
