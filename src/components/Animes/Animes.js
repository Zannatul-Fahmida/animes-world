import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Anime from '../Anime/Anime';

const Animes = () => {
    const [animes, setAnimes] = useState([]);
    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(data => setAnimes(data))
    }, [])
    return (
        <Container>
            <Box py={3}>
                <Typography variant="h4" mb={3} sx={{ fontWeight: 'bold' }}>Welcome To <Typography variant="h4" sx={{ display: 'inline', color: 'secondary.main', fontWeight: 'bold' }}>Animes World</Typography></Typography>
                <Grid container spacing={2}>
                    {
                        animes.map(anime => <Anime
                            key={anime.id}
                            anime={anime}
                        ></Anime>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Animes;