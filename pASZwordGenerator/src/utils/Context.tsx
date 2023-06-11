/* eslint-disable @typescript-eslint/no-empty-function */
// settingsContext.tsx
import { createContext, useState, ReactNode } from 'react';

export type Settings = {
  length: number;
  lowerCase: boolean;
  upperCase: boolean;
  digit: boolean;
  darkmode: boolean;
  password: string;
  special: boolean;
};

type SettingsContextValue = {
  settings: Settings;
  updateSettings: (updatedSettings: Partial<Settings>) => void;
};

const defaultSettings: Settings = {
  length: 8,
  lowerCase: true,
  upperCase: true,
  digit: true,
  darkmode: false,
  password: "",
  special: true
};

export const SettingsContext = createContext<SettingsContextValue>({
  settings: defaultSettings,
  updateSettings: () => {},
});

type SettingsProviderProps = {
  children: ReactNode;
};

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [settings, setSettings] = useState<Settings>(defaultSettings);


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
