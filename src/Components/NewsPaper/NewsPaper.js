import { useState, useEffect } from 'react';
import React from 'react';
import News from '../News/News';
import { Box, Grid } from '@mui/material';
import { Container } from '@mui/system';

const NewsPaper = () => {

    const [newsPaper, setNewsPaper] = useState([])
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=8679413729d040cf85e3be5c72f1e4eb')
            // fetch('./newsData.json')
            .then(res => res.json())
            .then(data => setNewsPaper(data.articles))
    }, [])
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, md: 12, sm: 8 }}>

                    {newsPaper.map(news =>
                        <Grid item xs={2} sm={4} md={4}>
                            <News news={news} />
                        </Grid>
                    )}
                </Grid>
            </Box>
        </Container>
    );
};

export default NewsPaper;