import React from 'react';
import { Box, Grid, IconButton } from '@mui/material';
import Item, { ColorsItem } from '../Item';
import ItemTitle from '../ItemBlocks/ItemTitle';
import ItemText from '../ItemBlocks/ItemText';
import ItemSliderNav from '../ItemBlocks/ItemSliderNav';
import ItemIconMini from '../ItemBlocks/ItemIconMini';
import ItemButton from '../ItemBlocks/ItemButton';

// icons
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const HeaderMain = () => {
    
    return (
        <Grid container
            flexWrap={'wrap'}
            maxWidth={'1172px'}
            mt={'100px'}
        >
            <Item width={2} color={'yellow'}>
                <ItemTitle primary> BUILDING THE WORLD AROUND US </ItemTitle>
                <ItemText>
                    <Box sx={{ color: '#000'}}>
                        Still other clients have reserved for capital improvement projects and will work directly with our Design and Engineering team.
                    </Box>
                </ItemText>
                <ItemButton>Read More</ItemButton>
            </Item>

            <Item color={'grey'}>
            </Item>

            <Item color={'white'}>
                <ItemSliderNav numNow={1} numAll={3}></ItemSliderNav>
            </Item>

            <Item color={'grey'}>
            </Item>

            <Item color={'grey'}>
            </Item>

            <Item color={'blue'}>
                <ItemIconMini
                    text={'Company video'}
                    whiteColorFont
                >
                    <IconButton>
                        <PlayCircleIcon
                            sx={{ 
                                width: '70px',
                                height: '70px',
                                color: ColorsItem.black,
                            }}
                        />
                    </IconButton>
                </ItemIconMini>
            </Item>

            <Item color={'black'}>
            </Item>

        </Grid>
    );
}

export default HeaderMain;
