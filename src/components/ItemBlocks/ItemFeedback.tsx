import React from 'react';
import { Avatar, Grid, Rating, Typography } from '@mui/material';
import { ColorsItem } from '../Item';


const ItemFeedback = () => {

  return (
    <Grid container
        direction={'column'}
        alignItems={'center'}
    >
        <Avatar 
            variant='square' 
            sx={{ 
                bgcolor: ColorsItem.grey,
                width: '60px',
                height: '60px',
                mb: '10px',
            }}
        />
        <Typography
            variant='h6'
            component='h6'
            sx={{
                fontSize: 12,
                fontWeight: 600,
                mb: '10px',
            }}
        >
        Margin H.Jhonsons
        </Typography>
        
        <Rating name="read-only" value={5} readOnly size={'small'} />
        
        <Typography
            variant='h5'
            component='h5'
            sx={{
                fontSize: 14,
                mt: '10px',
                maxWidth: '500px',
                textAlign: 'center',
                color: '#8d8d8d',
            }}
        >
        Together, we'll couple our knowledge, expertise, and innovative capabilities with your astute knowledge of your business-to maximize and optimize results. This is all accomplished in a number of ways.
        </Typography>
    </Grid>
  );
}

export default ItemFeedback;
