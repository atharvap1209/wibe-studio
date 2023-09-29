import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/Svgs/star_white_48dp.svg'

const Section = styled.section`
    min-height : 100vh;
    width : 100vw;
    margin : 5rem auto;

    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;

    background-color : ${props => props.theme.body};
    color : ${props => props.theme.text};

    position : relative;
`

const LogoContainer = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;

    img {
      width : 10vw;
      height : auto;
    }

    h3 {
      font-size : ${props => props.theme.fontxl};
      font-family : 'Kaushan Script';
    }

`
const FooterComponent = styled(motion.footer)`
    width : 80vw;

    ul {
      list-style : none;
      display : flex;
      justify-content : space-between;
      align-items : center;
      flex-wrap : wrap;
      margin : 2rem;
      margin-top : 4rem;
      padding : 0 1rem;
      border-top : 1px solid ${props => props.theme.text};
      border-bottom : 1px solid ${props => props.theme.text};
    }

    li {
      padding : 2rem;
      font-size : ${props => props.theme.fontlg};
      text-transform : uppercase;
      cursor : pointer;
      transition : all 0.3s ease;

      &:hover{
        transform : scale(1.1);
      }
    }
`

const Bottom = styled.div`
padding : 0.5rem;
margin : 0 4rem;
font-size : ${props =>  props.theme.fontlg};

display:flex;
justify-content : space-between;
align-items : center;
a{
  text-decoration : underline;
}
`

const Footer = () => {
  return (
    <Section>
      <LogoContainer>
        <img src={Logo} alt="Wibe Studio" />
        <h3>Wibe Studio</h3>
      </LogoContainer>
      <FooterComponent
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul>
          <li>home</li>
          <li>about</li>
          <li>shop</li>
          <li>new arrival</li>
          <li>
            <a href="https://www.google.com" target="_blank" rel="noreferrer">
              look book
            </a>
          </li>
          <li>
            <a href="https://www.google.com" target="_blank" rel="noreferrer">
              reviews
            </a>
          </li>
        </ul>
        <Bottom>
          <span
            data-Scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            &copy; {new Date().getFullYear()}. All rights reserved.
          </span>
          <span
            data-Scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            Made with &hearts; by &nbsp;
            <a
              href="https://www.github.com/atharvap1209"
              target="_blank"
              rel="noreferrer"
            >
              atharvacodes
            </a>
          </span>
        </Bottom>
      </FooterComponent>
    </Section>
  );
}

export default Footer
