import { createContext, useState } from "react";
import { food_list } from "../assets/Food Del Frontend Assets/assets/assets";



export const StoreContext = createContext(null)
const StorecontextProvider = (props) => {

   const [cartitem, setcartitem,] = useState({});

   const addToCart = (itemId) => {
      if (!cartitem[itemId]) {
         setcartitem((prev) => ({ ...prev, [itemId]: 1 }))
      }
      else {
         setcartitem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
      }
   }

   const removeFromCart = (itemId) => {
      setcartitem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
   }

const getTotalCartAmount = ()=>{
       let totalAmount=0
       for(const item in cartitem)
       { if(cartitem[item]>0){
         let itemInfo = food_list.find((product)=>product._id===item)
         totalAmount +=itemInfo.price*cartitem[item]
       }

       }
       return totalAmount;
}

   const contextValue = {
      food_list,
      cartitem,
      setcartitem,
      addToCart,
      removeFromCart,
      getTotalCartAmount

   }
   return (
      <StoreContext.Provider value={contextValue}>
         {props.children}
      </StoreContext.Provider>

   )
}
export default StorecontextProvider;






