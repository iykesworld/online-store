import React from 'react'
import './Pageheader.css'

const Pageheader = ({title, currentPage}) => {
  return (
    <div className='pageheader'>
        <h1>{title}</h1>
        <p>Home / {currentPage}</p>
    </div>
  )
}

export default Pageheader