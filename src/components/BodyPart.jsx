import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({ item, setBodyPart, bodyPart}) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className='bodyPart-card'
      sx={{
        borderTop: (bodyPart === item) && '10px solid #BB86FC',
        backgroundColor: '#121212',
        boxShadow: '10px 10px 20px #00000096, -5px 5px 10px #00000096',
        borderBottomLeftRadius: '20px',
        width: '200px',
        height: '200px',
        cursor: 'pointer',
        gap: '20px',
        // transform: {lg: 'scale(1)', xs : 'scale(0.7)'}
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({top: 1600, left: 100, behavior: 'smooth'})
      }}
    >
      <img src={Icon} alt='dumbbel' style={{ width: '40px', height: '40px'}} />
      <Typography fontSize={'24px'} fontWeight={'bold'} color={'#BB86FC'} textTransform={'capitalize'} >{item}</Typography>
    </Stack>
  )
}

export default BodyPart
