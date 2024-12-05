import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { remove } from '../redux/Slices/CartSlice';

function CartItem({item, itemIndex}) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (
    <div className='mt-6 ml-[270px]'>

      <div className='flex w-[40%] ml-[50px] mb-4 rounded-lg p-1 gap-3 ' >

          <div className='p-2'>
            <img className='w-[230px] h-[200px]' src={item.image} />
          </div>
          <div>
            <h1 className='font-semibold text-xl mt-5'>{item.title}</h1>
            <h1 className='text-sm mt-5'>{item.description.split(" ").slice(0, 10).join(" ") + "..."}</h1>
            <div className='flex justify-between items-center mt-12'>
            <h1 className='text-green-600 font-semibold text-xl'>${item.price}</h1>
            <div onClick={removeFromCart}>
            <MdDelete className='text-2xl cursor-auto'/>
            </div>
           
            </div>
          
          </div>
         
          
      </div>
     
      <hr className='w-[45%] h-1 bg-black mb-2'></hr>
    </div>
  )
}

export default CartItem