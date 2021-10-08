import React,{ useState } from "react";
 import { usePagination } from "../components/utils/pagination.jsx";


export const AppContext = React.createContext();


export default function AppProvider({ children }) {
    const [user,setUser] = useState({})
    const [points, setPoints] = useState(0)
    const [products, setProducts] = useState([])
    console.log(products)

    const paginationList = usePagination(products, 16)

    let totalProducts = products.length

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
            setPoints,  
            products, 
            setProducts, 
            totalProducts,
            paginationList,
            }}>
             {children}
        </AppContext.Provider>

    );
}