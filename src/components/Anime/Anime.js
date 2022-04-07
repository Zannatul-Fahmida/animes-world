import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Anime = ({ anime }) => {
    const { id, title, description, movie_banner } = anime;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card style={{ backgroundColor: '#fff2f2' }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="300"
                    image={movie_banner}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {`${description}`.slice(0, 140)}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Link style={{ textDecoration: 'none' }} to={`/animeDetails/${id}`}><Button variant="contained" color="secondary">Details</Button></Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Anime;