import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from '../../context/Storecontext'
import { useNavigate } from 'react-router-dom';


export default function Cart() {
  const { cartitem, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className='cart-item'>
        <div className='cart-item-tittle'>
          <p>Items</p>
          <p>Tittle</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          if (cartitem[item._id] > 0) {
            return (
              <div>
                <div className='cart-item-tittle cart-items-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartitem[item._id]}</p>
                  <p>${item.price * cartitem[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>

                </div>
                <hr />
              </div>

            ) 
          }
        })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Totals</b>
              <b>${getTotalCartAmount()===0?0: getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cart-promocode'>
           <div>
            <p>If you have a promo code, enter it here</p>
           </div>
              <div className='cart-promocode-input'>
                <input type="text" placeholder='promo code'/>
                <button>Submit</button>
              </div>

        </div>
      </div>
    </div>
  )
}




