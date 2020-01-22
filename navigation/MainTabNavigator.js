import React, { useContext } from 'react';
import { Platform, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import TabBarLabel from '../components/TabBarLabel';
import Header from '../components/Header';

import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';

const Tab1Stack = createStackNavigator(
  {
    Home: {
      screen: Screen1,
      navigationOptions: {
        headerTitle: () => (<Header transKey="screen" transData={{order: 1}}/>)
      }
    }
  }
);

Tab1Stack.navigationOptions = () => (
  {
    tabBarLabel: ({ focused }) => (
      <TabBarLabel
        focused={focused}
        transKey="tab"
        transData={{order: 1}} />
    ),
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios'
            ? `ios-information-circle${focused ? '' : '-outline'}`
            : 'md-information-circle'
        }
      />
    ),
  }
);

const Tab2Stack = createStackNavigator(
  {
    Home: {
      screen: Screen2,
      navigationOptions: {
        headerTitle: () => (<Header transKey="screen" transData={{order: 2}}/>)
      }
    }
  }
);

Tab2Stack.navigationOptions = () => (
  {
    tabBarLabel: ({ focused }) => (
      <TabBarLabel
        focused={focused}
        transKey="tab"
        transData={{order: 2}} />
    ),
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios'
            ? `ios-link`
            : 'md-link'
        }
      />
    ),
  }
);

const Tab3Stack = createStackNavigator(
  {
    Home: {
      screen: Screen3,
      navigationOptions: {
        headerTitle: () => (<Header transKey="screen" transData={{order: 3}}/>)
      }
    }
  }
);

Tab3Stack.navigationOptions = () => (
  {
    tabBarLabel: ({ focused }) => (
      <TabBarLabel
        focused={focused}
        transKey="tab"
        transData={{order: 3}} />
    ),
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios'
            ? `ios-options`
            : 'md-options'
        }
      />
    ),
  }
);

const tabNavigator = createBottomTabNavigator({
  Tab1Stack,
  Tab2Stack,
  Tab3Stack,
});

export default tabNavigator;
