/* eslint-disable @typescript-eslint/no-empty-function */
// settingsContext.tsx
import { createContext, useState, useEffect, ReactNode } from 'react';

export type Settings = {
  length: number;
  lowerCase: boolean;
  upperCase: boolean;
  digit: boolean;
  darkmode: boolean;
  password: string;
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
  password: ""
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

  useEffect(() => {
    // Wywołaj funkcję lub wykonaj jakieś operacje po zmianie stanu "settings"
    console.log('Zaktualizowano settings:', settings);
  }, [settings]);

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
