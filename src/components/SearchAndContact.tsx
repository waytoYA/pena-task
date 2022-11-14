import React from 'react';
import { Box, Grid, Input } from '@mui/material';
import Item, { ColorsItem } from './Item';
import ItemIconMini from './ItemBlocks/ItemIconMini';
import { ContainerMain } from '../App';
import { styled } from '@mui/material/styles';

// icons
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import PlaceIcon from '@mui/icons-material/Place';
import SearchIcon from '@mui/icons-material/Search';


const MainTextField = styled(Input)(() => ({
    color: '#fff',
    borderBottom: '1px solid #fff',
    padding: '5px 0px',
    '&::after': {
        borderColor: '#fff',
    }
}));


const SearchAndContact = () => {
  return (
    <Box
        sx={{
            maxWidth: 1920,
            m: '0 auto',
            background: 'linear-gradient(to right, #F5F5F5 1254px, #282828 666px)',
        }}
    >
        <ContainerMain >
            <Grid container flexWrap={'wrap'} justifyContent={'center'}>

                <Item color={'yellow'}>
                    <ItemIconMini text={'Download price'}>
                        <PictureAsPdfIcon
                            sx={{ 
                                width: '70px',
                                height: '70px',
                                color: ColorsItem.black,
                            }}
                        />
                    </ItemIconMini>
                </Item>

                <Item color={'blue'}>
                    <ItemIconMini text={'Contact us'} whiteColorFont>
                        <PlaceIcon
                                sx={{ 
                                width: '70px',
                                height: '70px',
                                color: ColorsItem.black,
                            }}
                        />
                    </ItemIconMini>
                </Item>

                <Item width={2} color={'black'}>
                    <MainTextField 
                        fullWidth
                        placeholder="What you're looking for"
                        sx={{
                            mt: '100px',
                        }}
                        endAdornment={
                            <SearchIcon />
                        }
                    />
                </Item>

            </Grid>
        </ContainerMain>
    </Box>
  );    
}

export default SearchAndContact;
