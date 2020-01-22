import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import LocalizationProvider from './context/LocalizationProvider';

import AppNavigator from './navigation/AppNavigator';

export default function App(props) {
  return (
    <LocalizationProvider>
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    </LocalizationProvider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
