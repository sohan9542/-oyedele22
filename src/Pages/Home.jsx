import React from 'react'
import GetStarted from '../components/home/GetStarted'
import Hero from '../components/home/Hero'
import Invest from '../components/home/Invest'
import Opportunities from '../components/home/Opportunities'
import Playground from '../components/home/Playground'

const Home = () => {
  return (
    <>
        <Hero/>
        <Playground/>
        <GetStarted/>
        <Invest/>
        <Opportunities/>
    </>
  )
}

export default Home