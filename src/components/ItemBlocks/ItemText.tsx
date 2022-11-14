import React from 'react';
import { Typography } from '@mui/material';

const ItemText = ({children}: any) => {

  return (
    <Typography 
        variant="h6" 
        component="h6"
        sx={{
            fontSize: 13,
            color: '#8d8d8d',
            mt: '40px',
        }}
    >
    {children}
    </Typography>
  );
}

export default ItemText;
