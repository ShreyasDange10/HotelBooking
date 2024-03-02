import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Featured from '../../Components/Featured/Featured'
import './Home.css'
import PropertyList from '../../Components/PropertyList/PropertyList'
import FeaturedProperties from '../../Components/FeaturedProperties/FeaturedProperties'
import MailList from '../../Components/MailList/MailList'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <div className="home-container">
      <h1 className="home-title">Property Types</h1>
      <PropertyList/>
      <h1 className="home-title">Destinations</h1>
      <Featured/>
      <h1 className="home-title">Featured Properties</h1>
      <FeaturedProperties/>
      <MailList/>
      <Footer/>
    </div>
    </>
  )
}

export default Home