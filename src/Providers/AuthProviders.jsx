import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";

export const authContext = createContext(null);

const auth = getAuth(app);


const AuthProviders = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading, setLoading]= useState(true);



    const authInfo ={
        user,
        loading,
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProviders;