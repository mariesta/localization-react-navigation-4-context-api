import React from 'react';
import { createAppContainer } from 'react-navigation';

import MainNavigator from './MainTabNavigator';
//import MainNavigator from './DrawerNavigator';

export default createAppContainer(MainNavigator);
