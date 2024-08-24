// src/components/Nav/Nav.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Grid, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import logo from '../../Assets/NavBar/pett.png';
import './nav.css';

const Nav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <div onClick={handleDrawerToggle} onKeyDown={handleDrawerToggle}>
      <List>
        {/* Order: Home -> Login -> Signup -> Contact Us */}
        <ListItem button component="a" href="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component="a" href="/login">
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem button component="a" href="/signup">
          <ListItemText primary="Signup" />
        </ListItem>
        <ListItem button component="a" href="/contact">
          <ListItemText primary="Contact Us" />
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
                {/* Adjust the spacing here */}
                <Grid item>
                  <Button
                    color="inherit"
                    href="/"
                    sx={{ fontWeight: 'bold', color: 'white', marginLeft: '20px' }} /* Increased margin */
                    className="nav-button"
                  >
                    Home
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    color="inherit"
                    href="/login"
                    sx={{ fontWeight: 'bold', color: 'white', marginLeft: '20px' }} /* Increased margin */
                    className="nav-button"
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    color="inherit"
                    href="/signup"
                    sx={{ fontWeight: 'bold', color: 'white', marginLeft: '20px' }} /* Increased margin */
                    className="nav-button"
                  >
                    Signup
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
              </Grid>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
