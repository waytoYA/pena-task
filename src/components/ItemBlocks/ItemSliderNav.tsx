import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import styled from '@emotion/styled';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const SliderGrid = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '25px',
}))

const SliderNumbers = styled(Box)(() => ({
    display: 'flex',
    margin: '35px 0px',
    color: '#363636',

}))

const NumberNow = styled(Typography)(() => ({
    fontSize: '34px',
    lineHeight: '1',
}))

const NumberAll = styled(Typography)(() => ({
    fontSize: '18px',
    marginLeft: '5px', 
    lineHeight: '1',
}))

interface ISlider {
    numNow: number;
    numAll: number;
}

const ItemSliderNav = ({numNow, numAll}: ISlider) => {

    return (
        <SliderGrid>

            <IconButton>
                <PlayArrowIcon                         
                    fontSize='large'
                    sx={{ 
                        color: '#6C6C6C',
                    }}
                />
            </IconButton>

            <SliderNumbers>
                <NumberNow>0{numNow}</NumberNow>
                <NumberAll>/0{numAll}</NumberAll>
            </SliderNumbers>

            <IconButton>
                <PlayArrowIcon                         
                    fontSize='large'
                    sx={{ 
                        color: '#6C6C6C',
                        transform: 'rotate(180deg)',
                    }}
                />
            </IconButton>

        </SliderGrid>
    );
}

export default ItemSliderNav;
