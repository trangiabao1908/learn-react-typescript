import { ReactNode, createContext, useState } from "react";
import React from "react";
export interface ThemeType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}
interface Props {
  children: ReactNode;
}
const ThemeValueDefault = {
  theme: "primary",
  setTheme: () => {},
};
export const ThemeContext = createContext<ThemeType>(ThemeValueDefault);
const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<string>(ThemeValueDefault.theme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
