import React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

const MainButton = styled(Button)<ButtonProps>(() => ({
    color: '#fff',
    backgroundColor: '#363636',
    borderRadius: '0px',
    marginTop: '40px',
    fontSize: '12px',
    padding: '10px 22px',
    '&:hover': {
      backgroundColor: '#2C2C2C',
      color: '#fff',
    },
}));


const ItemButton = ({children, ...props}: any) => {
  return (
      <MainButton variant="contained" {...props}>{children}</MainButton>
  );
}

export default ItemButton;
