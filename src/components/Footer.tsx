import {  Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { ContainerMain } from '../App';
import { styled } from '@mui/material/styles';

const TextFooter = styled(Typography)(() => ({
    display: 'inline-block',
    color: '#A1A1A1',
    fontSize: '12px',
    cursor: 'pointer',
    '&:hover': {
        color: '#2197D7',
    },
    '& + &': {
        marginLeft: '40px',
    }
}));

const Footer = () => {
    const widthMobile = useMediaQuery('(min-width: 940px)');

    return (
        <ContainerMain sx={{ padding: '20px 0px'}}>
            <Grid container justifyContent={widthMobile ? 'space-between' : 'center'}>
                <Grid item>
                    <TextFooter>2015 @ Copyright - Foundation theme by Stylemixthemes</TextFooter>
                </Grid>

                <Grid item>
                    <TextFooter>Services</TextFooter>
                    <TextFooter>Our Works</TextFooter>
                    <TextFooter>News & events</TextFooter>
                    <TextFooter>Work with us</TextFooter>
                    <TextFooter>F.A.Q</TextFooter>
                    <TextFooter>Contact us</TextFooter>
                    <TextFooter>Shop</TextFooter>
                </Grid>

            </Grid>
        </ContainerMain>
    );    
}

export default Footer;
