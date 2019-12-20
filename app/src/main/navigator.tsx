import React from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {Provider as ThemeProvider} from '../theme/context';
import MovieNavigator from '../movie/navigator';
import Login from '../auth/screens/Login';
import store from './redux/store';

const Stack = createStackNavigator();

export const authRoutes = {
  auth: 'Auth',
  App: 'App',
};

const App: React.FC = () => {
  return (
    <NavigationNativeContainer>
      <Provider store={store}>
        <ThemeProvider>
          <Stack.Navigator
            mode="modal"
            initialRouteName="Login"
            headerMode="none">
            <Stack.Screen name={authRoutes.auth} component={Login} />
            <Stack.Screen name={authRoutes.App} component={MovieNavigator} />
          </Stack.Navigator>
        </ThemeProvider>
      </Provider>
    </NavigationNativeContainer>
  );
};

export default App;
