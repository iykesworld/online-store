import React, { useEffect, useState } from 'react'
import './Shop.css'
import Pageheader from '../components/pageheader/Pageheader'
import { Link, useParams } from 'react-router-dom';
import productData from '../data/products.json'
import Ratings from '../components/ratings/Ratings';
import Review from './Review';
import PopularPost from './PopularPost';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/feature/cart/cartSlice'

const SingleProduct = () => {
    const [preQuantity, setPreQuantity] = useState(1);
    const [coupon, setCoupon] = useState("");
    const [size, setSize] = useState("");
    const [color, setColor] = useState("Select Color");
    const [product, setProduct] = useState(null);
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    const {id} = useParams();
    const dispatch = useDispatch();
    const handleAddToCardt = (product) =>{
        dispatch(addToCart(product))
    }
    useEffect(()=>{
        const productItem = productData.find((p)=> p.id === parseInt(id));
        setProduct(productItem)
    },[id])

    const handleSizeChange = (e)=>{
        setSize(e.target.value);
    }
    const handleColorChange = (e)=>{
        setColor(e.target.value);
    }
    const handleDecrease = ()=>{
        if(preQuantity > 1){
            setPreQuantity(preQuantity - 1)
        }
    }
    const handleIncrease = ()=>{
        setPreQuantity(preQuantity +1);
    } 
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    
  return (
    <>
    <Pageheader title= 'Single Product Page' currentPage = 'Shop' />
    <div className='single-product'>
        <div className='Single-product-left-wrapper' >
            <div className="single-product-left">
                {
                    product ? (
                        <div className='product-wrapper'>
                            <div className='single-product-image-wrapper'>
                            <img src={product.image} alt="" />
                            </div>
                            <div className='single-product-details'>
                                <h4>{product.name}</h4>
                                <div className="single-product-rating">
                                <Ratings/>
                                </div>
                                <h4>${product.price}</h4>
                                <span>{product.description}</span>
                                <div className='single-product-form'>
                                    <form onSubmit={handleSubmit}>
                                    <div className="input-wrapper">
                                        <div className='single-product-input'>
                                            <select value={size} onChange={handleSizeChange} >
                                                <option value="" >Select Size</option>
                                                <option value="SM" >SM</option>
                                                <option value="MD" >MD</option>
                                                <option value="LG" >LG</option>
                                                <option value="XL" >XL</option>
                                                <option value="XXL" >XXL</option>
                                            </select>
                                        </div>
                                        <div className='single-product-input'>
                                            <select value={color} onChange={handleColorChange} >
                                                <option value="" >Select Color</option>
                                                <option value="SM" >Pink</option>
                                                <option value="MD" >Black</option>
                                                <option value="LG" >Red</option>
                                                <option value="XL" >White</option>
                                                <option value="XXL" >Ash</option>
                                            </select>
                                        </div>
                                        </div>
                                        <div className='single-product-coupon'>
                                            <input type="text" placeholder='Enter Coupon' onChange={(e)=> setCoupon(e.target.value)} />
                                        </div>
                                        <div className='single-product-button'>
                                            <button onClick={(e)=>{
                                            e.stopPropagation();
                                            handleAddToCardt(product)}}>Add to Cart</button>
                                            <Link to="/cart-page" className='check-out-button'>
                                            <span>Check Out</span>
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p>
                            product not found
                        </p>
                    )
                }
                </div>
                <div className="single-product-review">
                    <Review/>
                </div>
        </div>
        <div className="single-product-right">
            <aside>
                <PopularPost/>
            </aside>
        </div>
    </div>
    </>
  )
}

export default SingleProduct