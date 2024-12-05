import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from "../components/CartItem"

function Cart() {
  const {cart} =useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect( () =>{
      setTotalAmount(cart.reduce ((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div>
      {
        cart.length > 0 ? 
        (<div>

          <div>
            {
              cart.map( (item, index) => {
                return <CartItem key={item.id} item={item} itemIndex={index}/>
              })
            }
          </div>

            <div className='w-[45%] flex flex-col absolute top-[150px] ml-[880px] p-2 h-screen'>
              <div>
                  <div className='text-green-700 font-bold uppercase'>Your Cart</div>
                  <div className='font-bold text-3xl text-green-700 uppercase mt-2'>Summary</div>
                  <p className='text-lg font-semibold mt-2'>
                    <span className=''>Total Items : {cart.length}</span>
                  </p>
              </div>
              <div className='mt-[340px]'>
                  <p className='text-lg font-semibold'>Total Amount : ${totalAmount}</p>
                  <button className='border bg-green-700 w-[45%] mt-3 px-2 py-2 rounded-lg text-white font-semibold'>
                    Checkout Now
                  </button>
              </div>
            </div> 

        </div>) :
        (<div className='flex flex-col justify-center mt-[250px] items-center'>
          <h1 className='font-semibold text-2xl'> Your Cart is Empty</h1>
          <Link to={'/'}>
          <button className='border px-4 font-base py-2 rounded-xl mt-3 text-lg hover:bg-slate-800 hover:text-white transition ease-in' >Shop Now</button></Link>

          </div>)
      }
    </div>
  )
}

export default Cart