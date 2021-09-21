import React,{ useState } from "react";


export const AppContext = React.createContext();


export default function AppProvider({ children }) {
    const [user,setUser] = useState({})
    const [points, setPoints] = useState(0)

    const handlerAddPoint =(value)=>{
        let newUser = {...user}
        newUser.points = user.points + value
        setUser(newUser)
      }
    
      const handlerSubtractPoint =(points)=>{
        let newUser = {...user}
        newUser.points = user.points - points
        setUser(newUser)
      }
    return(
        <AppContext.Provider value={{user,
            setUser,  
            handlerAddPoint, 
            handlerSubtractPoint, 
            points,
            setPoints,  }}>
             {children}
        </AppContext.Provider>

    );
}