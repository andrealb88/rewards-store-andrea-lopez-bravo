

export const filterByAvailability =(list, user)=>{
    const resultByAvailability = [...list].filter ((product)=>{
        return product.cost < user.points})
    return resultByAvailability
}

export const sortByLowestPrice =(list)=>{
    const resultLowestPrice = list.sort(function(a,b){
        if (a.cost > b.cost) {
            return 1;
        }
        if (a.cost < b.cost) {
            return -1;
        }
        return 0;         
    }) 
    return [...resultLowestPrice]  
}

export const sortByhighestPrice =(list)=>{
    const resultHighestPrice = list.sort(function(a,b){
        if (a.cost > b.cost) {
            return -1;
        }
        if (a.cost < b.cost) {
            return 1;
        }
        return 0;         
    }) 
    return [...resultHighestPrice]  
}