import { Children, createContext, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({children}){

    const [userInfo,setUserInfo] = useState({});

    return (
        <UserContextProvider value={{userInfo,setUserInfo}}>
            {Children}
        </UserContextProvider>    
    )
}