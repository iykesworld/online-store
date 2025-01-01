import React, { useState } from 'react'
import './Shop.css'
import { Link } from 'react-router-dom';

const Searched = ({products}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredProducts = products.filter((product)=>{
        return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  return (
    <div className='searched'>
        <form className='search-form'>
            <input type="text" name='search' id='search' placeholder='search...' defaultValue={searchTerm} 
            onChange={(e)=> setSearchTerm(e.target.value)}
            />
            <button type='submit'>
            <i className="ri-search-line"></i>
            </button>
        </form>
        <div className='product-image-container'>
            {
                searchTerm && filteredProducts.map((product)=>{
                    return <Link key={product.id} to={`/shop/${product.id}`} className='filtered-link-wrapper' >
                        <div className='product-image-wrapper'>
                            <img src={product.image} alt="product image" />
                        </div>
                        <div>
                            <p>
                                <Link to={`/shop/${product.id}`} className='link-p' >{product.name}</Link>
                            </p>
                            <h5>${product.price}</h5>
                        </div>
                    </Link>
                })
            }
        </div>
    </div>
  )
}

export default Searched