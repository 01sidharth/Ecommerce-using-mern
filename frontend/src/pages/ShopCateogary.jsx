import React, { useContext } from 'react'
import "./CSS/ShopCateogary.css"
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from "../components/Assets/dropdown_icon.png"
import Item from '../components/item/Item'

const ShopCateogary = (props) => {
  const {all_product}=useContext(ShopContext)
  return (
    <div className='shop-cateogory'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcateogary-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcateogary-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcateogary-products">
        {
          all_product.map((item,i)=>{
            if (props.category===item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else{
              return null;
            }
          })
        }
      </div>
      <div className="shopcategory-loadmore">
        Explore more
      </div>
    </div>
  )
}

export default ShopCateogary