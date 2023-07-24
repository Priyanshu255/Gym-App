import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;
    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ]

    return (
        <Stack gap={'60px'} sx={{
            flexDirection: {lg: 'row'},
            p: '20px',
            alignItems: 'center',
        }}>
            <img src={gifUrl} alt={name}  className='detail-image' />
            <Stack sx={{
                gap: {lg: '35px', xs: '20px'}
            }}>
                <Typography variant='h4' pt={'10px'} textTransform={"capitalize"} color="#BB86FC">
                    {name}
                </Typography>
                <Typography variant='h6' color="#BB86FC" >
                    Exercises keep you strong. {name} is one of the best exercises to trgret your {target}. It will help you improve your mood and gain energy.
                </Typography>
                {extraDetail.map((item, index) => (
                    <Stack key={index} direction={'row'} gap={'24px'} alignItems={'center'} >
                        <Button sx={{
                            background: '#3700B3',
                            borderRadius: '50%',
                            width: '75px',
                            height: '75px'
                        }} >
                            <img src = {item.icon} alt={bodyPart}  />
                        </Button>
                        <Typography textTransform={'capitalize'} variant='h5' color="#BB86FC">
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}

export default Detail
