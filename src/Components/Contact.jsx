import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper>
      <h2 className='common-heading'>Feel free to contat us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61793.30476592764!2d74.28912073457148!3d14.5373279344073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe83d65b0a4c71%3A0xe9e09fd076bb41c0!2sGokarna%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1662809413348!5m2!1sen!2sin" 
              width="100%" 
              height="200" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
      </iframe>    
      <div className='container'>
        <div className='contact-form'>
          <form action='#' method='POST' className='contact-inputs'>
            <input 
              type="text"
              name="username"
              placeholder="username"
              autoComplete='off'
              required
            />
           <input 
              type="email"
              name="email"
              placeholder="Email"
              autoComplete='off'
              required
            />
            <textarea 
              name='message'
              cols="30"
              rows="6"
              autoComplete='off'
              required
             >
             </textarea>
             <input type="submit" value="send"/>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
    padding: 3rem 0 5rem 0;

    .container {
      margin-top: 6rem;
      text-align: center;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
              border-radius:2rem;
            }
          }

        }
      }
    }
`;

export default Contact