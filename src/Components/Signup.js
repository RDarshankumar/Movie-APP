import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Snackbar, Alert } from '@mui/material';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from './Firebase';

const auth = getAuth(app);

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSignup = () => {
    if (password !== confirmPassword) {
      setError("Passwords don't match!");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in, show success snackbar
        setOpenSnackbar(true);
        
        // Clear form fields after successful signup
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError(''); // Clear any existing errors
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1f1c18 0%, #1c1b29 100%)', // Netflix-like background
        padding: '2rem',
        color: '#fff',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.75)', // Semi-transparent dark background
          padding: '2rem',
          borderRadius: '10px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.7)',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', marginBottom: '1.5rem', color: '#fff' }}>
          Sign Up
        </Typography>

        {error && (
          <Alert severity="error" sx={{ marginBottom: '1rem' }}>
            {error}
          </Alert>
        )}

        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Capture input change
          margin="normal"
          variant="filled"
          sx={{
            backgroundColor: '#333',
            borderRadius: '4px',
            '& .MuiInputBase-input': {
              color: '#fff',
            },
            '& .MuiFormLabel-root': {
              color: '#bbb',
            },
          }}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Capture input change
          margin="normal"
          variant="filled"
          sx={{
            backgroundColor: '#333',
            borderRadius: '4px',
            '& .MuiInputBase-input': {
              color: '#fff',
            },
            '& .MuiFormLabel-root': {
              color: '#bbb',
            },
          }}
        />

        <TextField
          fullWidth
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} // Capture input change
          margin="normal"
          variant="filled"
          sx={{
            backgroundColor: '#333',
            borderRadius: '4px',
            '& .MuiInputBase-input': {
              color: '#fff',
            },
            '& .MuiFormLabel-root': {
              color: '#bbb',
            },
          }}
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSignup} // Call handleSignup on click
          sx={{
            marginTop: '1.5rem',
            padding: '0.8rem',
            fontWeight: 'bold',
            backgroundColor: '#e50914', // Netflix red color
            '&:hover': {
              backgroundColor: '#f40612',
            },
          }}
        >
          Sign Up
        </Button>

        {/* Success Snackbar */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
            You have successfully signed up!
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Signup;
