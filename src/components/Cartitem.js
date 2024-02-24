import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

const Cartitem = ({item}) => {
  const dispatch = useDispatch();
  function removeFromCart(){
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  }
  return (
    <div className='cartItemContainer'>
      <div >
        <img src={item.image} width={120} height={180} alt=''/>
      </div>
      <div className='textContainer'>
        <h2 className='title'>{item.title}</h2>
        <p className='cartItemDescription'>{item.description.split(" ").slice(0,15).join(" ") + "..."}</p>
        <div className='btn-container'>
          <p className='price'>${item.price}</p>
          <div onClick={removeFromCart}>
            <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cartitem