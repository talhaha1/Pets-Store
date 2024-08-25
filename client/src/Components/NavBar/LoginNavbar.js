// src/components/Nav/LoginNavbar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Grid, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/NavBar/pett.png';
import './nav.css';

const LoginNavbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate(); // Use React Router's navigate function

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token from localStorage
    navigate('/login'); // Redirect to login page
  };

  const drawerContent = (
    <div onClick={handleDrawerToggle} onKeyDown={handleDrawerToggle}>
      <List>
        <ListItem button component="a" href="/my-adoptions">
          <ListItemText primary="My Adoptions" />
        </ListItem>
        <ListItem button component="a" href="/contact">
          <ListItemText primary="Contact Us" />
        </ListItem>
        <ListItem button onClick={handleLogout}>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#4A90E2', padding: '0' }}>
      <Toolbar sx={{ padding: '0' }}>
        <Grid container alignItems="center" sx={{ padding: '0' }}>
          <Grid item xs={6} sm={4} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <div className="logo">
              <a href="/">
                <img src={logo} alt="Full Stack" style={{ height: '50px' }} />
              </a>
              <span className="site-title" style={{ color: 'white', marginLeft: '10px' }}>Furry Friends</span>
            </div>
          </Grid>

          <Grid item xs={6} sm={8}>
            {isMobile ? (
              <>
                <IconButton
                  color="inherit"
                  edge="end"
                  aria-label="menu"
                  onClick={handleDrawerToggle}
                  sx={{ marginLeft: 'auto' }}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={handleDrawerToggle}
                  sx={{ '& .MuiDrawer-paper': { width: '240px' } }}
                >
                  {drawerContent}
                </Drawer>
              </>
            ) : (
              <Grid container justifyContent="flex-end" alignItems="center" sx={{ paddingRight: '40px' }}>
                <Grid item>
                  <Button
                    color="inherit"
                    href="/my-adoptions"
                    sx={{ fontWeight: 'bold', color: 'white', marginLeft: '20px' }} /* Increased margin */
                    className="nav-button"
                  >
                    My Adoptions
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    color="inherit"
                    href="/contact"
                    sx={{ fontWeight: 'bold', color: 'white', marginLeft: '20px' }} /* Increased margin */
                    className="nav-button"
                  >
                    Contact Us
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    color="inherit"
                    onClick={handleLogout} // Handle logout
                    sx={{ fontWeight: 'bold', color: 'white', marginLeft: '20px' }}
                    className="nav-button"
                  >
                    Logout
                  </Button>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default LoginNavbar;
