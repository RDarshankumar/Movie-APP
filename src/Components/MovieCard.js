import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';

const MovieCard = ({ movie }) => {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: '#141414', color: '#fff', borderRadius: '8px', overflow: 'hidden' }}>
      <CardMedia
        component="img"
        alt={movie.title}
        height="220"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // TMDb image URL
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {movie.title}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button 
            variant="contained" 
            sx={{ backgroundColor: '#e50914', '&:hover': { backgroundColor: '#f40612' }, borderRadius: '4px', flexGrow: 1, marginRight: '0.5rem' }}>
            Watch It
          </Button>
          <Button 
            variant="outlined" 
            sx={{ color: '#e50914', borderColor: '#e50914', borderRadius: '4px', flexGrow: 1 }}>
            Feedback
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
