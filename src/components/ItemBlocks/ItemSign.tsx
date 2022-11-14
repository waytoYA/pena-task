import React from 'react';
import { Box, Input, Button } from '@mui/material';
import styled from '@emotion/styled';
import ItemTitle from './ItemTitle';
import { ColorsItem } from '../Item';

const InputEmail = styled(Input)(() => ({
    padding: '10px 20px',
    color: ColorsItem.blue,
    backgroundColor: '#fff',
    fontSize: 14,
    fontWeight: 600,
    marginTop: '80px',
    '&::after': {
        borderColor: ColorsItem.yellow,
    },
}))

const ItemSign = () => {

    return (
        <>
            <ItemTitle primary white>Subscribe</ItemTitle>
            
            <InputEmail placeholder='E-mail' fullWidth type='email'/>

            <Box sx={{ display: 'flex', justifyContent: 'end'}}>
                <Button variant="text"
                    sx={{
                        fontSize: '12px',
                        color: '#fff',
                        textTransform: 'uppercase',
                        marginTop: '20px',
                    }}
                >
                Sign up
                </Button>
            </Box>
        </>
    );
}

export default ItemSign;
