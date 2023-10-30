import { FC, useReducer, ReactNode } from 'react';
import { UiContext, uiReducer } from './';

interface PropsProvider {
    children: ReactNode
}

export interface UiState {
    isMenuOpen: boolean;
}


const UI_INITIAL_STATE: UiState = {
    isMenuOpen: false,
}


export const UiProvider: FC<PropsProvider> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const toogleSiMenu = () => {
        dispatch({ type: '[Ui] - ToggleMenu' })
    }

    return (
        <UiContext.Provider value={{
            ...state,

            //Metodos
            toogleSiMenu
        }}>
            {children}
        </UiContext.Provider>
    )
};