import React from 'react';
import { HeaderTitle } from 'react-navigation-stack';

import LocalizationContext from '../context/LocalizationContext';

export default function Header(props) {
  const { t } = React.useContext(LocalizationContext);
  const { transKey, transData } = props

  return (
    <HeaderTitle>{t(transKey, transData)}</HeaderTitle>
  );
}
