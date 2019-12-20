import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect, useSelector} from 'react-redux';

import {login} from '../redux/actions';

import Input from './Input';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/core';
import {authRoutes} from '../../main/navigator';

const Login: React.FC<any> = ({login}) => {
  const [username, setUsername] = React.useState('Test');
  const [password, setPassword] = React.useState('Test123');
  const token = useSelector((state: any) => state.auth.token);
  const {replace} = useNavigation();

  function handleLogin() {
    login({username, password});
  }

  useEffect(() => {
    if (token) {
      replace(authRoutes.App, {});
    }
  }, [replace, token]);

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <SafeAreaView>
        <Input label="Username" value={username} onchange={setUsername} />
        <Input
          label="Password"
          value={password}
          onchange={setPassword}
          secureTextEntry
        />
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  button: {
    paddingVertical: 16,
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

// eslint-disable-next-line
export default connect(null, {login})(Login);
