import React from 'react';
import { Box, Typography, Link, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#141414', color: '#fff', padding: '2rem 0' }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Links Section */}
        <Grid item xs={12} md={4} textAlign="center">
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
            Links
          </Typography>
          <Box>
            <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: '0.5rem' }}>Home</Link>
            <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: '0.5rem' }}>About Us</Link>
            <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: '0.5rem' }}>Contact</Link>
            <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', marginBottom: '0.5rem' }}>Privacy Policy</Link>
            <Link href="#" color="inherit" underline="hover" sx={{ display: 'block' }}>Terms of Service</Link>
          </Box>
        </Grid>

        {/* Social Media Section */}
        <Grid item xs={12} md={4} textAlign="center">
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
            Follow Us
          </Typography>
          <Box>
            <IconButton component="a" href="#" color="inherit" sx={{ margin: '0 0.5rem' }}>
              <Facebook />
            </IconButton>
            <IconButton component="a" href="#" color="inherit" sx={{ margin: '0 0.5rem' }}>
              <Twitter />
            </IconButton>
            <IconButton component="a" href="#" color="inherit" sx={{ margin: '0 0.5rem' }}>
              <Instagram />
            </IconButton>
            <IconButton component="a" href="#" color="inherit" sx={{ margin: '0 0.5rem' }}>
              <YouTube />
            </IconButton>
          </Box>
        </Grid>

        {/* Contact Section */}
        <Grid item xs={12} md={4} textAlign="center">
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
            Contact
          </Typography>
          <Typography>
            Email: <Link href="mailto:info@netflix.com" color="inherit" underline="hover">info@netflix.com</Link>
          </Typography>
          <Typography>Phone: +1 (800) 123-4567</Typography>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.8rem', opacity: 0.7 }}>
        <Typography>
          &copy; {new Date().getFullYear()} Netflix, Inc. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
