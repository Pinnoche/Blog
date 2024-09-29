import { createContext, useReducer, useEffect } from "react";

export const UserContext = createContext();

export const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN' : 
            return {
                user: action.payload
            }
        case 'LOGOUT' :
            return {
                user: null 
            }
        default : 
            return state


    }
}

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer( userReducer, {
        user: JSON.parse(localStorage.getItem('user')) || null,
    })

    console.log('AuthContext State: ', state)
    useEffect(() => {
        if (state.user) {
            localStorage.setItem('user', JSON.stringify(state.user));
        } else {
            localStorage.removeItem('user');  
        }
    }, [state.user]);
    return (
        <UserContext.Provider value={ {...state, dispatch }}>
            { children }
        </UserContext.Provider>
    )
}