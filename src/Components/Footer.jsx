import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../Components/Button';
import {FaDiscord, FaInstagram, FaYoutube} from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
       <section className='contact-short'>
         <div className='grid grid-two-column'>
            <div>
               <h3>Ready to explore more?</h3>
               <h3>Contact us today</h3>
            </div>
            <div>
              <NavLink to="/">
                 <Button className='getstart-btn'>Get Started</Button>
              </NavLink>
            </div>
         </div>
       </section>

       <footer>
          <div className='container grid grid-four-column'>

             <div className='footer-about'>
               <h3>MultiPage React Site</h3>
               <p>We have built a multipage react website here with all the concepts covered.</p>
             </div>

             <div className='footer-social'>
               <h3>Follow Us On</h3>
               <div className='footer-social--icons'>
                   <div>
                     <FaDiscord className='icons' />
                   </div>
                   <div>
                     <FaInstagram className='icons' />
                   </div>
                   <div>
                     <a href="#" target="_blank" >
                       <FaYoutube className='icons' />
                     </a>
                   </div>
               </div>
             </div>

             <div className='footer-contact'>
               <h3>Call Us</h3>
               <h3>+911234567899</h3>
             </div>

             <div className='footer-subscribe'>
               <h3>Subscribe to get important updates</h3>
               <form action='#'>
                  <input
                    type="email"
                    required
                    autoComplete='off'
                    placeholder='Email'
                   />
                   <input type="submit" value="Subscribe" />
               </form>
             </div>

             

          </div>

          <div className='footer-bottom--section'>
            <hr/>
            <div className='last-div'>
              <p>
                @{new Date().getFullYear()} NagarajSP. All Rights Reserved.
              </p>
              <div className='privacy-div'>
                <p>PRIVACY POLICY</p>
                <p>TERMS AND CONDITIONS APPLIED</p>
              </div>
            </div>
          </div>

       </footer>
    </Wrapper>
  )
}

const Wrapper=styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }

   .grid div:last-child{
     justify-self:end;
     align-self:center;
   }

   footer {
    padding: 14rem 0 1rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    
    p {
      color: ${({ theme }) => theme.colors.white};
    }

    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 1rem;

      hr {
        margin-top: 1rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  .last-div{
    display:flex;
    flex-direction:row;
    justify-content:space-around;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;
      
      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }

      .grid-two-column .getstart-btn{
        margin-right:3rem;
      }
    }

    .last-div{
       flex-direction:column;
      }
    .last-div .privacy-div{
       padding-top:2rem;
    }
  }
`;

export default Footer