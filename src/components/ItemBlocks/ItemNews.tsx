import React from 'react';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';

const NewsName = styled(Typography)(() => ({
    fontSize: 24,
    maxWidth: '55%',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: '#fff',
}))

const NewsTitle = styled(Typography)(() => ({
    fontSize: 18,
    color: '#fff',
}))

const NewsParagraph = styled(Typography)(() => ({
    fontSize: 14,
    color: '#fff',
    opacity: 0.5,
    marginTop: '20px',
}))

const ItemNews = () => {
    return (
        <>
            <NewsName>News</NewsName>
            <NewsParagraph>12 february, 2015</NewsParagraph>
            <NewsTitle>Project Design and Engineering Services</NewsTitle>
            <NewsParagraph>23 comments</NewsParagraph>
        </>
    );
}

export default ItemNews;
