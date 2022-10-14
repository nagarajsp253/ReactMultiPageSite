import React, {useEffect} from 'react'
import HeroSection from './HeroSection'
import { useGlobalContext } from '../assets/Context';

const About = () => {

  const Data={
    title:".....Hello, again.....",
    btn:"Contact ",
    // details:"I am Nagaraj SP Nice to meet you.",
    //image:"./Images/about1.svg",
  };

  const {updateAboutPage}=useGlobalContext();

  useEffect(()=>{
    updateAboutPage();
  }, [])

  return (
    <HeroSection {...Data}/>
  )
}

export default About