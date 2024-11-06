import { MdDoNotStep } from "react-icons/md"
import { json } from "react-router-dom"
import { toast } from "react-toastify"




// Get
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


// add
const addToStoreCartList = (id) => {
    const storedList = getStoredCartList()
    if (storedList.includes(id)) {
        alert('Id Alredy exists')
    }
    else {
        storedList.push(id)
        const storedListstr = JSON.stringify(storedList)
        localStorage.setItem('cart-list', storedListstr)
        toast("Item Added In CartList")
    }
}


// delete
const removeCart = (id) => {

    const storedListstr = localStorage.getItem('cart-list')

    const storeList = JSON.parse(storedListstr)
    console.log(storeList)

    const deleteCart = storeList.filter(p => p != id)

    const remaindstr = JSON.stringify(deleteCart)
    localStorage.setItem('cart-list', remaindstr)
    toast('Deleted Itam')

}


// wishlist
const getWishCartList = () => {
    const storedListstr = localStorage.getItem('wish-list')
    if (storedListstr) {
        const storedListid = JSON.parse(storedListstr)
        return storedListid

    }
    else {
        return []
    }
}

const addToStoreWishList = (id) => {

    const storedListid = getWishCartList()
    if (storedListid.includes(id)) {
        alert('alredy id added')
    }
    else {
        storedListid.push(id)
        const storedListstr = JSON.stringify(storedListid)
        localStorage.setItem('wish-list', storedListstr)
        toast("Item Added In WishList")
    }
}








export {
    addToStoreCartList,
    getStoredCartList,
    removeCart,
    getWishCartList,
    addToStoreWishList
}