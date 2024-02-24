import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom';
import logo from '../logo.png'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const {cart} = useSelector((state) => state)
  return (
    <div >
      <Box>
        <AppBar style={{backgroundColor:"rgb(15 23 42)"}}>
          <Toolbar style={{display:"flex", justifyContent:"space-between",maxWidth:"900px",marginLeft:"200px"}} >
            <NavLink to="/"><img src={logo} width={70} height={30} alt=''/></NavLink>
            <div className='navbar'>
              <NavLink to="/" style={{textDecorationLine:"none"}}><p style={{color:"rgb(241 245 249)"}}>Home</p></NavLink>
              <div className='logo'>
                <NavLink to="/cart"><ShoppingCartIcon style={{color:"rgb(241 245 249)"}}/></NavLink>
                {
                  cart.length > 0 && <span className='cartNumber'>{cart.length}</span>
                }
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      
    </div>
  )
}

export default Navbar