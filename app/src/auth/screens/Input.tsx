import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

interface InputProps {
  label: string;
  value: string;
  secureTextEntry?: boolean;
  onchange: (text: string) => void;
}

const Input: React.FC<InputProps> = ({label, value, onchange, ...props}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        {...props}
        onChangeText={onchange}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
  },
});

export default Input;
