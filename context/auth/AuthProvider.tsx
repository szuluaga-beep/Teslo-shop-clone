import { FC, ReactNode, useReducer } from 'react';
import { AuthContext, authReducer } from './';
import { IUser } from '../../interfaces';


interface PropsProvider {
    children: ReactNode
}

export interface AuthState {
    isLoggedIn: boolean;
    user?: IUser;
}


const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    user: undefined
}


export const AuthProvider: FC<PropsProvider> = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

    return (
        <AuthContext.Provider value={{
            ...state,

            //Metodos
        }}>
            {children}
        </AuthContext.Provider>
    )
};