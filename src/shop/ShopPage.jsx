import React, { useEffect, useState } from 'react'
import './Shop.css'
import Pageheader from '../components/pageheader/Pageheader'
import data from '../data/products.json';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import ShopCategory from './ShopCategory';
import PopularPost from './PopularPost';
import Searched from './Searched';

const ShopPage = () => {
    const [gridList, setGridList] = useState(1);
    const [products, setProducts] = useState(data);

    const upDateGrid = (id)=>{
        setGridList(id)
    }

    useEffect(()=>{
        window.scrollTo(0,0)
    })

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const productPerPage = 16;
    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    // function to change the current page
    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber)
    };

    // filetered product by category
    const [selectedCategory, setSelectedCategory] = useState("All");
    const menuItem = [...new Set(data.map((val)=> val.category))];

    const filtereItem = ((currcate)=>{
        const newItem = data.filter((newval)=>{
            return newval.category === currcate;
        })
        setSelectedCategory(currcate);
        setProducts(newItem);
    })
  return (
    <>
    <Pageheader title='Shop Page' currentPage = 'Shop' />
    <div className="shoppage">
        <div className="shoppage-left">
            <article>
                <div className="shoppage-header">
                    <p>Showing 01 - 16 of 157 Results</p>
                    <div className="shoppage-header-viewtoggle">
                        <a  className={gridList ===1 ? "grid-active" : "list-active"} onClick={()=> upDateGrid(1)}>
                        <i className="ri-grid-fill"></i>
                        </a>
                        <a  className={gridList ===2 ? "grid-active" : "list-active"} onClick={()=> upDateGrid(2)}>
                        <i className="ri-list-check-3"></i>
                        </a>
                    </div>
                </div>
                <div className="shoppage-productcard">
                    <ProductCard gridList = {gridList} products = {currentProducts} />
                </div>
                <Pagination 
                productPerPage = {productPerPage}
                totalProducts = {products.length}
                paginate = {paginate}
                activePage = {currentPage}
                />
            </article>
        </div>
            <aside className="shoppage-right">
                <Searched products={products} />
                <ShopCategory 
                filtereItem = {filtereItem}
                setItem = {setProducts}
                menuItem = {menuItem}
                setProducts = {setProducts}
                selectedCategory = {selectedCategory}
                />
                <PopularPost/>
            </aside>
    </div>
    </>
  )
}

export default ShopPage