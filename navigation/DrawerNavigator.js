import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { Icon } from 'react-native-elements';

import Header from '../components/Header';
import DrawerLabel from '../components/DrawerLabel';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';

const Drawer1Stack = createStackNavigator(
  {
    Home: {
      screen: Screen1,
      navigationOptions: ({ navigation }) => ({
        headerTitle: () => (<Header transKey="screen" transData={{order: 1}}/>),
        headerLeft:
        <Icon
          name='bars'
          size={18}
          type='font-awesome'
          containerStyle={{paddingLeft: 10}}
          onPress={() => navigation.toggleDrawer()} />
      })
    }
  }
);

Drawer1Stack.navigationOptions = () => ({
  drawerLabel: ({ focused }) => (
    <DrawerLabel
      focused={focused}
      transKey="screen"
      transData={{order: 1}}
    />
  ),
});

const Drawer2Stack = createStackNavigator(
  {
    Home: {
      screen: Screen2,
      navigationOptions: ({ navigation }) => ({
        headerTitle: () => (<Header transKey="screen" transData={{order: 2}}/>),
        headerLeft:
        <Icon
          name='bars'
          size={18}
          type='font-awesome'
          containerStyle={{paddingLeft: 10}}
          onPress={() => navigation.toggleDrawer()} />
      })
    }
  }
);

Drawer2Stack.navigationOptions = () => ({
  drawerLabel: ({ focused }) => (
    <DrawerLabel
      focused={focused}
      transKey="screen"
      transData={{order: 2}}
    />
  )
});

const Drawer3Stack = createStackNavigator(
  {
    Home: {
      screen: Screen3,
      navigationOptions: ({ navigation }) => ({
        headerTitle: () => (<Header transKey="screen" transData={{order: 3}}/>),
        headerLeft:
        <Icon
          name='bars'
          size={18}
          type='font-awesome'
          containerStyle={{paddingLeft: 10}}
          onPress={() => navigation.toggleDrawer()} />
      })
    },
  }
);

Drawer3Stack.navigationOptions = () => ({
  drawerLabel: ({ focused }) => (
    <DrawerLabel
      focused={focused}
      transKey="screen"
      transData={{order: 3}}
    />
  ),
});

const drawerNavigator = createDrawerNavigator({
  Drawer1Stack,
  Drawer2Stack,
  Drawer3Stack
});

export default drawerNavigator;
