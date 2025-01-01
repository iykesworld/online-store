import React, { useEffect } from 'react'
import './Blog.css'
import Pageheader from '../components/pageheader/Pageheader'
import blogdata from '../data/blogdata.js'
import { Link } from 'react-router-dom'

const Blog = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    })
  return (
    <>
    <Pageheader title="Blog Page" currentPage="Blog page" />
    <div className="blog-container">
        {
            blogdata.map((blog, index)=>{
                return <Link key={index} to={`/blog/${blog.id}`} className='blog-wrapper'>
                    <div className="blog-image-wrapper">
                        <img src={blog.imgUrl} alt={blog.imgAlt} />
                    </div>
                    <h4>{blog.title}</h4>
                    <div className="blog-name-date-container">
                        <div className="blog-name">
                        <i className="ri-account-circle-line"></i>
                        <span>{blog.name}</span>
                        </div>
                        <div className="blog-date">
                        <i className="ri-calendar-line"></i>
                        <span>{blog.date}</span>
                        </div>
                    </div>
                    <div className="blog-description">
                        <p>{blog.desc}</p>
                    </div>
                    <div className="blog-footer">
                        <Link to={`/blog/${blog.id}`} className='readmore-link' >
                        <span>Read More</span>
                        <i className="ri-download-2-line"></i>
                        </Link>
                        <div className='icon-circle'>
                        <i className="ri-account-circle-fill"></i>
                        </div>
                    </div>
                </Link>
            })
        }
    </div>
    </>
  )
}

export default Blog