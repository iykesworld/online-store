import React from 'react'
import './Home.css'
import featureimage1 from '../assets/featureimage1.svg'
import featureimage2 from '../assets/featureimage2.svg'
import featureimage3 from '../assets/featureimage3.svg'
import featureimage4 from '../assets/featureimage4.svg'
import featureimage5 from '../assets/featureimage5.svg'
import featureimage6 from '../assets/featureimage6.svg'
import { Link } from 'react-router-dom'

const Categories = () => {
    const categories = [
        {name: "Jackets", path: "Jackets", Image: featureimage1},
        {name: "Shoes", path: "Shoes", Image: featureimage2},
        {name: "Pants", path: "Pants", Image: featureimage3},
        {name: "Midi Dresses", path: "Midi Dresses", Image: featureimage4},
        {name: "Hoodies", path: "Hoodies", Image: featureimage5},
        {name: "Bags", path: "Bags", Image: featureimage6},
    ];
  return (
    <div className='categories'>
        <div className="categories-top">
            <h1>TOP COLLECTIONS</h1>
            <p>Shop with a conscience. Our collections are made from sustainable, <br />
            eco-friendly fabrics that reduce environmental impact without compromising on style.</p>
        </div>
        <div className="categories-showImages">
            {categories.map((category, index)=>{
                return <Link to="/shop" key={index} className='categories-link'>
                    <img src={category.Image} alt={category.name} />
                    <h4>{category.name}</h4>
                </Link>
            })}
        </div>
    </div>
  )
}

export default Categories