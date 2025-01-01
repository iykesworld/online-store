import React from 'react'
import './Shop.css'
import { Link } from 'react-router-dom'

const blogList = [
    {
        id: 1,
        imgurl: '/src/assets/blog-card04.png',
        imgAlt: 'blog image',
        title: 'People share their experience with the Iphone 16 Apple Launch',
    },
    {
        id: 2,
        imgurl: '/src/assets/blog-card05.png',
        imgAlt: 'blog image',
        title: 'Unemployment Looms in Africa and across the world',
    },
    {
        id: 3,
        imgurl: '/src/assets/blog-card06.png',
        imgAlt: 'blog image',
        title: 'People share their experience with the Iphone 16 Apple Launch',
    },
    {
        id: 4,
        imgurl: '/src/assets/blog-card07.png',
        imgAlt: 'blog image',
        title: 'Unemployment Looms in Africa and across the world',
    },
]

const PopularPost = () => {
  return (
    <div className='popular-blog'>
        <div className="popular-blog-header">
            <h5>Most Popular Post</h5>
        </div>
        <ul className='popular-post-container'>
            {
                blogList.map((blog,i)=>{
                    return <li key={i}>
                        <Link className='popular-post-link' to={`/blog/${blog.id}`} >
                        <img src={blog.imgurl} alt={blog.imgAlt} />
                        </Link>
                        <div>
                            <Link to={`/blog/${blog.id}`} className='popular-post-text'>
                            <p className='popular-post-title'>{blog.title}</p>
                            <p className='popular-post-date'>October 20<sup>th</sup>, 2024</p>
                            </Link>
                        </div>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default PopularPost