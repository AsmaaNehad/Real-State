// import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Styled from 'styled-components'
const TitleStyle = Styled.h2`
  color:#332;
  background:#a4d;
`;

const HomeStyle ={
  color:'red',
  background:'#444',
  padding: '24px',
  borderRadius:'10px',
  display:'inline-block'
}
const Home = () => {
  return (
    <>
  <Navbar/>
  <div>CONTENT</div>
  <h1 style={HomeStyle}>HELLO WORLD</h1>
  <TitleStyle>hello world</TitleStyle>
  <Footer/>
  </>
  )
}

export default Home



