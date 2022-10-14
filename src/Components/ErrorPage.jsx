import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from './Button';

const ErrorPage = () => {
  return (
    <Wrapper>
        <img src="./Images/error.svg" width="600" height="350" alt="error image"/>
        <NavLink to="/">
           <Button className='btn'>Back to Home</Button>
        </NavLink> 
    </Wrapper>
  )
}

const Wrapper=styled.section`
   padding:3rem 0;

   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;

   .btn{
     margin-top:3rem;
     font-size:1.8rem;
   }

`;

export default ErrorPage
