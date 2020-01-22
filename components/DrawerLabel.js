import React from 'react';
import { Text } from 'react-native';

import Colors from '../constants/Colors';
import LocalizationContext from '../context/LocalizationContext';

export default function DrawerLabel(props) {
  const { t } = React.useContext(LocalizationContext);
  return (
    <Text
      style={{
        margin: 16,
        fontWeight: "bold",
        color: props.focused ? Colors.drawerLabelSelected : Colors.drawerLabelDefault
      }}>
        {t(props.transKey, props.transData)}
    </Text>
  );
}
