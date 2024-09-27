import React, { useState } from "react";
import { TextField, Button, Typography, Box, Snackbar, Alert } from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./Firebase"; // Ensure this points to your Firebase config
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For displaying errors
  const [openSnackbar, setOpenSnackbar] = useState(false); // Snackbar for success
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle user login
  const loginUser = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    setError(""); // Reset error state before trying login

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Show success snackbar when logged in
        setOpenSnackbar(true);

        // Clear form fields on successful login
        setEmail("");
        setPassword("");

        // Navigate to MainMovies component after login
        setTimeout(() => {
          navigate("/main-movies"); // Navigate to the MainMovies route
        }, 2000); // Delay to show the Snackbar for 2 seconds
      })
      .catch((error) => setError(error.message)); // Display error to user
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1f1c18 0%, #1c1b29 100%)", // Netflix-like background
        padding: "2rem",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.75)", // Semi-transparent dark background
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.7)",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: "center", marginBottom: "1.5rem", color: "#fff" }}
        >
          Login
        </Typography>

        {/* Error Alert */}
        {error && (
          <Alert severity="error" sx={{ marginBottom: "1rem" }}>
            {error}
          </Alert>
        )}

        <TextField
          fullWidth
          label="Email"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Use onChange instead of onClick
          variant="filled"
          sx={{
            backgroundColor: "#333",
            borderRadius: "4px",
            "& .MuiInputBase-input": {
              color: "#fff",
            },
            "& .MuiFormLabel-root": {
              color: "#bbb",
            },
          }}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Use onChange instead of onClick
          margin="normal"
          variant="filled"
          sx={{
            backgroundColor: "#333",
            borderRadius: "4px",
            "& .MuiInputBase-input": {
              color: "#fff",
            },
            "& .MuiFormLabel-root": {
              color: "#bbb",
            },
          }}
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={loginUser} // Handle login
          sx={{
            marginTop: "1.5rem",
            padding: "0.8rem",
            fontWeight: "bold",
            backgroundColor: "#e50914", // Netflix red color
            "&:hover": {
              backgroundColor: "#f40612",
            },
          }}
        >
          Login
        </Button>

        {/* Success Snackbar */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
            You are signed in successfully!
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Login;
