import {createContext, useState} from 'react';
export const MyContext = createContext();

function AppContext({children}){
    // here we manage our state
    // another tool will manage your API
    const[products, setProducts]= useState ([])

    return (
    <MyContext.Provider value={{products, setProducts }}>
        {children}
    </MyContext.Provider>
    )
 
   
}

export default AppContext;