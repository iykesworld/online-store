import React, { useState } from 'react'
import './Search.css'
import Pageheader from '../components/pageheader/Pageheader'
import productData from '../data/products.json'
import ProductCard from '../shop/ProductCard'
import Pagination from '../shop/Pagination'

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProduct, setFilteredProduct] = useState(productData);
    const [gridList, setGridList] = useState(1);
    const[product, setProduct] = useState(productData)
     // pagination
     const [currentPage, setCurrentPage] = useState(1);
     const productPerPage = 16;
     const indexOfLastProduct = currentPage * productPerPage;
     const indexOfFirstProduct = indexOfLastProduct - productPerPage;
     const currentProducts = filteredProduct.slice(indexOfFirstProduct, indexOfLastProduct);
     // function to change the current page
     const paginate = (pageNumber) =>{
         setCurrentPage(pageNumber)
     };
    const upDateGrid = (id)=>{
        setGridList(id)
    }

    const handlesearch = ()=>{
        const query = searchQuery.toLowerCase();
        const filtered = productData.filter(product => product.name.toLowerCase().includes
        (query) || product.description.toLowerCase().includes(query));
        setFilteredProduct(filtered);
    }
  return (
    <>
    <Pageheader title='Search Page' currentPage='Search'/>
    <div className="search">
        <div className="search-input">
            <input type="text" placeholder='Search for Products' 
            value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}
            className='the-input'
            />
            <button onClick={handlesearch} className='search-button'>
                Search
                </button>
        </div>
            <ProductCard gridList={gridList} products={currentProducts}/>
        <div>
            <Pagination
            productPerPage = {productPerPage}
            totalProducts = {filteredProduct.length}
            paginate = {paginate}
            activePage = {currentPage}
            />
        </div>
    </div>
    </>
  )
}

export default Search