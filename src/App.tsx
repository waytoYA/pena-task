import React from 'react';
import { Box } from '@mui/system';
import OurServices from './components/OurServices';
import Advantages from './components/Advantages';
import Header from './components/Header';
import SearchAndContact from './components/SearchAndContact';
import Footer from './components/Footer';

import { styled } from '@mui/material/styles';

export const ContainerMain = styled(Box)(() => ({
    maxWidth: 1172,
    margin: '0 auto',
}))

const App = () => {
  return (
    <>
      <Header />
      <OurServices />
      <SearchAndContact />
      <Advantages />
      <Footer />
    </>

  );
}

export default App;
