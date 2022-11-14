import React from 'react';
import { Grid, useMediaQuery } from '@mui/material';

export enum ColorsItem {
    white = '#ffffff',
    grey = '#D7D7D7',
    yellow = '#FFE400',
    blue = '#2197D7',
    black = '#282828',
    lightYellow = '#FCF3D2',
} 

interface IntItemOne {
    children: any;
    color?: string;
    width?: number;
};

const Item = ({children, color, width = 1}: IntItemOne) => {
    const widthMobile = useMediaQuery('(min-width:600px)');

    return (
        <Grid
            item
            width={widthMobile ? 293 * width : '100%'}
            height={widthMobile ? 293 : '350px'}
            sx={{
                // @ts-ignore
                background: ColorsItem[color],
                p: '20px',
                position: 'relative',
            }}
            
        >
            {children}
        </Grid>
    );
}

export default Item;
