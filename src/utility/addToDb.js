import { json } from "react-router-dom"

const getStoredCartList = () => {
    const storedListstr = localStorage.getItem('cart-list')
    if (storedListstr) {
        const storeList = JSON.parse(storedListstr)
        return storeList
    }
    else {
        return []
    }
}



const addToStoreCartList = (id) => {
    const storedList = getStoredCartList()
    if (storedList.includes(id)) {
        alert('Id Alredy exists')
    }
    else {
        storedList.push(id)
        const storedListstr = JSON.stringify(storedList)
        localStorage.setItem('cart-list', storedListstr)
    }
}

export {
    addToStoreCartList,
    getStoredCartList
}