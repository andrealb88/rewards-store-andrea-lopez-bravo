import { BASE_URL,headers } from "./constant";

export const morePoints = async(value) =>{
    const bodyData ={amount:value}
    try{
        const response= await fetch(BASE_URL+"user/points",{
            method:"POST",
            headers,
            body:JSON.stringify(bodyData)
        })
        const data = await response.json()
            return data
    } catch(error){
        console.log(error)
    }
}