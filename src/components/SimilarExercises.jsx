import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Loader from './Loader'
import HorizontalScrollbar from './HorizontalScrollbar'

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{
        mt: {lg: '100px', xs: '50px'}
    }}>
      <Typography variant='h4'>
        Exercises that target the same muscle group.
      </Typography>
      <Box sx={{ position: 'relative', width: '100%', p: '0px'}}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
      </Box>
      <Typography variant='h4'>
        Exercises that use the same equipment.
      </Typography>
      <Box sx={{ position: 'relative', width: '100%', p: '0px'}}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} isequipment/> : <Loader />}
      </Box>
    </Box>
  )
}

export default SimilarExercises
