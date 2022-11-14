import React from 'react';
import { Grid, Box, useMediaQuery } from '@mui/material';
import { ContainerMain } from '../App';
import Item from './Item';
import ItemSliderNav from './ItemBlocks/ItemSliderNav';
import ItemText from './ItemBlocks/ItemText';
import ItemTitle from './ItemBlocks/ItemTitle';


const OurServices = () => {
    const itemMobile = useMediaQuery('(min-width:1172px)');

    return (
      <ContainerMain>
          <Grid container 
              flexWrap={'wrap'}
              justifyContent={'center'}
          >
            <Item color={'white'}>
              <ItemTitle primary> OUR SERVICES </ItemTitle>
              <ItemText>
              This allows the Design and Engineering team to originate drawings, specificationcs, structural calculations, details and scopes of work that deliver exactly what whe client had intended to achieve
              </ItemText>
            </Item>

            <Item color={'grey'}>
            </Item>

            <Item color={'white'}>
              <ItemTitle> General Contracting </ItemTitle>
              <ItemText>
              This allows the Design and Engineering team to originate drawings, specificationcs, structural calculations, details and scopes of work that deliver exactly what whe client had intended to achieve
              </ItemText>
              
              {/* Triangle on left side */}
              <Box sx={{
                  '&::after': {
                      'content': '""',
                      display: itemMobile ? 'inline-block' : 'none',
                      position: 'absolute',
                      width: '20px',
                      height: '20px',
                      top: 'calc(50% - 10px)',
                      left: '-10px',
                      transform: 'rotate(45deg)',
                      backgroundColor: '#fff',
                  }
              }}></Box>
            </Item>

            <Item color={'grey'}>
            </Item>

            <Item color={'white'}>
              <ItemSliderNav numNow={3} numAll={6} />
            </Item>

            <Item color={'white'}>
              <ItemTitle> Project design and engineering </ItemTitle>
              <ItemText>
              This allows the Design and Engineering team to originate drawings, specificationcs, structural calculations, details and scopes of work that deliver exactly what whe client had intended to achieve
              </ItemText>

              {/* Triangle on right side */}
              <Box sx={{
                  '&::after': {
                      'content': '""',
                      display: itemMobile ? 'inline-block' : 'none',
                      position: 'absolute',
                      width: '20px',
                      height: '20px',
                      top: 'calc(50% - 10px)',
                      right: '-10px',
                      zIndex: 2,
                      transform: 'rotate(45deg)',
                      backgroundColor: '#fff',
                  }
              }}></Box>
            </Item>

            <Item color={'grey'}>
            </Item>

            <Item color={'white'}>
              <ItemTitle> Capital improvements </ItemTitle>
              <ItemText>
              This allows the Design and Engineering team to originate drawings, specificationcs, structural calculations, details and scopes of work that deliver exactly what whe client had intended to achieve
              </ItemText>

              {/* Triangle on top side */}
              <Box sx={{
                  '&::after': {
                      'content': '""',
                      display: itemMobile ? 'inline-block' : 'none',
                      position: 'absolute',
                      width: '20px',
                      height: '20px',
                      top: '-10px',
                      right: 'calc(50% - 10px)',
                      zIndex: 2,
                      transform: 'rotate(45deg)',
                      backgroundColor: '#fff',
                  }
              }}></Box>
            </Item>
    
        </Grid>
      </ContainerMain>
    );
}

export default OurServices;
