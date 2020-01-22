import React from 'react';
import { Text } from 'react-native';

import Colors from '../constants/Colors';
import LocalizationContext from '../context/LocalizationContext';

export default function TabBarLabel(props) {
  const { t } = React.useContext(LocalizationContext);
  return (
    <Text
      style={{
        fontSize: 11,
        color: props.focused ? Colors.tabLabelSelected : Colors.tabLabelDefault
      }}>
        {t(props.transKey, props.transData)}
    </Text>
  );
}
