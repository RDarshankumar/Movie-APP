import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import MovieCard from './MovieCard';

const MovieList = () => {
  const [movies, setMovies] = useState([]); // Initialize with an empty array
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch movies from TMDb API
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=1`);
        const data = await response.json();
        setMovies(data.results || []); // Set to an empty array if results is undefined
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchMovies();
  }, []);

  return (
    <Container sx={{ padding: '2rem 0' }}>
      {loading ? ( // Check if loading
        <Typography variant="h6" color="#fff">
          Loading movies...
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {movies.length > 0 ? ( // Check if movies array has data
            movies.slice(0, 20).map(movie => (
              <Grid item xs={12} sm={6} md={4} key={movie.id}>
                <MovieCard movie={movie} />
              </Grid>
            ))
          ) : (
            <Typography variant="h6" color="#fff">
              No movies found.
            </Typography>
          )}
        </Grid>
      )}
    </Container>
  );
};

export default MovieList;
