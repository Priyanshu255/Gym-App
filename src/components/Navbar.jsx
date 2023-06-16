import React from 'react'
import { Link } from 'react-scroll'
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
      backgroundColor="#FFE9B1"
      sx={{gap: {am: '122px', xs: '40px'},
          py: {sm: '32px', xs: '20px'},
          justifyContent: 'none'}}
      px='20px'
      >

      <a
        href="/Gym-App/"
        >
        <img src= {Logo} alt = "logo" style={{
          width: '75px',
          height: '55px',
          margin: '0 20px'
        }} />
      </a>
      <Stack
        direction='row'
        gap='40px'
        fontSize='24px'
        alignItems='flex-end'
      >
        <a
          href="/Gym-App/"
          style={{
          textDecoration: 'none',
          color: '#7743DB',
          borderBottom: "3px solid #3700B3"
        }}
        >Home</a>
        <Link
          activeClass="active"
          spy={true}
          to="exercises"
          smooth={true}
          duration={500}
          style={{
          textDecoration: 'none',
          color: '#7743DB',
          behavior: 'smooth',
          cursor: 'pointer',
          borderBottom: "3px solid #3700B3"
        }}
        >Exercises</Link>
      </Stack>
    </Stack>
  )
}

export default Navbar
