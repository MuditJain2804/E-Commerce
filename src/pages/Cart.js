import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Cartitem from '../components/Cartitem';

const Cart = () => {
  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc+ curr.price,0));
  },[cart])
  return (
    <div >
      {
        cart.length > 0 ? 
        (<div className='cartContainer'>
          <div className='cartitem'>
            {
              cart.map((item,index) => {
                return <Cartitem key={item.id} item={item}/>
              })
            }
          </div>
          <div className='summaryContainer'>
            <div>
              <div className='yourCart'>YOUR CART</div>
              <div className='summary'>SUMMARY</div>
              <p>
                <span className='total'>Total Items : {cart.length}</span>
              </p>
            </div>
            <div>
              <p className='total'>Total Amount : ${totalAmount}</p>
              <Button variant='contained' style={{width:"100%", backgroundColor:"#16a34a"}}>Checkout Now</Button>
            </div>
          </div>
        </div>) : 
        (<div style={{marginTop:"300px"}}>
          <h2>Your Cart is Empty</h2>
          <Link to="/">
            <Button variant='contained' style={{ backgroundColor:"#16a34a"}}>
              Shop Now
            </Button>
          </Link>
        </div>)
      }
    </div>
  )
}

export default Cart