import React,{ useState } from "react";
 import { usePagination } from "../components/utils/pagination.jsx";


export const AppContext = React.createContext();


export default function AppProvider({ children }) {
    const [user,setUser] = useState({})
    const [points, setPoints] = useState(0)
    const [products, setProducts] = useState([])
    const [reedemStatus, setReedemStatus] = useState({})
    const [history, setHistory] = useState([])
    console.log(products)

    const paginationList = usePagination(products, 16)
    const paginationHistoryList = usePagination(history, 16)

    const totalProducts = products.length
    const totalHistory = history.length

    const handlerAddPoint =(value)=>{
        const newUser = {...user}
        newUser.points = user.points + value
        setUser(newUser)
      }
    
      const handlerSubtractPoint =(points)=>{
        const newUser = {...user}
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
            reedemStatus, 
            setReedemStatus,
            history,
             setHistory, 
             paginationHistoryList,
             totalHistory}}>
             {children}
        </AppContext.Provider>
    );
}