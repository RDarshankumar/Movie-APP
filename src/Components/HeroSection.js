import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import img1 from './Back.jpg'

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '80vh',
        backgroundImage: 'url("https://image.tmdb.org/t/p/original/y6h0vW9yF6H3uOByBqEjPsfjM8X.jpg")', // Replace with your movie image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      {/* Overlay for better text visibility */}
      <Box
  sx={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Darker overlay for a Netflix-like look
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${img1})`, // Gradient + watermark image
    backgroundSize: 'cover', // Making the watermark image cover the entire area
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center', // Center the image perfectly
    opacity: 1, // Full opacity for a strong effect
  }}
/>



      <Box sx={{ position: 'relative', zIndex: 1, padding: '2rem', maxWidth: '600px' }}>
        <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
          Movie Title
        </Typography>
        <Typography variant="h5" component="h2" sx={{ marginBottom: '2rem' }}>
          A brief description of the movie goes here. It can be a captivating tagline or a short synopsis to grab the audience's attention.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#e50914',
            color: '#fff',
            marginRight: '1rem',
            '&:hover': {
              backgroundColor: '#f40612',
            },
          }}
        >
          Watch Now
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: '#fff',
            borderColor: '#fff',
            '&:hover': {
              borderColor: '#e50914',
              color: '#e50914',
            },
          }}
        >
          More Info
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
