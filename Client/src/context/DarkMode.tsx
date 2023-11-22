import { createContext, useContext, ReactNode } from "react";
import useDarkMode from "../hooks/useDarkMode";

type DarkModeContextProps = {
    isDarkTheme: boolean;
    toggleDarkTheme: () => void;
    getClassName: (baseClassName: string) => string;
}

type DarkModeProviderProps = {
    children: ReactNode
}

const DarkModeContext = createContext({} as DarkModeContextProps);

const DarkModeProvider = ({children}: DarkModeProviderProps) => {
    const darkMode = useDarkMode();

    return (
        <DarkModeContext.Provider value={darkMode}>
            {children}
        </DarkModeContext.Provider>
    )
}

const useDarkModeContext = () => {
    const context = useContext(DarkModeContext);

    return context
}

export { DarkModeProvider, useDarkModeContext}