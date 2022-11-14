import React from 'react';
import { Box, Typography } from '@mui/material';

interface IntIconMini {
  children: any;
  text: string;
  whiteColorFont?: boolean;
}

const ItemIconMini = ({children, text, whiteColorFont}: IntIconMini) => {

  return (
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
        <Typography
          variant="h5" 
          component="h5"
          sx={{
              fontSize: 14,
              mt: '8px',
              textTransform: "uppercase",
              color: whiteColorFont ? '#fff' : '#000',
          }}
        >
        {text}
        </Typography>
      </Box>
  );
}

export default ItemIconMini;
