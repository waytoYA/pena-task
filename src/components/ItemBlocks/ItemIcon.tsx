import React from 'react';
import { Box, Typography } from '@mui/material';
import { ColorsItem } from '../Item';

interface IntItemIcon {
  children: any;
  title: string;
  text: string;
}

const ItemIcon = ({children, title, text}: IntItemIcon) => {

  return (
    <>
      <Box
        sx={{
          backgroundColor: ColorsItem.yellow,
          width: '83px',
          height: '83px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: '35px',

        }}
      >
      {children}
      </Box>
      <Typography
        variant="h5" 
        component="h5"
        sx={{
            fontSize: 26,
            fontWeight: 600,
            color: '#707070',
            letterSpacing: '1.5px',
        }}
      >
      {title}
      </Typography>
      <Typography
        variant="h6" 
        component="h6"
        sx={{
            fontSize: 14,
            color: '#A0A0A0',
        }}
      >
      {text}
      </Typography>
    </>
  );
}

export default ItemIcon;
