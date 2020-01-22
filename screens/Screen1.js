import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LocalizationContext from '../context/LocalizationContext';


export default function Screen1() {

  const { t, i18n } = React.useContext(LocalizationContext);

  return (
    <View style={styles.container}>
      <Button
        transparent
        onPress={() => i18n.changeLanguage('en')}
        title={t('change_language_english')}/>
      <Button
        transparent
        onPress={() => i18n.changeLanguage('fr')}
        title={t('change_language_french')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  }
});
