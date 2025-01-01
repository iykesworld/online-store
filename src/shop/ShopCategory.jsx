import React from 'react'
import './Shop.css'
import data from '../data/products.json'

const ShopCategory = ({filtereItem,setItem,menuItem,setProducts,selectedCategory}) => {
  return (
    <div className='shop-category'>
        <div className='shop-category-header'>
        <h5>All Categories</h5>
        </div>
        <div className='shopcategory-wrapper'>
            <button onClick={()=> setProducts(data)} >All</button>
            {
                menuItem.map((val, id)=>{
                    return <button key={id} onClick={()=> filtereItem(val)}>
                        {val}
                    </button>
                })
            }
        </div>
    </div>
  )
}

export default ShopCategory