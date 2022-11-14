import React from 'react';
import { Grid } from '@mui/material';
import Item, { ColorsItem } from './Item';
import ItemFeedback from './ItemBlocks/ItemFeedback';
import ItemIcon from './ItemBlocks/ItemIcon';
import ItemText from './ItemBlocks/ItemText';
import ItemTitle from './ItemBlocks/ItemTitle';
import { ContainerMain } from '../App';


// icons
import BoltIcon from '@mui/icons-material/Bolt';
import OpacityIcon from '@mui/icons-material/Opacity';
import SettingsIcon from '@mui/icons-material/Settings';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ItemIconMini from './ItemBlocks/ItemIconMini';
import ItemButton from './ItemBlocks/ItemButton';
import ItemSliderNav from './ItemBlocks/ItemSliderNav';
import ItemNews from './ItemBlocks/ItemNews';
import ItemSign from './ItemBlocks/ItemSign';


const Advantages = () => {
  return (
    <ContainerMain>

        <Grid container 
            flexWrap={'wrap'}
            justifyContent={'center'}
            
        >
            <Item width={2} color={'white'}>
                <ItemFeedback />
            </Item>

            <Item width={2} color={'grey'}>
                <ItemTitle primary>YOUR BUILDING IS IN GOOD HANDS</ItemTitle>
                <ItemText>Our mission is to provide the highest levelo of service for our client-partners from concept through construction.</ItemText>
                <ItemButton>About company</ItemButton>
            </Item>

            <Item width={2} color={'lightYellow'}>
                <ItemFeedback />
            </Item>

            <Item color={'white'}>

                <ItemIcon
                    title={'55 000'}
                    text={'Expert Witness'}
                >
                    <BoltIcon
                        fontSize='large'
                        sx={{ 
                            color: ColorsItem.blue,
                        }}
                    />
                </ItemIcon>
                
            </Item>

            <Item color={'grey'}>
                <ItemIcon
                    title={'124 600'}
                    text={'Construction'}
                >
                    <OpacityIcon
                        fontSize='large'
                        sx={{ 
                            color: ColorsItem.blue,
                        }}
                    />
                </ItemIcon>
            </Item>

            <Item color={'blue'}>
                <ItemNews />
            </Item>

            <Item color={'white'}>
                <ItemFeedback />
            </Item>

            <Item color={'grey'}>
                <ItemIcon
                    title={'18 000'}
                    text={'Procurement'}
                >
                    <SettingsIcon
                        fontSize='large'
                        sx={{ 
                            color: ColorsItem.blue,
                        }}
                    />
                </ItemIcon>
            </Item>

            <Item color={'white'}>
                <ItemIcon
                    title={'78 150'}
                    text={'Project Managments'}
                >
                    <LightbulbIcon
                        fontSize='large'
                        sx={{ 
                            color: ColorsItem.blue,
                        }}
                    />
                </ItemIcon>
            </Item>

            <Item color={'white'}>
                <ItemTitle>Contemporary Villa</ItemTitle>
                <ItemText>Our mission is to provide the highest levelo of service for our client-partners from concept through construction. Our mission is to provide the highest levelo of service for our client-partners from concept through construction. Our mission is to provide the highest levelo of service for our client-partners from concept through construction. Our mission is to provide the highest levelo of service for our client-partners from concept through construction. </ItemText>
            </Item>

            <Item color={'grey'}>
            </Item>

            <Item color={'grey'}>
            </Item>

            <Item color={'yellow'}>
                <ItemIconMini
                    text={'Work with us'}
                >
                    <SettingsApplicationsIcon
                        sx={{ 
                            width: '70px',
                            height: '70px',
                            color: ColorsItem.black,
                        }}
                    />
                </ItemIconMini>
            </Item>

            <Item color={'white'}>
                <ItemText>Our mission is to provide the highest levelo of service for our client-partners from concept through construction.</ItemText>
                <ItemButton 
                    sx={{ 
                        backgroundColor: ColorsItem.yellow,
                        color: '#000',
                        marginTop: '100px',
                    }}
                        
                >View project</ItemButton>
            </Item>

            <Item color={'grey'}>
            </Item>

            <Item color={'white'}>
                <ItemSliderNav numNow={1} numAll={9} />
            </Item>

            <Item color={'blue'}>
                <ItemSign />
            </Item>

        </Grid>

    </ContainerMain>
  );
}

export default Advantages;
