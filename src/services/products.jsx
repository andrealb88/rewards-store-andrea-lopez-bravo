import {BASE_URL,headers} from "./constant"

export const getProducts = async()=> {
try{
    const response = await fetch(BASE_URL+"products",{headers})
    const data = await response.json()
    return data
} catch (error){
    console.log(error)
}
}
