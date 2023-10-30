import { createContext } from 'react'

interface ContextProps {
    isMenuOpen: boolean;

    //Metodos
    toogleSiMenu: () => void;
}

export const UiContext = createContext({} as ContextProps)