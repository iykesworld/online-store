import React from 'react'
import './Shop.css'

const Pagination = ({productPerPage,totalProducts,paginate,activePage}) => {
    const pageNumbers = [];
    for(let i =1; i<=Math.ceil(totalProducts / productPerPage); i++){
        pageNumbers.push(i)
    };

  return (
    <ul className='pagination'>
        <li className='paginate-arrow'>
            <a  onClick={()=>{
                if(activePage > 1){
                    paginate(activePage - 1)
                }
            }}>
            <i className="ri-arrow-left-s-line"></i>
            </a>
        </li>
        {
            pageNumbers.map((number)=>{
                return <li key={number} className={`pagination-list ${number===activePage ? 'pagination-bg' : ''}`}>
                    <button onClick={()=> paginate(number)}>{number}</button>
                </li>
            })
        }
        <li className='paginate-arrow'>
            <a  onClick={()=>{
                if(activePage < pageNumbers.length){
                    paginate(activePage + 1)
                }
            }}>
            <i className="ri-arrow-right-s-line"></i>
            </a>
        </li>
    </ul>
  )
}

export default Pagination