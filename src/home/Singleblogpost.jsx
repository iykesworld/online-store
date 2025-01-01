import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';

const postList = [
    {
        id: 1,
        imgurl: 'src/assets/blog-image1.png',
        imgAlt: 'blog image',
        title:  'How to recreate their iconic looks with Iykes Designs Style and accessories ',
        sub: 'Read More',
        icon: "ri-arrow-right-line"
    },
    {
        id: 2,
        imgurl: 'src/assets/blog-image2.png',
        imgAlt: 'blog image',
        title:  'How to recreate their iconic looks with Iykes Designs Style and accessories ',
        sub: 'Read More',
        icon: "ri-arrow-right-line"
    },
    {
        id: 3,
        imgurl: 'src/assets/blog-image3.png',
        imgAlt: 'blog image',
        title:  'How to recreate their iconic looks with Iykes Designs Style and accessories ',
        sub: 'Read More',
        icon: "ri-arrow-right-line"
    },
];

const Singleblogpost = () => {
    
  return (
    <div className='single-blog-post'>
        <h1>LATEST BLOG</h1>
        <p className='sub-title'>The fusion of lifestyle and fashion, these blogs craft an immersive experience, inspiring & informing fashion aficionados across the globe</p>
        <div className="single-blog-container">
            {
                postList.map((post,index)=>{
                    return <Link to={`/blog/${post.id}`} key={index} className='single-blog-wrapper'>
                        <div className='singl-blog-image-container'>
                        <img src={post.imgurl} alt={post.imgAlt} />
                        </div>
                        <div className="single-blog-details">
                            <p>October, 20<sup>th</sup> 2024</p>
                            <p className='single-blog-title'>{post.title}</p>
                            <div className="readmore">
                                <p>{post.sub}</p>
                                <i className={post.icon}></i>
                            </div>
                        </div>
                    </Link>
                })
            }
        </div>
    </div>
  )
}

export default Singleblogpost