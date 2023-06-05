/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react';
import IContext from '../interfaces/IContext';

export const defaultContext = {
  settings: {
    length: 8,
    upperCase: true,
    lowerCase: true,
    digit: true,
    special: true,
    darkmode: true
  },
  setSettings: () => {}
};

const SettingsContext = React.createContext<IContext>(defaultContext);

export default SettingsContext;