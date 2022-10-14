import React from 'react'
import { NavLink } from 'react-router-dom';
import {Button} from '../Components/Button';
import styled from 'styled-components';
import {useGlobalContext} from '../assets/Context';
import home from '../images/hero.svg';

const HeroSection = ({title, btn}) => {

    const {details, image}=useGlobalContext();
    //console.log(image);

  return (
    <Wrapper>
       <div className='container grid grid-two-column'>
         <div className='section-hero-data'>
            <p className='hero-top-data'>{title}</p>
            <h1 className='hero-heading'>{details}</h1>
            <p className='hero-para'>
               Passionate Front End Web Developer. Skilled in <b><i>HTML</i></b>, <b><i>CSS</i></b>,<b><i>Javascript</i></b>, <b><i>Bootstrap</i></b>, <b><i>Jquery</i></b>, <b><i>React</i></b> and <b><i>Redux</i></b> technologies...
            </p>  
            <Button className="btn hireme-btn">
               <NavLink to='/contact'>{btn}</NavLink>
            </Button>         
         </div>

         <div className='section-hero-image'>
            <picture>
                <img src={home}  className='hero-img' alt="hero svg image" />
            </picture>
         </div>
       </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
   padding: 7rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 5rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  } 
`;

export default HeroSection
