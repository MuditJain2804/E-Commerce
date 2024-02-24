import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { add, remove } from '../redux/slices/CartSlice';

const Product = ({post}) => {
  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();
  function addToCart(){
    dispatch(add(post));
    toast.success("Item added to cart");
  }

  function removeFromCart(){
    dispatch(remove(post.id))
    toast.error("Item removed from cart")
  }
  const buttonStyle = {
    backgroundColor:"white",
    color:"#374151",
    border: "2px solid #374151",
    borderRadius:"25px",
    fontSize:"12px",
    transition:"background-color 0.3s, color 0.3s",
    '&:hover':{
      backgroundColor:"#374151",
      color:"white"
    },
  }
  return (
    <div className='productContainer'>
      <div>
        <p className='title'>{post.title.substring(0,18)+"..."}</p>
      </div>
      <div style={{height:"80px"}}>
        <p className='description'>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div>
        <img src={post.image} width={120} height={180} alt=''/>
      </div>
      <div className='priceContainer'>
        <div>
          <p className='price'>${post.price}</p>
        </div>
        <div>

          {
            cart.some((p) => p.id === post.id) ? 
            (<Button variant='conatined'  onClick={removeFromCart} sx={buttonStyle}>Remove Item</Button>) : 
            (<Button variant='contained'  onClick={addToCart} sx={buttonStyle}>Add to Cart</Button>)
          }
        </div>
      </div>
      
    </div>
  )
}

export default Product