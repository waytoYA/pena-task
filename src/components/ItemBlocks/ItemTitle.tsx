import React from 'react';
import { Typography } from '@mui/material';

interface ITitle {
    children: any;
    primary?: boolean;
    white?: boolean;
}

const ItemTitle = ({children, primary, white}: ITitle) => {

  return (
    <Typography 
        variant="h5" 
        component="h5"
        sx={{
            fontSize: primary ? 24 : 16,
            maxWidth: '47%',
            fontWeight: primary ? 700 : 600,
            position: 'relative',
            textTransform: `${primary && 'uppercase'}`,
            color: `${white && '#fff'}`,
            '&::after': {
                'content': '""',
                display: 'inline-block',
                position: 'absolute',
                width: '40px',
                height: '5px',
                bottom: '-20px',
                left: 0,
                backgroundColor: white ? '#fff' : '#282828',
            }
        }}
    >
    {children}
    </Typography>
);
}

export default ItemTitle;
