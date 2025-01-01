import React, { useEffect } from 'react'
import './Home.css'
import Hero from './Hero'
import Categories from './Categories'
import Features from './Features'
import Newarrival from './Newarrival'
import Banner from './Banner'
import Hot from './Hot'
import MainBanner from './MainBanner'
import Collections from './Collections'
import Newsletter from './Newsletter'

import Singleblogpost from './Singleblogpost'

const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <>
       <Hero/>
       <Categories/>
       <Features/>
       <Newarrival/>
       <Banner/>
       <Hot/>
       <MainBanner/>
       <Collections/>
       <Newsletter/>
       <Singleblogpost/>
    </>
  )
}

export default Home