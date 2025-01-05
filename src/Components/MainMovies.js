import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Button, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Box } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Image1 from '../DK Images/Image 2.jpg';
import Image2 from '../DK Images/Image1.jpg';
import Image3 from '../DK Images/image 10.jpg';
import Image4 from '../DK Images/image 11.jpg';
import Image5 from '../DK Images/image 12.jpg';
import Image6 from '../DK Images/image 14.jpg';
import Image7 from '../DK Images/image 3.jpg';
import Image8 from '../DK Images/image 4.jpg';
import Image9 from '../DK Images/image 5.jpg';
import Image10 from '../DK Images/image 6.jpg';
import Image11 from '../DK Images/image 7.jpg';
import Image12 from '../DK Images/image 8.jpeg';

const movies = [
  { image: Image1, title: 'Movie Title 1' },
  { image: Image2, title: 'Movie Title 2' },
  { image: Image3, title: 'Movie Title 3' },
  { image: Image4, title: 'Movie Title 4' },
  { image: Image5, title: 'Movie Title 5' },
  { image: Image6, title: 'Movie Title 6' },
  { image: Image7, title: 'Movie Title 7' },
  { image: Image8, title: 'Movie Title 8' },
  { image: Image9, title: 'Movie Title 9' },
  { image: Image10, title: 'Movie Title 10' },
  { image: Image11, title: 'Movie Title 11' },
  { image: Image12, title: 'Movie Title 12' },
];

const MainMovies = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle button click and open the dialog
  const handleWatchClick = () => {
    setOpen(true);
  };

  // Function to close the dialog
  const handleClose = () => {
    setOpen(false);
  };

  // Function to handle logout and navigate to the Login page
  const handleLogout = () => {
    // Clear authentication state here if necessary (e.g., localStorage, session storage)
    navigate('/login'); // Navigate to the Login form
  };

  return (
    <>
      <Grid container spacing={3} sx={{ padding: '2rem' }}>
        {movies.map((movie, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card sx={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', backgroundColor: '#333' }}>
              <CardMedia
                component="img"
                height="300"
                image={movie.image}
                alt={movie.title}
                sx={{ borderRadius: '10px 10px 0 0' }}
              />
              <CardContent sx={{ padding: '1rem', textAlign: 'center', backgroundColor: '#1c1c1c' }}>
                <Typography variant="h6" sx={{ color: '#fff', marginBottom: '0.5rem' }}>
                  {movie.title}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<PlayArrowIcon />} // Add Play icon before text
                  onClick={handleWatchClick} // Handle button click
                  sx={{
                    backgroundColor: '#e50914', // Netflix red color
                    '&:hover': { backgroundColor: '#f40612' },
                    color: '#fff',
                  }}
                >
                  Watch
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Material UI Dialog for Alert */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Network Alert"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your internet network is like this! Please check your connection.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Logout button at the bottom center */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 4, // Add margin to push it down naturally
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={handleLogout} // Handle logout button click
          sx={{
            backgroundColor: '#e50914', // Netflix red color
            '&:hover': { backgroundColor: '#f40612' },
            padding: '0.8rem 2rem',
            margin: '1rem 0'
          }}
        >
          Logout
        </Button>
      </Box>
    </>
  );
};

export default MainMovies;
