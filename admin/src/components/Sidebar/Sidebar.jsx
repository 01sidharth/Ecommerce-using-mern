import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'
import addd_product_icon from '../../assets/Product_Cart.svg'
import list_product_icon from '../../assets/Product_list_icon.svg'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration:"none"}}></Link>
        <div className='sidebar-item'>
            <img src={addd_product_icon} alt="" />
            <p>Add Product</p>
        </div>
        <Link to={'/listproduct'} style={{textDecoration:"none"}}></Link>
        <div className='sidebar-item'>
            <img src={list_product_icon} alt="" />
            <p>Product List</p>
        </div>
    </div>
  )
}

export default Sidebar