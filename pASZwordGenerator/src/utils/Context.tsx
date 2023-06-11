/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react';

export type Settings = {
  length: number;
  lowerCase: boolean;
  upperCase: boolean;
  digit: boolean;
  special: boolean;
  darkmode: boolean;
};

type SettingsContextType = {
  settings: Settings;
  updateSettings: (updatedSettings: Partial<Settings>) => void;
};

const initialSettings: Settings = {
  length: 8,
  lowerCase: true,
  upperCase: true,
  digit: true,
  special: true,
  darkmode: false,
};

export const SettingsContext = createContext<SettingsContextType>({
  settings: initialSettings,
  updateSettings: () => {},
});

type SettingsProviderProps = {
  children: React.ReactNode;
};

export const SettingsProvider: React.FC<SettingsProviderProps> = ({children}) => {
  const [settings, setSettings] = useState<Settings>(initialSettings);

  const updateSettings = (updatedSettings: Partial<Settings>) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      ...updatedSettings,
    }));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};