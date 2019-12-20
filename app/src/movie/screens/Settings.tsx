import {TouchableOpacity, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {useIsFocused} from '@react-navigation/core';
import {ThemeContext} from '../../theme/context';
import api from '../../auth/api';
import {useSelector} from 'react-redux';
import {logout} from '../../auth/redux/actions';

const Settings: React.FC<any> = ({logout}) => {
  const {theme, toggleTheme}: any = React.useContext(ThemeContext);
  const token = useSelector((state: any) => state.auth.token);
  const focused = useIsFocused();
  React.useEffect(() => {
    if (focused) {
      api.verify({token});
    }
  }, [token, focused]);

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.bg.primary}]}>
      <TouchableOpacity style={styles.buttonContainer} onPress={toggleTheme}>
        <Text style={{color: theme.text.primary}}>Toggle Theme</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} onPress={logout}>
        <Text style={{color: theme.text.primary}}>Log out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  buttonContainer: {
    padding: 16,
  },
});

//eslint-disable-next-line
export default connect(null, {logout})(Settings);
