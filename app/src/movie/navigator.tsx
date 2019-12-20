import React, {useContext, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';

import {ThemeContext} from '../theme/context';

import {authRoutes} from '../main/navigator';
import {MovieDetails, MovieList, FavMovies, Settings} from './screens';
import {routes as movie} from './const';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  const {theme}: any = useContext(ThemeContext);
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.bg.secondary,
        style: {
          backgroundColor: theme.bg.primary,
        },
      }}>
      <Tab.Screen
        name={movie.search}
        component={MovieList}
        options={{
          title: 'Search',

          tabBarIcon: ({focused}) => <TabIcon focused={focused} name="movie" />,
        }}
      />

      <Tab.Screen
        name={movie.favorite}
        component={FavMovies}
        options={{
          title: 'Favorite',
          tabBarIcon: ({focused}) => <TabIcon focused={focused} name="star" />,
        }}
      />

      <Tab.Screen
        name={movie.settings}
        component={Settings}
        options={{
          title: 'Search',
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} name="settings" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const TabIcon: React.FC<{focused: boolean; name: string}> = ({
  focused,
  name,
}) => {
  const {theme}: any = useContext(ThemeContext);
  return (
    <Icon
      size={24}
      color={focused ? theme.bg.secondary : '#007AFF'}
      name={name}
    />
  );
};

export default () => {
  const token = useSelector((state: any) => state.auth.token);
  const {replace} = useNavigation();
  useEffect(() => {
    if (!token) {
      console.log('LOGOUT');
      replace(authRoutes.auth, {});
    }
  }, [replace, token]);

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={movie.list} component={TabNavigator} />
      <Stack.Screen name={movie.details} component={MovieDetails} />
    </Stack.Navigator>
  );
};
