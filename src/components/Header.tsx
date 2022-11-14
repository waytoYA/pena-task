import React from 'react';
import { Box } from '@mui/material';
import HeaderNav from './HeaderBlocks/HeaderNav';
import HeaderMain from './HeaderBlocks/HeaderMain';

const Header = () => {

    return (
        <Box
            sx={{
                maxWidth: 1920,
                m: '0 auto',
                display: 'flex',
                background: 'linear-gradient(to right, #D7D7D7 1254px, #282828 666px)',
            }}
        >
            <Box
                sx={{
                    m: '0 auto',
                }}
            >
                <HeaderNav />
                <HeaderMain />
            </Box>
        </Box>
    );
}

export default Header;
