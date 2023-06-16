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
        borderTop: (bodyPart === item) && '10px solid #3700B3',
        backgroundColor: '#FCFDF2',
        boxShadow: '5px 5px 15px #00000071',
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
      <Typography fontSize={'24px'} fontWeight={'bold'} color={'#3A1212'} textTransform={'capitalize'} >{item}</Typography>
    </Stack>
  )
}

export default BodyPart
