import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{
        width: 250,
        backgroundColor: '#141414',
        height: '100%',
        color: '#fff',
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/login">
          <ListItemText primary="Login" sx={{ color: '#fff', fontWeight: 'bold' }} />
        </ListItem>
        <ListItem button component={Link} to="/signup">
          <ListItemText primary="Sign Up" sx={{ color: '#fff', fontWeight: 'bold' }} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#141414' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 2rem' }}>
          
          {/* Logo Section */}
          <Typography
            variant="h5"
            sx={{ fontWeight: 'bold', color: '#e50914', letterSpacing: '1px', textDecoration:"none" }}
             component={Link}
              to="/"

          >
            DK PRODUCTION
          </Typography>

          {/* Mobile Menu (Hamburger Icon) */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', md: 'none' } }} // Only show on mobile
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop Buttons */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}> {/* Hide on mobile */}
            <Button
              component={Link}
              to="/login"
              sx={{
                color: '#fff',
                fontWeight: 'bold',
                textTransform: 'none',
                marginRight: '1rem',
                '&:hover': {
                  color: '#e50914',
                },
              }}
            >
              Login
            </Button>
            <Button
              component={Link}
              to="/signup"
              variant="contained"
              sx={{
                backgroundColor: '#e50914',
                color: '#fff',
                fontWeight: 'bold',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#f40612',
                },
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile view */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Navbar;
