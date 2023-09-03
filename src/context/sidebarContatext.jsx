import { createContext, useReducer } from "react";
import sidebarReducer from '../reducers/sidebarReduce';
import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../actions/actions";

const iniatialState ={
    isSidebarOpen: false
}

export const SidebarContext = createContext({});

export const SidebarProvider = ({children}) => {
    const [state, dispatch] = useReducer(sidebarReducer, iniatialState);

    const openSidebar = () => {
        dispatch({type: OPEN_SIDEBAR});
        console.log('abierto')
    }

    const closeSidebar = () => {
        dispatch({type: CLOSE_SIDEBAR});
        console.log('close')

    }

    return (
        <SidebarContext.Provider value={{
            ...state,
            openSidebar,
            closeSidebar,
        }}>
            {children}
        </SidebarContext.Provider>
    )
}

