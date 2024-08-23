import React from 'react';
import { AppBar, Toolbar, Grid, Button } from '@mui/material';
import logo from '../../Assets/NavBar/pett.png';
import './nav.css';
import './responsive.css';

const Nav = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#4A90E2', padding: '0' }}> {/* Updated color */}
      <Toolbar sx={{ padding: '0' }}>
        <Grid container alignItems="center" sx={{ padding: '0' }}>
          <Grid item xs={6} sm={4} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <div className="logo">
              <a href="/">
                <img src={logo} alt="Full Stack" style={{ height: '50px' }} /> {/* Adjust size as needed */}
              </a>
              <span className="site-title" style={{ color: 'white', marginLeft: '10px' }}>Furry Friends</span> {/* Adjust color here */}
            </div>
          </Grid>

          <Grid item xs={6} sm={8} className="nav-links">
            <Grid container justifyContent="flex-end" alignItems="center">
              <Grid item>
                <Button color="inherit" href="/signup" sx={{ fontWeight: 'bold', color: 'white' }} className="nav-button">
                  Signup
                </Button>
              </Grid>
              <Grid item>
                <Button color="inherit" href="/login" sx={{ fontWeight: 'bold', color: 'white' }} className="nav-button">
                  Login
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
