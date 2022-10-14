import React, { useEffect } from 'react'
import { useGlobalContext } from '../assets/Context';
import HeroSection from './HeroSection';
import Contact from './Contact';
import Services from './Services';

const Home = () => {

  const Data={
    title:".....Welcome to our page.....",
    btn:"HIRE ME"
  };

  const {updateHomePage}=useGlobalContext();

  useEffect(()=>{
    updateHomePage();
  }, [])

  return (
    <>
      <HeroSection {...Data} />
      <Services/>
      <Contact/>
    </>
  )
}

export default Home