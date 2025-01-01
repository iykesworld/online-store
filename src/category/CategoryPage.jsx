import React, { useEffect, useState } from 'react'
import './CategoryPage.css'
import { useParams } from 'react-router-dom'
import products from '../data/products.json'
import Pageheader from '../components/pageheader/Pageheader'
import ProductCard from '../shop/ProductCard'

const CategoryPage = () => {
  const { categoryName } = useParams();
  console.log(categoryName);
  const [filteredProduct, setFilteredProduct] = useState([]);
  
  useEffect(() => {
      const filtered = products.filter((product) => product.categories===categoryName.toLowerCase());
  
      setFilteredProduct(filtered);
  }, [categoryName]);
  return (
    <>
        <Pageheader title={categoryName} currentPage={categoryName}/>
        <div>
            <ProductCard products={filteredProduct}/>
        </div>
    </>
  )
}

export default CategoryPage