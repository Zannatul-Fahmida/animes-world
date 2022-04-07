import { Box, Button, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const AnimeDetails = () => {
    const { animeId } = useParams();
    const [anime, setAnime] = useState({});
    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${animeId}`)
            .then(res => res.json())
            .then(data => setAnime(data))
    }, [animeId]);
    return (
        <Container>
            <Box py={3}>
                <img
                    src={anime.image}
                    alt={anime.title}
                    loading="lazy"
                />
                <Typography variant="h4" my={2} sx={{ color: 'secondary.main', fontWeight: 'bold' }}>{anime.title}</Typography>
                <Typography variant="h6" my={2} sx={{ fontWeight: 'bold' }}>{anime.original_title}</Typography>
                <Box style={{ backgroundColor: '#fff2f2' }} sx={{ display: 'flex', justifyContent: 'space-between', borderRadius: 2 }} p={2}>
                    <Typography variant="subtitle2"><Typography variant="subtitle2" sx={{ fontWeight: 'bold', display: 'inline' }}>Director: </Typography>{anime.director}</Typography>
                    <Typography variant="subtitle2"><Typography variant="subtitle2" sx={{ fontWeight: 'bold', display: 'inline' }}>Producer: </Typography>{anime.producer}</Typography>
                    <Typography variant="subtitle2"><Typography variant="subtitle2" sx={{ fontWeight: 'bold', display: 'inline' }}>Release Date: </Typography>{anime.release_date}</Typography>
                </Box>
                <Typography variant="body1" my={2}>{anime.description}</Typography>
                <Link style={{ textDecoration: 'none' }} to="/"><Button variant="contained" color="secondary">Back To Home</Button></Link>
            </Box>
        </Container>
    );
};

export default AnimeDetails;