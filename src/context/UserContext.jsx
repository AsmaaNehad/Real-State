import { createContext } from "react"
export const UserContext = createContext(null);

export function UserProvider({children}){
    const user = {
        name: "Youssef",
        age: 25,
        email:"Youssef@gmail.com",
        role: "Developer"
    };
    return(
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
    
    );
}

