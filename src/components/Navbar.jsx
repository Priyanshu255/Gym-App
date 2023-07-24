import React from 'react'
// import { Link } from 'react-scroll'
import { Stack } from '@mui/material'
import Logo from '../assets/images/Logo4.png'

const Navbar = () => {
  return (
    <Stack
      name='home'
      direction='row'
      justifyContent='space-around'
      display={'flex'}
      top={'0px'}
      backgroundColor="#121212"
      sx={{gap: {am: '122px', xs: '40px'},
          py: {sm: '32px', xs: '15px'},
          justifyContent: 'none',
          boxShadow: '5px 5px 20px #00000096' }}
      px='20px'
      >

      <a
        href="/Gym-App/"
        >
        <img src= {Logo} alt = "logo" style={{
          width: '75px',
          height: '60px',
          // margin: '0px 20px 0px 0px'
        }} />
      </a>
      <Stack
        direction='row'
        // gap='40px'
        fontSize='24px'
        mt="20px"
        mb="15px"
        // alignItems='flex-end'
        width="100%"
        justifyContent="end"
      >
        <a
          href="/Gym-App/"
          style={{
          textDecoration: 'none',
          color: '#BB86FC',
          borderBottom: "3px solid #3700B3"
        }}
        >Home</a>
        {/* <Link
          activeClass="active"
          spy={true}
          to="exercises"
          smooth={true}
          duration={500}
          style={{
          textDecoration: 'none',
          color: '#BB86FC',
          behavior: 'smooth',
          cursor: 'pointer',
          borderBottom: "3px solid #3700B3"
        }}
        >Exercises</Link> */}
      </Stack>
    </Stack>
  )
}

export default Navbar
